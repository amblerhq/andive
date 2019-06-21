import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react';

import Baseline from '../src/components/baseline';
import theme from './ambler-theme';

addParameters({
  options: {
    theme,
  },
});

addDecorator(storyFn => {
  return <>
    <Baseline />
    {storyFn()}
  </>
})

function loadStories() {
  require('../src/components/accordeon.stories')
  require('../src/components/app-bar.stories')
  require('../src/components/autocomplete.stories')
  require('../src/components/button.stories')
  require('../src/components/checkbox.stories')
  require('../src/components/dialog.stories')
  require('../src/components/direction.stories')
  require('../src/components/dropdown.stories')
  require('../src/components/dropdown-menu.stories')
  require('../src/components/icon.stories')
  require('../src/components/illustration.stories')
  require('../src/components/input.stories')
  require('../src/components/info.stories')
  require('../src/components/loader.stories')
  require('../src/components/menu.stories')
  require('../src/components/modal.stories')
  require('../src/constants/palette.stories')
  require('../src/components/ride-status.stories')
  require('../src/components/select.stories')
  require('../src/components/title.stories')
  require('../src/components/typography.stories')
  require('../src/components/toast.stories')
}

configure(loadStories, module);
