import React, { Component } from 'react'
import Environment from './Environment'
import { CirclePicker} from 'react-color';

import '../css/HomePage.css'

class HomePage extends Component {

  state = {
    color: '#fff',
    number: null
  };

  handleChangeComplete = (color) => {
    let colorString = `hsl(${color.hsl.h.toString()},`+"100%,"+"80%)"
    let triadColor = (color.hsl.h + 150).toString()
    let backgroundString = `hsl(${triadColor},`+"100%,"+"80%)"
    this.setState({ color: colorString });
    this.props.handleBackground(backgroundString)
    //setBackgroundstate to opposite of rgb values use hsv, take h value  and add 150 mod 360
  };

  // commented out for choosing number of divs
  // handleChange = (e) =>{
  //   this.setState({
  //     number: e.target.value
  //   })
  // }

  // <form className="number-select">
  //     <select onChange={e => this.handleChange(e)}>
  //       <option value="" disabled selected>Choose your number</option>
  //       <option value="1">1</option>
  //       <option value="2">2</option>
  //       <option value="3">3</option>
  //       <option value="4">4</option>
  //       <option value="5">5</option>
  //       <option value="6">6</option>
  //       <option value="7">7</option>
  //     </select>
  // </form>


  // console.log("homepage", props.user)
  render() {
    return (
      <div className="home-page-wrapper">
        {this.props.background === '#fff' ?
        <div className="homepage-options">
            <div className="color-picker">
              <CirclePicker
                onChangeComplete={this.handleChangeComplete}
                width={'700px'}
                circleSize={96}
                circleSpacing={18}
              />
            </div>
          </div>
          :
          <Environment
            color={this.state.color}
            background={this.props.background}
            leaveEnv={this.props.leaveEnv}
            user={this.props.user}
            number={this.state.number}
          />
        }
      </div>
    )
  }
}

export default HomePage
