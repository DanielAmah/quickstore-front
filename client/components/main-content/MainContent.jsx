import React from 'react';

import Sidebar from '../sidebar/Sidebar.jsx';
import RightContent from '../right-content/RightContent.jsx';
export default class MainContent extends React.Component {
  render(){
    return (
      <section>
      <div className="container">
        <div className="row">
          <Sidebar />
         <RightContent />
        </div>
      </div>
      </section>
    )
  }
}

