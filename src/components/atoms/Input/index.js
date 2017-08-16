import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { placeholder, rem, transitions } from 'polished'
import { responsiveBorderRadiuses as radius } from '~/src/components/themes/default'
import { responsiveFontSizes as fontSize } from '~/src/components/themes/default'

const styles = css`
  font-family: ${font('primary')};
  font-weight: 600;
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  color: ${palette('grayscale', 0)};
  outline: none;
  background-color: ${palette('grayscale', 0, true)};
  ${transitions('border-color .1s ease-in')};

  &::-webkit-input-placeholder {
    color: ${palette('grayscale', 3, true)};
  }

  &::-moz-placeholder {
    color: ${palette('grayscale', 3, true)};
  }

  &:-ms-input-placeholder {
    color: ${palette('grayscale', 3, true)};
  }

  &:-moz-placeholder {
    color: ${palette('grayscale', 3, true)};
  }

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }

  &:hover {
    border-color: ${ifProp('invalid', palette('danger', 0), palette('grayscale', 3, true))};
  }

  @media (max-width: 420px) {
    font-size: ${fontSize.mobile};
    height: ${ifProp({ type: 'textarea' }, 'auto', rem('50px'))};
    padding-top: ${ifProp({ type: 'textarea' }, rem('16px'), rem('16px'))};
    padding-bottom: ${ifProp({ type: 'textarea' }, rem('16px'), rem('16px'))};
    padding-left: ${ifProp({ type: 'textarea' }, rem('25px'), rem('25px'))};
    border-radius: ${radius.mobile};
    margin-bottom: ${rem('20px')};
    border: 2px solid ${ifProp('invalid', palette('danger', 2), palette('grayscale', 3))};
  }

  @media (min-width: 421px) {
    font-size: ${fontSize.desktop};
    height: ${ifProp({ type: 'textarea' }, 'auto', rem('60px'))};
    padding-top: ${ifProp({ type: 'textarea' }, rem('19px'), rem('19px'))};
    padding-bottom: ${ifProp({ type: 'textarea' }, rem('19px'), rem('19px'))};
    padding-left: ${ifProp({ type: 'textarea' }, rem('30.5px'), rem('30.5px'))};
    border-radius: ${radius.desktop};
    margin-bottom: ${rem('30px')};
    border: 3px solid ${ifProp('invalid', palette('danger', 2), palette('grayscale', 3))};
  }
`

const StyledTextarea = styled.textarea`${styles}`
const StyledSelect = styled.select`
  ${styles}
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`
const StyledInput = styled.input`${styles}`

const Input = ({ ...props }) => {
  if (props.type === 'textarea') {
    return <StyledTextarea {...props} />
  } else if (props.type === 'select') {
    return <StyledSelect {...props} />
  }
  return <StyledInput {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  height: 50,
}

export default Input
