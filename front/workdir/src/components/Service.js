import React, { Component } from 'react'
import { Jumbotron
} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

import './Service.css';

export class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='Content'>
        <Jumbotron>
          <h1>{this.props.service.title}</h1>
          <ReactMarkdown source={this.props.service.body || ''} />
        </Jumbotron>
      </div>
    )
  }
}


export default Service
