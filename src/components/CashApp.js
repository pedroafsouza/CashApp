'use strict';
import MainLayout from "./Layout/MainLayout";
import React from "react/Addons";


var ReactTransitionGroup = React.addons.TransitionGroup;
// CSS
require('normalize.css');
require('../styles/main.less');

var CashApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <MainLayout/>
      </div>
    );
  }
});

module.exports = CashApp;
