import React, { Component } from 'react'
import {connect} from 'react-redux'

class EducationC extends Component {
  render() {
    return (
      <div>
      <h1 id="Eltitle">Education</h1>
      <p className="contentText">
      Self-Teaching, Web-Development: August, 2018 - <strong>Life Long Learner</strong><br/>

      James Madison University, Harrisonburg, VA: Fall, 2016 – May 2018<br/>
      Bachelor of Science in Geographic Science<br/>
      GPA: 3.61<br/><br/>

      Tidewater Community College, Chesapeake, VA: Fall, 2014 - Spring, 2016<br/>
      Associates of Science in Business Administration<br/>
      3.78 GPA.<br/>
      </p>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        ActivePage: state.ActivePage
    }
  }
  
  
  export default connect(mapStateToProps)(EducationC)
  