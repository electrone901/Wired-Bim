import React, {Component} from 'react';
import ToolBox from './ToolBox';
import Slider from '../carousel/Slider';

class ToolBoxLandingPage extends Component{
  render(){
      
      return(
          <div>
            <Slider />
            <div className="container">
                <ToolBox />
            </div>
          </div>
      );
  }
}
export default (ToolBoxLandingPage);