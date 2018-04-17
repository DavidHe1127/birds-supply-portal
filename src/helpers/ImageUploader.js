import React from 'react';
import styled from 'styled-components';
import { Icon, Image } from 'semantic-ui-react';

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

const CenteredAvatar = styled(Image)`
  user-select: none;
  display: initial !important;
  margin: 50px 0;
`;

const Add = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  ${AvatarWrapper}:hover & {
    opacity: 1;
  }
`;

export default class ImageUploader extends React.Component {

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
      <Container>
        <label>
          <AvatarWrapper>
            <CenteredAvatar {...this.props} />
            <Add>
              <Icon name='add' size='massive' />
            </Add>
          </AvatarWrapper>
          <HideFileInput type='file' onChange={this.onChange} />
        </label>
      </Container>
    );
  }
}
