import React, { Component } from 'react';

import styled from 'styled-components';
import Sidebar from 'components/Sidebar';

const Title = styled.div`
  text-align: center;
  position: relative;
  left: 200px;
`;

export default class Events extends Component {
  render() {
    const { location: { pathname } } = this.props;

    return (
      <div>
        <Sidebar path={pathname} />
        <Title>Events</Title>
      </div>
    );
  }
}
