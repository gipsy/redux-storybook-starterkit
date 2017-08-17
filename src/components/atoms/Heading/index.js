import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { rem } from 'polished'

//TODO
//check if may be consistent based on levels
//const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`

const styles = css`
  font-family: ${font('primary')};
  font-weight: 500;
  margin: 0;
  color: ${palette({ grayscale: 0 }, 1)};

  @media screen and (max-width: 420px) {
    font-size: ${rem('20px')};
    margin-top: ${rem('30px')};
    margin-bottom: ${rem('25px')};
    line-height: ${rem('24px')};
  }

  @media screen and (min-width: 421px) {
    font-size: ${rem('30px')};
    margin-top: ${rem('70px')};
    margin-bottom: ${rem('60px')};
    line-height: ${rem('36px')};

    text-align: center;
  }
`

const Heading = styled(({ level, children, reverse, palette, theme, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
}

export default Heading
