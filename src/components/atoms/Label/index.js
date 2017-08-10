import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Label = styled.label`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  margin-bottom: 25px;
  display: inline-block;
  font-size: 1.25rem;
  line-height: 1em;
`

Label.propTypes = {
  reverse: PropTypes.bool,
}

export default Label
