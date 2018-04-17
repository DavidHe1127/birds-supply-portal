import React from 'react';
import styled from 'styled-components';
import { Icon, Image } from 'semantic-ui-react';

const ImageHolder = styled.div`
  margin-bottom: 10px;
  background: var(--cornflower-blue);
  text-align: center;
`;

const HideFileInput = styled.input`
  display: none;
`;

const Wrapper = styled.div`
  display: inline;

  &:hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

const CenteredAvatar = styled(Image)`
  user-select: none;
  display: initial !important;
  margin: 50px 0;
  transition: .5s ease;
  backface-visibility: hidden;
`;

const Add = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

export default class ImageUploader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {file: '', imagePreviewUrl: '', onHover: false};
  }

  onHover (e) {
    this.setState({
      onHover: true
    });
  }

  onChange (e) {
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

  render () {
    let { imagePreviewUrl } = this.state;
    // let $imagePreview = null;
    // if (imagePreviewUrl) {
    //   $imagePreview = <img src={imagePreviewUrl} />;
    // } else {
    //   $imagePreview = (
    //     <div className="previewText">Please select an Image for Preview</div>
    //   );
    // }

    return (
      <ImageHolder>
        <label>
          <Wrapper>
            <CenteredAvatar {...this.props} />
            <Add>
              <Icon name='add' size='huge' />
            </Add>
          </Wrapper>
          <HideFileInput type='file' onChange={this.onChange} />
        </label>
      </ImageHolder>
    );
  }
}
