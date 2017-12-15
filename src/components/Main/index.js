import React, { Component } from 'react';

import Requests from './Requests';
import Products from './Products';
import Events from './Events';

import Sidebar from 'components/Sidebar';

const withSidebar = C =>
  class extends React.Component {
    render() {
      const { location: { pathname } } = this.props;
      return (
        <div>
          <Sidebar path={pathname} />
          <C />
        </div>
      );
    }
  };

const Main = {
  Requests: withSidebar(Requests),
  Products: withSidebar(Products),
  Events: withSidebar(Events)
};

export default Main;
