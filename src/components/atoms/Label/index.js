import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { rem } from 'polished'

const Label = styled.label`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  display: inline-block;

  @media (max-width: 420px) {
    font-size: ${rem('18px')};
    line-height: ${rem('18px')};
    margin-bottom: ${rem('20px')};
  }

  @media (min-width: 421px) {
    font-size: ${rem('20px')};
    line-height: ${rem('22px')};
    margin-bottom: ${rem('23px')};
  }
`

Label.propTypes = {
  reverse: PropTypes.bool,
}

export default Label
