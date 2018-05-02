import React from 'react';
import styled from 'styled-components';

import buildUrl from 'utils/buildUrl';

import defThumbnail from 'images/elliot.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: 100% 100%;
  background-image: url(${props => props.placeholder});
`;

const Image = styled.img`
  position: absolute;
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
  }

  onImageLoad() {
    this.setState({ onImageLoad: true });
  }

  render() {
    const { w, h, q, f } = this.props;

    const url = buildUrl.imageProcessor({
      url: process.env.REACT_APP_IMAGE_PROCESSOR_API,
      queries: {
        w,
        h,
        q,
        f
      }
    });

    return (
      <Wrapper placeholder={defThumbnail}>
        <Image
          opacity={this.state.onImageLoad}
          alt={'image failed to load'}
          src={url}
          onLoad={this.onImageLoad}
        />
      </Wrapper>
    );
  }
}
