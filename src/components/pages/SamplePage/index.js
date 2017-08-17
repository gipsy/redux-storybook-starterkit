import React from 'react'

import PageTemplate from '~/src/components/templates/PageTemplate'
import Header from '~/src/components/organisms/Header'
import Footer from '~/src/components/organisms/Footer'
import Heading from '~/src/components/atoms/Heading'
import ReduxField from '~/src/components/organisms/ReduxField'
import Button from '~/src/components/atoms/Button'

const SamplePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <Heading>Where is the company based?</Heading>
      <ReduxField input={{
          name: 'name',
          placeholder: 'enter you text here',
        }}
        meta={{}}
      />
      <Button text="Next" onClick={() => { alert('Test!'); }} />
    </PageTemplate>
  )
}

export default SamplePage
