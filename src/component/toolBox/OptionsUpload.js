import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class OptionsUpload extends Component{
  render(){
      
      return(
          <div className="container">
            <h1>BIM Cloud</h1>
            <div className="row-center">
                <Link to="/analysis-charts" className="btn btn-primary btn-width">Access Projects</Link><br/> <br/>
                <Link to="/upload-files" className="btn btn-primary btn-width">Upload Files</Link>
            </div>
          </div>
      );
  }
}
export default (OptionsUpload);