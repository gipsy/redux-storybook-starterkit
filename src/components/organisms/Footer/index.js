import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import Paragraph from '~/src/components/atoms/Paragraph'
import Link from '~/src/components/atoms/Link'
import Icon from '~/src/components/atoms/Icon'

const Wrapper = styled.div`
  background-color: ${palette('grayscale', 1, true)};
  padding: 2rem;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        Made with <Icon icon="heart" /> by <Link href="https://github.com/gipsy">Taras</Link>
      </Credits>
    </Wrapper>
  )
}

export default Footer
