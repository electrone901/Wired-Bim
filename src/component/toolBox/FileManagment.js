import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import MockImg from '../../img/Mock Up File Management Page.png';

class FileManagment extends Component{
  render(){
      return(
        <div className="backgroundImgFileManagment profile-text text-center">
            <h1 className="space-top">Welcome to File Management</h1>
            <div class="col text-center space-top">
              <Link to="/analysis-charts">
                <img className="img-fluid center" src={MockImg} alt="thumbnail-user-profile"/>
              </Link>
            </div><br/>

      </div>
      );
  }
}
export default (FileManagment);