import React from 'react';
import styled from 'styled-components';

import buildUrl from 'utils/buildUrl';
import { Image as Placeholder } from 'semantic-ui-react';

import placeholder from 'images/parrot_avatar.jpg';

  // min-height: 266px;
  // min-width: 240px;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: 100% 100%;
  background-image: url(${props => props.placeholder});
`;

const Image = styled.img`
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

let image;

export default class IronImage extends React.Component {
  state = {
    onImageLoad: false,
    image: null
  }

  componentDidMount() {
    image = new Image();

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

    image.onLoad = () => {
      console.log('ccvv');
      this.onImageLoad();
    };

    image.src = url;
  }

  onImageLoad = () => {
    this.setState({ onImageLoad: true });
  }

  render() {
    if (!this.state.onImageLoad) {
      return <Placeholder src={placeholder}></Placeholder>
    }
    console.log('x');

    return image;

    return (
      <Wrapper placeholder={placeholder}>
        <Image
          opacity={this.state.onImageLoad}
          alt={'image failed to load'}
          onLoad={this.onImageLoad}
        />
      </Wrapper>
    );
  }
}
          // src={url}
