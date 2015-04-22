'use strict';

describe('CashAppApp', function () {
  var React = require('react/addons');
  var CashApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    CashApp = require('components/CashApp.js');
    component = React.createElement(CashApp);
  });

  it('should create a new instance of CashApp', function () {
    expect(component).toBeDefined();
  });
});
