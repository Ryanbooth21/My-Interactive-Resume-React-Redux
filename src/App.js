import React, { Component } from 'react';
import './App.css';
import Avatar from './PP.jpg'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ExperienceC from './Components/Experience'
import EducationC from './Components/Education'
import SkillsC from './Components/Skills'
import WhoIAmC from './Components/WhoIAmC'
import { WhoIAm } from './Actions/Actions';

class App extends Component {


  removePP(){
    {document.getElementById('PP').style.display = 'none'}
  }
  
  
  WHOIAM = () => {
    this.props.dispatch({ type: "WHO_I_AM"})
  }

  SKILLS = () => {
    this.props.dispatch({ type: "SKILLS"})
  }
  EDUCATION = () => {
    this.props.dispatch({ type: "EDUCATION"})
  }

  EXPERIENCE = () => {
    this.props.dispatch({ type: "EXPERIENCE"})
  }

  render() {
    const activePage = this.props.ActivePage.state === 'WhoIam' ? <WhoIAmC /> : ''
    const activePage1 = this.props.ActivePage.state === 'Skills' ? <SkillsC /> : ''
    const activePage2 = this.props.ActivePage.state === 'Education' ? <EducationC /> : ''
    const activePage3 = this.props.ActivePage.state === 'Experience' ? <ExperienceC /> : ''

    return (
      <div id="main">
        <div id="container">
          <div id="top">
          <h1 id="Title">Hello! My name is Ryan Booth. What would you like to know about me?</h1>
          </div>
          <div >
            
          </div>
        <div id="content">
          <div >
            <img id="PP" src={Avatar} alt="Logo"/>
          </div>
          {activePage}
          {activePage1}
          {activePage2}
          {activePage3}
          {/* <WhoIAmC /> 
          <SkillsC />
          <EducationC />
          <ExperienceC /> */}

        </div>
        
      <button  className="about" type="submit" onClick={()=> {this.removePP(); this.WHOIAM()}}>Who I am</button>
			<button  className="about" type="submit" onClick={()=> {this.removePP(); this.SKILLS()}}>Skills</button>
			<button  className="about" type="submit" onClick={()=> {this.removePP(); this.EDUCATION()}}>Education</button>
			<button  className="about" type="submit" onClick={()=> {this.removePP(); this.EXPERIENCE()}}>Experience</button>
      </div>
    </div>
    );
  }
}


function mapStateToProps(state){
  return {
      ActivePage: state.ActivePage
  }
}



export default connect(mapStateToProps)(App)

