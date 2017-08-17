import React from 'react'
import styled from 'styled-components'
import { size, palette } from 'styled-theme'
import { placeholder, rem, transitions } from 'polished'

import IconLink from '~/src/components/molecules/IconLink'
import Block from '~/src/components/atoms/Block'
import Hamburger from '~/src/components/atoms/Hamburger'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 420px) {
    padding: ${rem('12px')} ${rem('26px')};
  }

  @media screen and (min-width: 421px) {
    padding: ${rem('19px')};
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  color: ${palette('grayscale', 0)};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Header = (props) => {
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <Hamburger />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
