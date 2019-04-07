import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import SuccessImg from '../../img/success.png';
import { Link } from 'react-router-dom';

import { registerUser } from '../../actions/authActions';

class Uploads extends Component{
    constructor(){
        super();
        this.state = {
            successDisplay: false,
            name: '',
            image: null,
            imageName: 'Choose file',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount(){
      window.scrollTo(0,0);
    }
    
    componentWillReceiveProps(nextProps){
      console.log('nextProps registe component', nextProps.errors)
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    fileSelectedHandler = e => {
      if(e.target.files[0]){
          this.setState({ image: e.target.files[0] });
          this.setState({ imageName: e.target.files[0].name });
      }
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();
        this.setState({successDisplay: true})
        console.log('yaya')


        // const newUser = new FormData();
        // newUser.append('name', this.state.name);
        // newUser.append('image', this.state.image);
        // newUser.append('email', this.state.email);
        // newUser.append('password', this.state.password);
        // newUser.append('confirmPassword', this.state.confirmPassword);
        
        // this.props.registerUser(newUser, this.props.history);
    }
    
    render(){
        const {errors} = this.state;
        console.log('state', this.state)
        let successDisplay = <div class="col text-center">
                    <img className="img-fluid center" src={SuccessImg} alt="thumbnail-user-profile"/>
                    <h4 className="text-left">What do you want to do next?</h4>
                    <div className="row text-center">
                      <div class="col-lg-4 col-md-4 col-sm-6">
                        <Link className="btn btn-primary btn-width" to="/file-managment">Browse Files</Link>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                        <Link className="btn btn-primary btn-width" to="/upload-files">Upload more Files</Link>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                        <Link className="btn btn-primary btn-width" to="/profile/5caa205ca8ed9500048fb257">Check my Profile</Link>
                      </div>
                    </div>
                    
                </div>;

        let form =   <div className="row text-center">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Uploads Files</h1>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="text"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.name
                })}
                required="required" 
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange} />
                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
            </div>

            <div className="form-group">
                <label htmlFor="text">Upload Image Profile <span className="small">(Optional but recommended)</span></label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"></span>
                    </div>
                    <div className="custom-file">
                        <input 
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            onChange={this.fileSelectedHandler}/>
                        <label className="custom-file-label" htmlFor="inputGroupFile01">{this.state.imageName}</label>
                    </div>
                </div>
            </div>

            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>;
        
        return(
            <div className="register">
                <div className="container">
                  {
                    this.state.successDisplay ? successDisplay: form
                  }
                
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Uploads));  