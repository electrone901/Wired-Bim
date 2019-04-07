import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import backgroundImg from '../../img/Toolbox Background.png';
import benefitsImg from '../../img/benefits.jpg';
import how from '../../img/how.png';


class ToolBox extends Component{
  constructor() {
    super();
    this.state = {
      data: '',
      filterByCategory: null
    };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }

  togglePopup() {
    this.props.history.push('/upload-files');
  }

  componentDidMount() {
    let url = "https://cnycserver.herokuapp.com/items";
    fetch(url)
    .then(res => {
        console.log('res', res);
        return res.json();
    })
    .then((data) => {
        this.setState({data: data.items});
    })
    .catch((err) => {
        console.log('There was a problem with your fetch request' + err.message);
    });
}

  handleChangeCategory(e) {
    let url;
    let category = e.target.value;
    if(category === 'All categories') {
      url = 'https://cnycserver.herokuapp.com/items'
    }
    else {
      url = `https://cnycserver.herokuapp.com/items?type=category&categoryName=`+category;
    }
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then((data) => {
      this.setState({data: data.items});
    })
    .catch((err) => {
      console.log('There was a problem with your fetch request')
    });
  }

  handleChangeCity(e) {
    let url;
    let city = e.target.value;
    if(city === 'All Cities') {
      url = 'https://cnycserver.herokuapp.com/items';
    }
    else {
      url = `https://cnycserver.herokuapp.com/items?type=city&cityName=`+city;
    }
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then((data) => {
      this.setState({data: data.items});
    })
    .catch((err) => {
      console.log('There was a problem with your fetch request')
    })
  }


  handleChangePrice(e) {
    let url;
    let price = e.target.value;
    if(price === 'All Prices') {
      url = 'https://cnycserver.herokuapp.com/items';
    }
    else {
             
      url = `https://cnycserver.herokuapp.com/items?type=price&`+ price;
    }
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then((data) => {
      this.setState({data: data.items});
    })
    .catch((err) => {
      console.log('There was a problem with your fetch request')
    })
  }
  render(){
      return(
          <div className="space-top">
            <div className="col-12 col-sm-12 col-md-12 space-top">
                <img className="img-fluid center" src={how} alt="thumbnail-user-profile"/>
            </div>
            <br/>
            <div className="col-12 col-sm-12 col-md-12 space-top">
                <img className="img-fluid center" src={benefitsImg} alt="thumbnail-user-profile"/>
            </div>



          </div>
      );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps) (withRouter(ToolBox));
