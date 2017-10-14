import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SvgIcon from 'react-icons-kit'
import { single } from 'react-icons-kit/entypo/single'
import { angleRight } from 'react-icons-kit/fa/angleRight'
import { angleDown } from 'react-icons-kit/fa/angleDown'

export class SideMenu extends Component {

  constructor(props, defaultProps) {
    super(props, defaultProps);
    this.state = { items: [], componentStateTree: [] };
  }

  //
  // methods for COMPONENT structure
  //

  componentWillMount() {
    if (this.props.children) {
      this.setState({
        componentStateTree: this.buildComponentStateTree(this.props.children, null),
      });
    }
  }

  buildComponentStateTree(children, parent) {
    const { activeItem } = this.props;

    return React.Children.map(children, (child) => {
      const newChild = {};
      let subTree = [];

      newChild.active = false;
      newChild.parent = parent;

      if (activeItem === child.props.value) {
        this.activateParentsComponentTree(newChild);
      }

      if (child.props.children) {
        subTree = this.buildComponentStateTree(child.props.children, newChild);
      }
      newChild.children = subTree;

      return newChild;
    });
  }

  handleComponentClick(item) {
    const { collapse } = this.props;
    const { componentStateTree } = this.state;
    const activeBefore = item.active;

    // collapse
    if (collapse) {
      this.deactivateComponentTree(componentStateTree);
    }
    this.activateParentsComponentTree(item, activeBefore);
    this.setState({ componentStateTree: componentStateTree });
  }

  activateParentsComponentTree(item, activeBefore) {
    if (item) {
      item.active = !activeBefore;
      this.activateParentsComponentTree(item.parent);
    }
  }

  deactivateComponentTree(componentStateTree) {
    return componentStateTree.map((child) => {
      child.active = false;
      if (child.children) {
        child.children = this.deactivateComponentTree(child.children);
      }

      return child;
    });
  }

  //
  // methods for JSON structure
  //

  componentDidMount() {
    const { items } = this.props;

    if (items) {
      this.setState({ itemTree: this.buildTree(items, null) });
    }
  }

  buildTree(children, parent) {
    const { activeItem } = this.props;

    return children.map((child) => {
      const newChild = { ...child };
      let subTree = [];

      newChild.parent = parent;
      newChild.active = false;

      if (newChild.value === activeItem) {
        newChild.active = true;
        this.activeParentPath(newChild);
      }

      if (child.children) {
        subTree = this.buildTree(child.children, newChild);
      }
      newChild.children = subTree;

      return newChild;
    });
  }

  deactivateTree(itemTree) {
    itemTree.forEach((item) => {
      item.active = false;
      if (item.children) {
        this.deactivateTree(item.children);
      }
    });
  }

  activeParentPath(item) {
    let curItem = item;
    while (curItem !== null) {
      curItem.active = true;
      curItem = curItem.parent;
    }
  }

  onItemClick(item) {
    const { itemTree } = this.state;
    const { onMenuItemClick, collapse } = this.props;
    const self = this;
    return (e) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();

      // handle UI changes
      if (!item.active) {
        // if menu is in collapse mode, close all items
        if (collapse) {
          self.deactivateTree(itemTree);
        }
        item.active = true;
        self.activeParentPath(item);
        self.setState({ itemTree: itemTree });
      } else {
        item.active = false;
        // if menu is in collapse mode, close only
        if (item.children) {
          self.deactivateTree(item.children);
        }
        if (item.parent) {
          self.activeParentPath(item.parent);
        }
        self.setState({ itemTree: itemTree });
      }

      // handle what happens if the item is a leaf node
      if (!item.children || item.children.length === 0) {
        if (onMenuItemClick) {
          onMenuItemClick(item.value);
        } else {
          window.location.href = `#${item.value}`;
        }
      }
    };
  }

  renderChevron(item) {
    if (item.children && item.children.length > 0) {
      if (item.active) {
        return (<i className="fa fa-chevron-down" />);
      }
      return (<i className="fa fa-chevron-left" />);
    }
    return null;
  }

  handleRenderMenuItemContent(item) {
    const { renderMenuItemContent } = this.props;
    if (renderMenuItemContent) {
      return renderMenuItemContent(item);
    }
    let icon = typeof(item.icon) === 'undefined'?single:item.icon
    return (
      <span>
          <SvgIcon size={20} icon={icon} className='item-icon'/>
        {/* render a simple label */}
        <span className="item-label"> { item.label } </span>
        { this.renderChevron(item) }
      </span>
    );
  }
          // <Link to={item.value}>{ item.label }</Link>
        // <span className="item-label"> { item.label } </span>
        /*
        {item.icon &&
          <i className={`fa ${item.icon} item-icon`} />
        }
        */
        // <SvgIcon size={20} icon={item.icon}/>

  renderItem(item, level) {
    if (item.divider) {
      return (
        <div key={item.value} className={`divider divider-level-${level}`}>
          { item.label }
        </div>
      );
    }
    return (
      <div
        key={item.value}
        className={`item item-level-${level} ${item.active ? 'active' : ''}`}>
        <div
          className="item-title"
          onClick={this.onItemClick(item)}>
          { this.handleRenderMenuItemContent(item) }
        </div>
        {/* render children */}
        <div className={`children ${item.active ? 'active' : 'inactive'}`}>
          {item.children && item.children.map((child) =>
            this.renderItem(child, level + 1)
          )}
        </div>
      </div>
    );
  }

  render() {
    const { itemTree, componentStateTree } = this.state;
    const { theme, onMenuItemClick, renderMenuItemContent } = this.props;


    if (!this.props.children) {
      // sidemenu constructed from json
      return (
        <div className={`Side-menu Side-menu-${theme} ${''} children active`}>
          {itemTree && itemTree.map((item) =>
            this.renderItem(item, 1)
          )}
        </div>
      );
    }
    // sidemenu constructed with react components
    return (
      <div className={`Side-menu  Side-menu-${theme} ${''} children active`}>
        { React.Children.map(this.props.children, (child, index) => {
          return React.cloneElement(child, {
            activeState: componentStateTree[index],
            handleComponentClick: this.handleComponentClick.bind(this),
            renderMenuItemContent: renderMenuItemContent,
            onMenuItemClick: onMenuItemClick,
            level: 1,
          });
        })}
      </div>
    );
  }
}

SideMenu.propTypes = {
  items: PropTypes.array,
  onMenuItemClick: PropTypes.func,
  renderMenuItemContent: PropTypes.func,
  theme: PropTypes.string,
  collapse: PropTypes.bool,
  activeItem: PropTypes.string,
};

SideMenu.defaultProps = {
  collapse: true,
  theme: 'default',
};

export class Item extends Component {

  onItemClick() {
    this.props.handleComponentClick(this.props.activeState);
    const { onMenuItemClick, children, value } = this.props;
    if (!children || children.length === 0) {
      if (onMenuItemClick) {
        onMenuItemClick(value);
      } else {
        window.location.href = `#${value}`;
      }
    }
  }

  renderChevron(children, activeState) {
    if (children) {
      if (activeState.active) {
        return (
          <SvgIcon size={20} icon={angleDown} className='item-icon'/>
        )
      }
      return (
        <SvgIcon size={20} icon={angleRight} className='item-icon'/>
      )
    }
    return null;
  }

  handleRenderMenuItemContent() {
    const { renderMenuItemContent, children, value, label, icon, activeState } = this.props;
    if (renderMenuItemContent) {
      return renderMenuItemContent({ icon: icon, value: value, label: label });
    }
    return (
      <span>
        {/* render icon if provided*/}
        +
        {icon &&
          <i className={`fa ${icon} item-icon`} />
        }
        +
        {/* render a simple label*/}
        <span className="item-label"> + {label} + </span>
        { this.renderChevron(children, activeState) }
      </span>
    );
  }

  render() {
    const { label,
      activeState,
      level,
      onMenuItemClick,
      divider,
      children,
      renderMenuItemContent } = this.props;

    if (divider) {
      return (
        <div className={`divider divider-level-${level}`}>{label} </div>
      );
    }
    return (
      <div className={`item item-level-${level} ${activeState.active ? 'active' : ''}`}>
        <div className="item-title" onClick={this.onItemClick.bind(this)}>
          {this.handleRenderMenuItemContent()}
        </div>
        {children &&
          <div className={`children ${activeState.active ? 'active' : 'inactive'}`}>
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, {
                handleComponentClick: this.props.handleComponentClick,
                activeState: activeState.children[index],
                renderMenuItemContent: renderMenuItemContent,
                onMenuItemClick: onMenuItemClick,
                level: level + 1,
              });
            })}
          </div>
        }
      </div>
    );
  }
}

Item.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  activeState: PropTypes.object,
  level: PropTypes.number,
  // icon: PropTypes.object,
  onMenuItemClick: PropTypes.func,
  handleComponentClick: PropTypes.func,
  renderMenuItemContent: PropTypes.func,
  divider: PropTypes.bool,
};
