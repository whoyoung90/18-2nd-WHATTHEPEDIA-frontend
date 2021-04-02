import React from 'react';
import Nav from '../../Components/Nav/Nav';
import PublicFooter from '../../Components/PublicFooter/PublicFooter';

class Main extends React.Component {
  render() {
    return (
      <div className="feedPage">
        <Nav />
        <PublicFooter />
      </div>
    );
  }
}

export default Main;
