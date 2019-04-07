import React, {Component} from 'react';
import Spinner from '../common/Spinner';
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

class Chart extends Component{
    constructor(){
        super();
        this.state = {
            brick:'',
            wood:'',
            company: '',
            name: '',
            price: '',
            category: '',
            image: null,
            imageName: 'Choose file',
            address: '',
            city: '',
            description: '',
            author: '',
            formErrors: {},
            companyValid: false,
            nameValid: false,
            categoryValid: false,
            formValid: false,
            priceValid: false,
            addressValid: false,
            cityValid: false,
            descriptionValid: false,
            serverErr: {},
            data: [
                {"val": '<iframe className="embed-responsive-item" width="100%" height="500" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/31.embed"></iframe>', "name": "brick"},
                {"val": '<iframe className="embed-responsive-item" width="100%" height="500" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/29.embed"></iframe>', "name": "wood"}
            ]
        };
        this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        // this.handleChangeCity = this.handleChangeCity.bind(this);
        // this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }

    onChange(e){
        console.log('what',e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

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
      console.log('state', this.state.category)
      let display;
    if(this.state.category === "brick") {
        display = <iframe className="embed-responsive-item" width="100%" height="500" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/31.embed"></iframe>;
    }
    if(this.state.category == "wood") {
        display = <iframe className="embed-responsive-item" width="100%" height="500" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/29.embed"></iframe>
    }
      console.log('da', this.state.data)



      return(
        // <div className="backgroundImg profile-text">
        <div className="container3">

<div class="row text-center">



        <div className="col-8 col-sm-8 col-md-8">
        {display}
what
        {
            this.state.data ? this.state.data.map((item, key) => {
                return (
                    <div key={key}>
                        
                        {item.val}
                    </div> 
                );
            }): <Spinner />
        }
            ARE YOU GETTING IT? 

           
        </div>

        <div className="col-4 col-sm-4 col-md-4">
            <label htmlFor="text">Category <span className="require">*</span> </label>
            <select
                name="category"
                value={this.state.category}
                onChange={this.onChange}
                className="form-control form-control-lg"
                required className="form-control form-control-lg"
            >
                <option value="">Estimator</option>
                <option value="brick">Brick</option>
                <option value="wood">Wood</option>
                <option value="Activities">Activities</option>
                <option value="Events">Events</option>
                <option value="Arts">Arts</option>
                <option value="Sports">Sports</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Indoor">Indoor</option>
                <option value="Music">Music</option>
                <option value="Classes">Classes</option>
                <option value="Travel">Travel</option>
                <option value="Social">Social</option>
                <option value="Others">Others</option>
            </select>
            <div className="invalid-feedback">{this.state.formErrors.name}</div>
        </div>
</div>



         


         <br/>
         brick area:
            <iframe className="embed-responsive-item" width="100%" height="500" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/31.embed"></iframe>
         wood area; <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/29.embed"></iframe>
         paint area ; <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/27.embed"></iframe>


          <div className="row text-center">
            <div className="row text-center features-icons">
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img className="img-responsive icon" src={Placeholder5} alt="thumbnail-user-profile backgroundImg"/>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img className="img-responsive icon" src={Placeholder6} alt="thumbnail-user-profile backgroundImg"/>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img className="img-responsive icon" src={Placeholder7} alt="thumbnail-user-profile backgroundImg"/>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img className="img-responsive icon" src={Placeholder8} alt="thumbnail-user-profile backgroundImg"/>
                </div>
            </div>

            <div className="row text-center features-icons">
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img className="img-responsive icon" src={Placeholder5} alt="thumbnail-user-profile backgroundImg"/>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img className="img-responsive icon" src={Placeholder6} alt="thumbnail-user-profile backgroundImg"/>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img className="img-responsive icon" src={Placeholder7} alt="thumbnail-user-profile backgroundImg"/>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                <img className="img-responsive icon" src={Placeholder8} alt="thumbnail-user-profile backgroundImg"/>
                </div>
            </div>

          </div>
          
          

      
        </div>
      );
  }
}
export default (Chart);