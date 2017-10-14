import { connect } from 'react-redux'
import Menu from '../components/Menu/Menu'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
  return {
    menu: state.menu,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}


export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(Menu))
