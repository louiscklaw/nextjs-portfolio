import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
// import {Helmet} from 'react-helmet'

// import './BuildStatus.scss'
import TravisCIProjectStatus from '../components/TravisCIProjectStatus'

class BuildStatus extends Component {
  state = {

  }

  getProjectRow(proj_name, branch_name){
    return(
      <tr>
        <td>
          <TravisCIProjectStatus proj_name={proj_name} branch={branch_name} />
        </td>
      </tr>
    )
  }

  render(){
    return(
      <div>
        <div className="content-placer">
          <div className="content">
            <p>helloworld</p>
            <table>
              <thead>
                <tr>
                  <td>project name</td>
                </tr>
              </thead>
              <tbody>
                {this.getProjectRow('louiscklaw/portfolio-react-v2', 'master')}
                {this.getProjectRow('louiscklaw/portfolio-react', 'master')}
                {this.getProjectRow('louiscklaw/travis-react-tryout', 'master')}
                {this.getProjectRow('louiscklaw/vote-registration-statistic', 'master')}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

}

export default BuildStatus