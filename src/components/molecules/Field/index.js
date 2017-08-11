import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { rem } from 'polished'

import Label from '~/src/components/atoms/Label'
import Input from '~/src/components/atoms/Input'
import Block from '~/src/components/atoms/Block'

const Error = styled(Block)`
  font-family: ${font('primary')};
  font-weight: 600;
  color: ${palette({ danger: 1 }, 2)};

  @media (max-width: 420px) {
    font-size: ${rem('14px')};
    margin-top: ${rem('10px')};
  }

  @media (min-width: 421px) {
    font-size: ${rem('16px')};
    margin-top: ${rem('15px')};
  }
`

const Wrapper = styled.div`
  @media (max-width: 420px) {
    margin-bottom: ${rem('20px')};
  }

  @media (min-width: 421px) {
    margin-bottom: ${rem('25px')};
  }

  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }
  label {
    vertical-align: middle;
  }
`

const Field = ({ error, name, invalid, label, type, ...props }) => {
  const inputProps = { id: name, name, type, invalid, 'aria-describedby': `${name}Error`, ...props }
  const renderInputFirst = type === 'checkbox' || type === 'radio'
  return (
    <Wrapper>
      {renderInputFirst && <Input {...inputProps} />}
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {renderInputFirst || <Input {...inputProps} />}
      {invalid && error &&
        <Error id={`${name}Error`} role="alert" palette="danger">
          {error}
        </Error>
      }
    </Wrapper>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

Field.defaultProps = {
  type: 'text',
}

export default Field
