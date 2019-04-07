import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import './App.css';

import setAuthToken from './utilis/setAuthToken';
import PrivateRoute from './component/common/PrivateRoute';
import { setCurrentUser, logoutUser } from './actions/authActions';

import store from './store';

import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import ToolBoxLandingPage from './component/toolBox/ToolBoxLandingPage';
import AnalysisCharts from './component/toolBox/AnalysisCharts';
import OptionsUpload from './component/toolBox/OptionsUpload';
import Uploads from './component/toolBox/Uploads';
import ChartResult from './component/toolBox/Chart';
import FileManagment from './component/toolBox/FileManagment';




import Deals from './component/deals/Deals';
import AddDeal from './component/deals/AddDeal';
import PreviewConfirmationPost from './component/deals/PreviewConfirmationPost';
import Deal from './component/deals/Deal';
import AddDealAsGuest from './component/deals/AddDealAsGuest';
import AddReview from './component/review/AddReview';
import AddReviewAsGuest from './component/review/AddReviewAsGuest';
import UserProfile from './component/user/UserProfile';
import EditUserProfile from './component/user/EditUserProfile';

import Register from './component/auth/Register';
import Login from './component/auth/Login';

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  
  const currentTime = Date.now() / 1000;
  
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div>
              <Route exact path="/" component={ToolBoxLandingPage} />
              <Route exact path="/analysis-charts" component={AnalysisCharts} />
              <Route exact path="/options-upload" component={OptionsUpload} />
              <Route exact path="/upload-files" component={Uploads} />
              <Route exact path="/chart-result" component={ChartResult} />
              <Route exact path="/file-managment" component={FileManagment} />


              <Route exact path="/confirmation-post" component={PreviewConfirmationPost} />
              <Route exact path="/AddDeal-guest" component={AddDealAsGuest} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile/:id" component={UserProfile} />
              <Route exact path="/profile/:id/edit" component={EditUserProfile} />
              <Route exact path="/addReview/:id" component={AddReview} />
              <Route exact path="/addReview-guest/:id" component={AddReviewAsGuest} />
              
              <Switch>
                 <Route exact path="/deal/:id" component={Deal} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
