import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import AccessImg from '../../img/Access.png';
import UploadImg from '../../img/Upload.png';


class OptionsUpload extends Component{
  render(){
      return(
          <div className="backgroundImg profile-text text-center">
            <h1 className="space-topTitle">Everything In One Place</h1>
                <div class="col text-center">
                  <Link to="/upload-files">
                    <img className="img-fluid center" src={UploadImg} alt="thumbnail-user-profile"/>
                  </Link>
                </div><br/>

                <div class="col text-center">
                  <Link to="/file-managment">
                    <img className="img-fluid center" src={AccessImg} alt="thumbnail-user-profile"/>
                  </Link>
                </div>
          </div>
      );
  }
}
export default (OptionsUpload);