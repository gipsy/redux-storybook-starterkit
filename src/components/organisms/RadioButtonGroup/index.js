import React from 'react'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import PropTypes from 'prop-types'
import { rem, transitions } from 'polished'
import { responsiveBorderRadiuses as radius } from '~/src/components/themes/default'
import { responsiveBorderWidths as borderWidth } from '~/src/components/themes/default'
import { responsiveFontSizes as fontSize } from '~/src/components/themes/default'
import { responsiveButtonPaddings as padding } from '~/src/components/themes/default'
import { responsiveButtonHeights as height } from '~/src/components/themes/default'

import Field from '~/src/components/molecules/Field'

const styles = css`
  position: absolute;
  left: -99em;

  + span {
    font-family: ${font('primary')};
    font-weight: 600;
    width: 100%;
    display: block;
    cursor: default;
    margin-bottom: 20px;
    box-sizing: border-box;
    text-align: center;
    text-transform: uppercase;
    color: ${palette('grayscale', 1)};
    border-color: ${palette('grayscale', 2, true)};
    border-style: solid;
    ${transitions('border-color .1s ease-in')};

    @media (max-width: 420px) {
      font-size: ${fontSize.mobile};
      height: ${height.mobile};
      padding-top: ${padding.mobile};
      padding-bottom: ${padding.mobile};
      border-radius: ${radius.mobile};
      border-width: ${borderWidth.mobile};
    }

    @media (min-width: 421px) {
      font-size: ${fontSize.desktop};
      height: ${height.desktop};
      padding-top: ${padding.desktop};
      padding-bottom: ${padding.desktop};
      border-radius: ${radius.desktop};
      border-width: ${borderWidth.desktop};
    }

    &:hover {
      border-color: ${palette('grayscale', 3, true)};
    }
  }

  &:checked + span {
    background-color: ${palette('grayscale', 2)};
    color: ${palette('grayscale', 0, true)};
  }

  &:checked + span:hover {
    border-color: ${palette('grayscale', 2)};
  }
`

const RadioButtonElement = styled.input`${styles}`

const RadioButtonGroup = ({ name, listOfItems, ...props }) => {
  const renderItems = (item) => {
    return (
      <label key={item.value}>
        <RadioButtonElement type="radio" name='options' value={item.value} />
        <span>{item.text}</span>
      </label>
    )
  }
  return (
    <div>
      {listOfItems.map((item) => renderItems(item))}
    </div>
  )
}

RadioButtonGroup.propTypes = {
  listOfItems: PropTypes.array.isRequired,
  //selectedItemCallback: PropTypes.func.isRequired
}

export default RadioButtonGroup
