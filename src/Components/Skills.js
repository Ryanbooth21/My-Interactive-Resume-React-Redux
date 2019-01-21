import React, { Component } from 'react'
import {connect} from 'react-redux'

class SkillsC extends Component {
  render() {
    return (
      <div>
        <h1 id="Eltitle">Tech Skills</h1>
        <div id="skillSet">
            <div className="contentText">
            <h3>Web Development</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>Wordpress</li>
                <li>Bootstrap 4</li>
                <li>Adobe Illustrator</li>
                <li>React</li>
                <li>Redux</li>
            </ul>
            </div>
            <div className="contentText">
            <h3>Geospatial Tech</h3>
            <ul>
                <li>ESRI mapping software: ArcGIS, <br /> ArcCatalog, ArcMap</li>
                <li>QGIS</li>
                <li>Trimble GPS mapping suite</li>
            </ul>
        </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        ActivePage: state
    }
  }
  
  
  
  export default connect(mapStateToProps)(SkillsC)