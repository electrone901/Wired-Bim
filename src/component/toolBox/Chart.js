import React, {Component} from 'react';
import backgroundImg from '../../img/Toolbox Background.png';
import LandingImg from '../../img/Estimator Landing Page.png';

class Chart extends Component{
    constructor(){
        super();
        this.state = {
            EstimatorLandingImg: true,
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
            serverErr: {}
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
        this.setState({
            [name]: value,
            EstimatorLandingImg: false
        });
    }

    // togglePopup() {
    //     console.log('what')
    //     if(this.props.auth.isAuthenticated) {
    //     this.props.history.push('/upload-files');
    //     }
    //     else {
    //     this.props.history.push('/login');
    //     }
    // }

  render(){
    console.log('state', this.state)
    let display;
    if(this.state.category === "Cost by Room Type") {
        display = <iframe className="embed-responsive-item" width="100%" height="500" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/54.embed"></iframe>;
    }
    if(this.state.category == "Cost by Wall Material") {
        display = <iframe className="embed-responsive-item" width="100%" height="500" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/64.embed"></iframe>
    }

    if(this.state.category == "Cost by Room Finishes") {
        display = <iframe className="embed-responsive-item" width="100%" height="500" frameborder="0" scrolling="no" src="https://plot.ly/~JKGProfessional/56.embed"></iframe>
    }

      let EstimatorLandingImg = <div class="row text-center space-top">
            <div className="col-8 col-sm-8 col-md-8">
                <img className="img-fluid center" src={LandingImg} alt="thumbnail-user-profile"/>
            </div>

            <div className="col-4 col-sm-4 col-md-4">
                <label htmlFor="text">Estimator <span className="require">*</span> </label>
                <select
                    name="category"
                    value={this.state.category}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    required className="form-control form-control-lg"
                >
                    <option value="">Please choose one</option>
                    <option value="Cost by Room Type">Cost by Room Type</option>
                    <option value="Cost by Wall Material">Cost by Wall Material</option>
                    <option value="Cost by Room Finishes">Cost by Room Finishes</option>
                </select>
                <div className="invalid-feedback">{this.state.formErrors.name}</div>
            </div>
        </div>;




      let chart = <div class="row text-center">
            <div className="col-8 col-sm-8 col-md-8">
                {display}
            </div>

            <div className="col-4 col-sm-4 col-md-4">
                <label htmlFor="text">Estimator <span className="require">*</span> </label>
                <select
                    name="category"
                    value={this.state.category}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    required className="form-control form-control-lg"
                >
                    <option value="">Please choose one</option>
                    <option value="Cost by Room Type">Cost by Room Type</option>
                    <option value="Cost by Wall Material">Cost by Wall Material</option>
                    <option value="Cost by Room Finishes">Cost by Room Finishes</option>
                </select>
                <div className="invalid-feedback">{this.state.formErrors.name}</div>
            </div>
        </div>;

      return(
        <div className="container3 chartSpace">
            {
                this.state.EstimatorLandingImg ? EstimatorLandingImg: chart
            }
        </div>
      );
  }
}
export default (Chart);