import React from 'react';
import { CirclePicker} from 'react-color';
import Environment from './Environment'

class ColorChooser extends React.Component {
  state = {
    color: '#fff',
    background: '#fff'
  };

handleChangeComplete = (color) => {
  // console.log(color.hsl)
  let colorString = `hsl(${color.hsl.h.toString()},`+"100%,"+"80%)"
  let triadColor = (color.hsl.h + 120).toString()
  let backgroundString = `hsl(${triadColor},`+"100%,"+"80%)"
  console.log(backgroundString)
  this.setState({ color: colorString, background: backgroundString});
  //setBackgroundstate to opposite of rgb values use hsv, take h value  and add 120 mod 360

};

  render() {
    // console.log(this.state)
    return (
      <>
        {this.state.background === '#fff' ?
          <CirclePicker
              onClick={(e)=> this.props.handleColorPick(e)}
              onChangeComplete={this.handleChangeComplete}
          />
          :
          <></>
        }
        {this.state.background !== '#fff' ? <Environment color={this.state.color} background={this.state.background}/> : <></>}
      </>
      )
    }
  }
export default ColorChooser
