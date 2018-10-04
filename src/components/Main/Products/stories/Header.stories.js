import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../Header';

storiesOf('Button', module)
  .add('with text', () => (
    <Header />
  ));

  // .add('with some emoji', () => (
  //   <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  // ));
