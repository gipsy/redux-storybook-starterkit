import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { placeholder, rem, transitions } from 'polished'

const Wrapper = styled.span`
  display: inline-block;
  color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
  margin: 0.1rem;
  box-sizing: border-box;
  cursor: pointer;
`

const HamburgerSpan = styled.span`
  display: block;
  width: 20px;
  height: 3px;
  margin-bottom: 3px;
  position: relative;
  background-color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
  z-index: 1;
  transform-origin: 4px 0px;
  ${transitions('0.5s cubic-bezier(0.77,0.2,0.05,1.0),background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),opacity 0.55s ease')};

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`

const Hamburger = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <HamburgerSpan />
      <HamburgerSpan />
      <HamburgerSpan />
    </Wrapper>
  )
}

Hamburger.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool
}

export default Hamburger
