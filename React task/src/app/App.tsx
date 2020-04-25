import React, { Component } from 'react';
import Navbar from 'components/layout/NavBar';
import MainContent from 'components/layout/MainContent';
import Footer from 'components/layout/Footer';
import TextInput from 'components/generic/TextInput';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/generic/Button/Button';
import Card from 'components/generic/Card/Card';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { ProfileDetails } from 'pages';
import NewsFeed from '../pages/NewsFeed/NewsFeed';


const history = createBrowserHistory(); 
class App extends Component {
  render() {

    return (
      <div> 
        <Router history={history}>
          <Navbar><Button>Login</Button>
            <TextInput icon={faSearch} />
          </Navbar>
          <MainContent>
            <Route path="/feed" component={NewsFeed} />
            <Route path="/user" component={ProfileDetails} />
            {/* <Route path="/*" component={NotFound} /> */}
            <Card>Hello and welcome to my blog! My name is John Smith and I am a professional musician and a singer.
              You may have heard about me from the TV show X factor.
              If you want to know more about my life and musical journey, don't hesitate and
              click the Follow button down below!
            </Card>
            <NewsFeed />
          </MainContent>
          <Footer>2020 Company, Inc.</Footer>
        </Router>
      </div>
    );
  }
}

export default App;
