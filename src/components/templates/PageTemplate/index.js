// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, palette } from 'styled-theme'

import { responsiveHeaderHeights as headerHeight } from '~/src/components/themes/default'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;

  @media screen and (max-width: 420px) {
    padding-top: ${headerHeight.mobile}
  }

  @media screen and (min-width: 421px) {
    padding-top: ${headerHeight.desktop}
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  border-bottom: 2px solid ${palette('primary', 0)};

  @media screen and (max-width: 420px) {
    height: ${headerHeight.mobile};
  }

  @media screen and (min-width: 421px) {
    height: ${headerHeight.desktop};
  }
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${size('maxWidth')};
`

const Footer = styled.footer`
  margin-top: auto;
`

const PageTemplate = ({ header, hero, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
