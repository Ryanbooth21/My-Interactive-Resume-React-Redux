import React, { Component } from 'react'
import {connect} from 'react-redux'

class WhoIAmC extends Component {
  render() {
        return(
            <div>
                <h1 id="Eltitle">Who I am</h1>
                <p className="contentText">Hi! I'm Ryan. I'm an outdoor enthusiast and a web developer from Harrisonburg, Virginia. 
                My hobbies apart from coding include cooking, hiking, and Rockclimbing. On Weekends you can often find me climbing at the New River 
                Gorge in West Virginia.<br/><br/>

                I studied Geo-Spatial tech in college and worked in the outdoor-rec industry shortly afterward, however, I later developed an interest
                    web based technology</p>
            </div>
        )
    }
  }

function mapStateToProps(state){
    return {
        ActivePage: state.ActivePage
    }
  }
  
  
  
  export default connect(mapStateToProps)(WhoIAmC)