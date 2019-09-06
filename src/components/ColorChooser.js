import React from 'react';
import { CirclePicker} from 'react-color';

import Environment from './Environment'

class ColorChooser extends React.Component {

  state = {
    color: '#fff',
    background: '#fff'
  };

handleChangeComplete = (color) => {
  let colorString = `hsl(${color.hsl.h.toString()},`+"100%,"+"80%)"
  let triadColor = (color.hsl.h + 150).toString()
  let backgroundString = `hsl(${triadColor},`+"100%,"+"80%)"
  this.setState({ color: colorString, background: backgroundString});
  //setBackgroundstate to opposite of rgb values use hsv, take h value  and add 150 mod 360
};

handleLeave = (e) => {
  this.setState({ background: '#fff'})
}

  render() {
    // console.log("color", this.props.user)
    return (
      <div>
        {this.state.background === '#fff' ?
          <CirclePicker
            onChangeComplete={this.handleChangeComplete}
          />
          :
          <></>
        }
        {this.state.background !== '#fff' ?
          <Environment
            color={this.state.color}
            background={this.state.background}
            handleLeave={this.handleLeave}
            user={this.props.user}
          />
          :
          <></>
        }
      </div>
      )
    }
  }
export default ColorChooser
