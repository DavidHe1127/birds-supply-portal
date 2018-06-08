import React from 'react';
import styled from 'styled-components';

import Requests from 'components/Main/Requests/Routes';
import Products from 'components/Main/Products/Routes';
import Events from 'containers/Main/Events';

import Sidebar from 'components/Sidebar';
import Messageinbox from 'components/Messageinbox';

const MainWrapper = styled.div`
  margin: 10px 10px 10px 160px;
`;

const Cs = {
  requests: Requests,
  products: Products,
  events: Events
};

class Main extends React.PureComponent {
  render() {
    const {location: {pathname}} = this.props;
    const C = Cs[pathname.substr(1)]

    return (
      <div>
        <Sidebar path={pathname} />
        <MainWrapper>
          <C path={pathname} />
        </MainWrapper>
        <Messageinbox />
      </div>
    );
  }
}

export default Main;
