import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import IconLink from '~/src/components/molecules/IconLink'
import PrimaryNavigation from '~/src/components/molecules/PrimaryNavigation'
import Block from '~/src/components/atoms/Block'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1
`

const Header = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <IconLink to="/" icon="arc" height={100} />
        <StyledPrimaryNavigation reverse />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
