import { connect } from 'react-redux'
import Service from '../components/Service'
import { withRouter } from 'react-router-dom'


function getService(state) {
  return state.services.find(service => {
    let slug = '/' + service.slug
    return slug === state.router.location.pathname?true:false
  })
}

const mapStateToProps = state => {
  return {
    service: getService(state) || {},
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}


export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(Service))
