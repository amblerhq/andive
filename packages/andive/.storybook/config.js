import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'

import Baseline from '../src/components/baseline'
import theme from './ambler-theme'

addParameters({
  options: {
    theme
  }
})

addDecorator(storyFn => {
  return (
    <>
      <Baseline>
        {storyFn()}
      </Baseline>
    </>
  )
})

function loadStories() {
  require('../src/stories/accordeon.stories')
  require('../src/stories/app-bar.stories')
  require('../src/stories/autocomplete.stories')
  require('../src/stories/button.stories')
  require('../src/stories/checkbox.stories')
  require('../src/stories/dialog.stories')
  require('../src/stories/direction.stories')
  require('../src/stories/dropdown.stories')
  require('../src/stories/dropdown-menu.stories')
  require('../src/stories/dropdown-filter.stories')
  require('../src/stories/hover.stories')
  require('../src/stories/icon.stories')
  require('../src/stories/illustration.stories')
  require('../src/stories/input.stories')
  require('../src/stories/info.stories')
  require('../src/stories/loader.stories')
  require('../src/stories/menu.stories')
  require('../src/stories/modal.stories')
  require('../src/stories/palette.stories')
  require('../src/stories/ride-status.stories')
  require('../src/stories/select.stories')
  require('../src/stories/theme.stories')
  require('../src/stories/title.stories')
  require('../src/stories/typography.stories')
  require('../src/stories/toast.stories')
}

configure(loadStories, module)
