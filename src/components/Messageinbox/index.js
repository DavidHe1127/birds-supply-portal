import React from 'react';
import {Icon, Label} from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;

  &:hover {
    color: #666;
    cursor: pointer;
  }
`;

const Messageinbox = () => (
  <Wrapper>
    <Icon name="bell" size="big" />
    <Label color="red" floating circular>
      22
    </Label>
  </Wrapper>
);

export default Messageinbox;
