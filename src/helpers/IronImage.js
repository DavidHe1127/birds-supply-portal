import React from 'react';
import styled from 'styled-components';

import buildUrl from 'utils/buildUrl';
import { Image } from 'semantic-ui-react';

import placeholder from 'images/parrot_avatar.jpg';

const ActualImage = styled.img`
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.opacity || 0};
  transition: opacity 1s ease;
`;

export default class IronImage extends React.Component {
  state = {
    onImageLoad: false
  };

  onImageLoad = () => {
    this.setState({onImageLoad: true});
  };

  render() {
    const {w, h, q, f} = this.props;
    const url = buildUrl.imageProcessor({
      url: process.env.REACT_APP_IMAGE_PROCESSOR_API,
      queries: {
        w,
        h,
        q,
        f,
      },
    });

    return (
      <Image>
        <ActualImage
          opacity={this.state.onImageLoad}
          alt={'image failed to load'}
          onLoad={this.onImageLoad}
          src={url}
        />
        {!this.state.onImageLoad && <Image
          src={placeholder}
        />}
      </Image>
    );
  }
}
