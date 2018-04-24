import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import placeholder from 'images/parrot_avatar.jpg';

const Container = styled.div`
  margin-bottom: 10px;
  background: var(--cornflower-blue);
  text-align: center;
`;

const HideFileInput = styled.input`
  display: none;
`;

const AvatarWrapper = styled.div`
  display: inline;
  user-select: none;
  display: initial !important;
  margin: 50px 0;
  transition: .5s ease;
  backface-visibility: hidden;

  &:hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  user-select: none;
  margin: 50px 0;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 3px solid var(--mystic);
  background-position: center center;
  background-size: cover;
  border-radius: 500rem;
  background-image: url(${props => props.src || placeholder});
`;

const Add = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  ${AvatarWrapper}:hover & {
    opacity: 1;
  }
`;

export default class ImagePreview extends React.Component {

  state = {
    file: '',
    imagePreviewUrl: ''
  }

  onChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render () {
    return (
      <Container>
        <label>
          <AvatarWrapper>
            <Avatar src={this.state.imagePreviewUrl} />
            <Add>
              <Icon name='add' size='huge' />
            </Add>
          </AvatarWrapper>
          <HideFileInput type='file' onChange={this.onChange} />
        </label>
      </Container>
    );
  }
}
