import React from 'react';
import styled from 'styled-components';

import Requests from 'components/Main/Requests/Routes';
import Products from 'components/Main/Products/Routes';
import Events from 'containers/Main/Events';
import Messages from 'components/Main/Messages';

import Sidebar from 'components/Sidebar';
import Notifications from 'components/Main/Messages/Notifications';

const MainWrapper = styled.div`
  margin: 10px 10px 10px 160px;
`;

const Cs = {
  requests: Requests,
  products: Products,
  events: Events,
  messages: Messages
};

class Main extends React.PureComponent {
  render() {
    const {location: {pathname}} = this.props;
    const path = pathname.split('/')[1];
    const C = Cs[path];

    return (
      <div>
        <Sidebar path={pathname} />
        <MainWrapper>
          <C path={pathname} />
        </MainWrapper>
        {path !== 'messages' && <Notifications />}
      </div>
    );
  }
}

export default Main;
