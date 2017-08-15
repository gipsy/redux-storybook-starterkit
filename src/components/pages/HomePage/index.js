// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import PageTemplate from 'components/templates/PageTemplate'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
    </PageTemplate>
  )
}

export default HomePage
