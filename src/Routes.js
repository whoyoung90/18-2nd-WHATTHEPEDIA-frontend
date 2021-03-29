import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Movie from './Pages/Movie/Movie';
import MyPage from './Pages/MyPage/MyPage';
import Review from './Pages/Review/Review';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/moive" component={Movie} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/review" component={Review} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
