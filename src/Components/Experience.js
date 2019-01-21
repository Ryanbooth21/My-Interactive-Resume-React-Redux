import React, { Component } from 'react'
import {connect} from 'react-redux'

class ExperienceC extends Component {
  render() {
    return (
      <div>
        <h1 id="Eltitle" >Experience</h1>
            <p id="Exp" className="contentText">
            Chiedo Labs: Front-end-development Intern- January 2019 - Present<br/><br/>
            The Outdoor Learning Center: Outdoor Instructor- August 2018-November 2018<br/><br/>
            James Madison University: Archeological Assistant- November 2017-December 2017<br/><br/>
            Camp Brookwoods: Trip Staff- Summer 2017/2018<br/><br/>
            Walmart Neighborhood Market: Overnight Stocker- April 2015-May 2017<br/><br/>

            Check out my projects on <a href="https://github.com/Ryanbooth21?tab=repositories">github!</a>

        </p>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        ActivePage: state
    }
  }
  
  
  
  export default connect(mapStateToProps)(ExperienceC)