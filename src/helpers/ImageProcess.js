import React from 'react';

import buildUrl from 'utils/buildUrl';
import { fetchImage } from 'utils/network';

export default class ImageProcess extends React.Component {
  state = {
    url: null
  };

  componentDidMount() {
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

    return fetchImage(url);
  }

  render() {
    return <React.Fragment>{this.props.render(this.state.url)}</React.Fragment>;
  }
}
