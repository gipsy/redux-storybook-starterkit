import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'react-router-dom/Link'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { darken, rem } from 'polished'

const fontSize = ({ height }) => `${height / 40}rem`

const backgroundColor = ({ transparent, disabled }) =>
  transparent ? 'transparent' : (disabled ? palette('grayscale', 3, true) : palette(0))

const foregroundColor = ({ transparent, disabled }) =>
  transparent ? palette(disabled ? 2 : 1) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette(1)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0)

const styles = css`
  display: inline-flex;
  font-family: ${font('primary')};
  align-items: center;
  white-space: nowrap;
  text-transform: uppercase;
  border: 2px solid ${ifProp('transparent', 'currentcolor', 'transparent')};
  width: auto;
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  appearance: none;
  box-sizing: border-box;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${foregroundColor};

  &:hover, &:focus, &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }

  &:active {
    background-color: ${backgroundColor}
  }

  &:focus {
    outline: none
  }

  @media (max-width: 420px) {
    font-size: ${rem('14px')};
    font-weight: 800;
    height: ${rem('50px')};
    padding-top: ${ifProp({ type: 'textarea' }, rem('16px'), rem('16px'))};
    padding-bottom: ${ifProp({ type: 'textarea' }, rem('16px'), rem('16px'))};
    border-radius: 1px;
    min-width: 295px;
  }

  @media (min-width: 421px) {
    font-size: ${rem('18px')};
    font-weight: 800;
    height: ${rem('60px')};
    padding-top: ${ifProp({ type: 'textarea' }, rem('19px'), rem('19px'))};
    padding-bottom: ${ifProp({ type: 'textarea' }, rem('19px'), rem('19px'))};
    border-radius: 3px;
    min-width: 337px;
  }
`

const StyledLink = styled(({disabled, transparent, reverse, palette, height, theme, ...props }) =>
  <Link {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, label, ...props }) => {
  if (props.to) {
    return <StyledLink {...props}>{label}</StyledLink>
  } else if (props.href) {
    return <Anchor {...props}>{label}</Anchor>
  }
  return <StyledButton {...props} type={type}>{label}</StyledButton>
}

Button.propTypes = {
  /**
    Label for the button.
  */
  label: PropTypes.string.isRequired,
  /**
    State for the button.
  */
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  label: 'Button label',
  palette: 'primary',
  type: 'button',
  height: 50,
}

export default Button
