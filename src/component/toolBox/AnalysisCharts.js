import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import backgroundImg from '../../img/Toolbox Background.png';
import Placeholder from '../../img/Icon Placeholder.png';
import Placeholder1 from '../../img/TOOLBOX ICONS/1 COST ESTIMATOR.png';

import Placeholder2 from '../../img/TOOLBOX ICONS/2 ENERGY ANALYZER.png';
import Placeholder3 from '../../img/TOOLBOX ICONS/3 CUSTOM BIM ANALYZER.png';
import Placeholder4 from '../../img/TOOLBOX ICONS/4 BIM _ BIG DATA.png';
import Placeholder5 from '../../img/TOOLBOX ICONS/5 SIMPLIFY BIM.png';
import Placeholder6 from '../../img/TOOLBOX ICONS/6 ADD DATA TO CAD.png';
import Placeholder7 from '../../img/TOOLBOX ICONS/7 ADD DATA TO SRF.png';
import Placeholder8 from '../../img/TOOLBOX ICONS/8 IOT DATA INTEGRATION.png';

class AnalysisCharts extends Component{

  togglePopup() {
    console.log('what')
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/upload-files');
    }
    else {
      this.props.history.push('/login');
    }
  }

  render(){
      return(
        <div className="backgroundImg profile-text">

          <div className="row text-center features-icons-first-row">
            <div class="col-lg-3 col-md-3 col-sm-6">
              <Link className="nav-link" to="/chart">
              <img className="img-responsive icon" src={Placeholder1} alt="thumbnail-user-profile backgroundImg"/>
              </Link>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6">
              <Link className="nav-link" to="/chart">
                <img className="img-responsive icon" src={Placeholder2} alt="thumbnail-user-profile backgroundImg"/>
              </Link>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6">
              <Link className="nav-link" to="/chart">
              <img className="img-responsive icon" src={Placeholder3} alt="thumbnail-user-profile backgroundImg"/>
              </Link>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6">
            <Link className="nav-link" to="/chart">
            <img className="img-responsive icon" src={Placeholder4} alt="thumbnail-user-profile backgroundImg"/>
            </Link>
             
            </div>
          </div>
          



          <div className="row text-center features-icons">

            <div class="col-lg-3 col-md-3 col-sm-6">
            <Link className="nav-link" to="/chart">
            <img className="img-responsive icon" src={Placeholder5} alt="thumbnail-user-profile backgroundImg"/>
            </Link>
            </div>


            <div class="col-lg-3 col-md-3 col-sm-6">
            <Link className="nav-link" to="/chart">
            <img className="img-responsive icon" src={Placeholder6} alt="thumbnail-user-profile backgroundImg"/>
            </Link>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6">
            <Link className="nav-link" to="/chart">
            <img className="img-responsive icon" src={Placeholder7} alt="thumbnail-user-profile backgroundImg"/>
            </Link>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <Link className="nav-link" to="/chart">
              <img className="img-responsive icon" src={Placeholder8} alt="thumbnail-user-profile backgroundImg"/>
              </Link>
            </div>
          </div>

      
        </div>
      );
  }
}
export default (AnalysisCharts);