import React from 'react';
import styled from 'styled-components';

const HideFileInput = styled.input`
  display: none;
`;

export default class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '', imagePreviewUrl: ''};
  }

  onChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    // let $imagePreview = null;
    // if (imagePreviewUrl) {
    //   $imagePreview = <img src={imagePreviewUrl} />;
    // } else {
    //   $imagePreview = (
    //     <div className="previewText">Please select an Image for Preview</div>
    //   );
    // }

    return (
      <React.Fragment>
        <label>
          {this.props.render(this.state)}
          <HideFileInput type="file" onChange={this.onChange} />
        </label>
      </React.Fragment>
    );
  }
}