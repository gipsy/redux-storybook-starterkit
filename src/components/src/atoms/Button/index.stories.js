import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from 'storybook-addon-a11y'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action, decorateAction } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Button from '.'

storiesOf('Button', module)
  .addDecorator(checkA11y)
  .add('simple info',
    withInfo({
      text: 'doc string about my component',
      maxPropsIntoLine: 1,
      maxPropObjectKeys: 10,
      maxPropArrayLength: 10,
    })(() =>
      <Button>That's it</Button>
    )
  )
  // .storyDecorator(withKnobs)
  //   .chapter('Test')
  //     .add('Test', () => {
  //         setOptions({
  //             name: 'React Theming',
  //             url: 'https://github.com/sm-react/react-theming',
  //         });
  //         return (<Test />);
  //     })
  //     .endOfChapter()
  //   .chapter('Components')
  //     .addWithInfo('App-header', '<Header />', () => withNote(
  //       `
  //         Header Component
  //         source: src/Header.jsx
  //         story: src/stories
  //         test: src/tests
  //       `,
  //       <Header
  //         title={text('Title', 'Welcome to React-Theming')}
  //         subtitle={text('Subtitle', 'Storybook Boilerplate Project')}
  //       />,
  //     ))
  //     .addWithInfo('App-intro', '<Intro />', () => withNote(
  //       `
  //         Intro Component
  //         source: src/Intro.jsx
  //         story: src/stories
  //         test: src/tests
  //       `,
  //       <Intro />,
  //     ))
  //     .endOfChapter()
  //.chapter('Addons')
  .add('default', () => (
    <Button onClick={action('button-click')}>That&apos;s it</Button>
  ))
  .add('reverse', () => (
    <Button reverse>Hello</Button>
  ))
  .add('another palette', () => (
    <Button palette="secondary">Hello</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Hello</Button>
  ))
  .add('transparent', () => (
    <Button transparent>Hello</Button>
  ))
  .add('height', () => (
    <Button height={100}>Hello</Button>
  ))
  .add('link', () => (
    <Button href="https://github.com/getdinghy/">GetDinghy repository</Button>
  ))
