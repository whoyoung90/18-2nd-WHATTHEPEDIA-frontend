import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './Pages/Main/Main';
import Movie from './Pages/Movie/Movie';
import MyPage from './Pages/MyPage/MyPage';
import Review from './Pages/Review/Review';
import PublicFooter from './Components/PublicFooter/PublicFooter';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PublicFooter} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/review" component={Review} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
