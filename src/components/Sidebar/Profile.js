import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';

import profile from 'images/profile.png';

const Wrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Profile = () => (
  <Wrapper>
    <Image src={profile} avatar />
  </Wrapper>
);

export default Profile;
