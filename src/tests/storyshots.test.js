import initStoryshots from '@storybook/addon-storyshots'
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer'

// ? Under 0.25 the <Loader/> are systematically failing.
const getMatchOptions = () => {
  return {
    failureThreshold: 0.25,
    failureThresholdType: 'percent'
  }
}

initStoryshots({
  test: imageSnapshot({
    storybookUrl: 'http://localhost:3042',
    getMatchOptions
  })
})
