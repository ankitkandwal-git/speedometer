import {Component} from 'react'

import './index.css'

class Speedometer extends Component{
    state = {
        speed : 0
    }
    onIncrease = () =>{
       this.setState(({speed})=>({
        speed:speed<200 ? speed+10:speed
       }),console.log("speed increased but max is only 200"))
    }
    onDecrease = () =>{
        this.setState(({speed})=>({
            speed:speed>0 ? speed-10:speed
        }),console.log("Speed Decreased but limit is 0 "))
    }
    render(){
        const {speed} = this.state
        return(
            <div className="app-container">
                <div className="speedometer-container">
                    <h1 className="heading">SPEEDOMETER</h1>
                    <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" className="img" alt="speedImage"/>
                    <p className="paragraph">Speed is {speed} mph</p>
                    <p className="speed-limit">Min limit is 0 mph and max limit is 200 mph</p>
                    <div className="button-container">
                        <button className="increase" type="button" onClick={this.onIncrease}>Accelerate</button>
                        <button className="decrease" type="button" onClick={this.onDecrease}>Apply Brake</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Speedometer