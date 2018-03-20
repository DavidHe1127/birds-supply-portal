import React from 'react';
import styled from 'styled-components';

import Requests from 'containers/Main/Requests';
import Products from 'components/Main/Products/Routes';
import Events from 'containers/Main/Events';

import Sidebar from 'components/Sidebar';

const MainWrapper = styled.div`
  margin: 10px 10px 10px 160px;
`;

const withSidebar = C =>
  class extends React.Component {
    render() {
      const { location: { pathname } } = this.props;
      return (
        <div>
          <Sidebar path={pathname} />
          <MainWrapper>
            <C path={pathname} />
          </MainWrapper>
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
