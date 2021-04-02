import React from 'react';
import Modal from '../../Components/Modal/Modal';
import Nav from '../../Components/Nav/Nav';
import PublicFooter from '../../Components/PublicFooter/PublicFooter';

class Main extends React.Component {
  render() {
    return (
      <div className="feedPage">
        <Nav />
        <Modal />
        <PublicFooter />
      </div>
    );
  }
}

export default Main;
