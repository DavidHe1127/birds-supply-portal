import React from 'react';
import styled from 'styled-components';

import buildUrl from 'utils/buildUrl';
import { Image } from 'semantic-ui-react';

import placeholder from 'images/parrot_avatar.jpg';

const ActualImage = styled.img`
  z-index: 2;
  opacity: ${props => props.opacity};
  transition: opacity 1s ease;
  display: ${props => props.display} !important;
`;

export default class IronImage extends React.Component {
  state = {
    onImageLoad: false
  }

  onImageLoad = () => {
    this.setState({onImageLoad: true});
  }

  computeUrl = (w, h, q, f) => {
    if (this.computeUrl.url) {
      return this.computeUrl.url;
    }

    const url = buildUrl.imageProcessor({
      url: process.env.REACT_APP_IMAGE_PROCESSOR_API,
      queries: {
        w,
        h,
        q,
        f,
      },
    });

    this.computeUrl.url = url;

    return url;
  }

  render() {
    const {w, h, q, f} = this.props;

    const opacity = this.state.onImageLoad ? 1 : 0;
    const display = this.state.onImageLoad ? 'block' : 'none';

    return (
      <Image>
        <ActualImage
          opacity={opacity}
          alt={'image failed to load'}
          onLoad={this.onImageLoad}
          src={this.computeUrl(w, h, q, f)}
          display={display}
        />
        {!this.state.onImageLoad && <Image
          src={placeholder}
        />}
      </Image>
    );
  }
}
