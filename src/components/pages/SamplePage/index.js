import React from 'react'

import PageTemplate from '~/src/components/templates/PageTemplate'
import Header from '~/src/components/organisms/Header'
import Footer from '~/src/components/organisms/Footer'

const SamplePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
    </PageTemplate>
  )
}

export default SamplePage
