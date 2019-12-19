import React, {Component} from 'react'

class TravisCIProjectStatus extends Component {

  state = {

  }

  render(){
    let {proj_name, branch} = this.props
    return(
      <div className="build-status-container">
        <a href={`https://travis-ci.org/${proj_name}`}
          target="_blank"
          rel="noopener noreferrer">{proj_name}
        </a>
        <img src={`https://travis-ci.org/${proj_name}.svg?branch=${branch}`} alt="" className="build-status-img"/>

      </div>
    )
  }
}

export default TravisCIProjectStatus