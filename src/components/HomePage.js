import React, { Component } from 'react'
import Environment from './Environment'
import { CirclePicker} from 'react-color';

import '../css/HomePage.css'

class HomePage extends Component {

  state = {
    color: '#fff'
  };

  handleChangeComplete = (color) => {
    let colorString = `hsl(${color.hsl.h.toString()},`+"100%,"+"80%)"
    let triadColor = (color.hsl.h + 150).toString()
    let backgroundString = `hsl(${triadColor},`+"100%,"+"80%)"
    this.setState({ color: colorString });
    this.props.handleBackground(backgroundString)
    //setBackgroundstate to opposite of rgb values use hsv, take h value  and add 150 mod 360
  };

  // console.log("homepage", props.user)
  render() {
    return (
      <div className="home-page-wrapper">
        {this.props.background === '#fff' ?
          <CirclePicker
            onChangeComplete={this.handleChangeComplete}
          />
          :
          <Environment
            color={this.state.color}
            background={this.props.background}
            handleLeave={this.handleLeave}
            user={this.props.user}
          />
        }
      </div>
    )
  }
}

export default HomePage
