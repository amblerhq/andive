import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import {Baseline} from '@ambler/andive'

import amblerTheme from './ambler-theme';

addParameters({
  options: {
    theme: amblerTheme
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

// ? Wrap all stories with andive's initialisation component.
addDecorator(storyFn => <Baseline>{storyFn()}</Baseline>)
// ? Automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);