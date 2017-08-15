import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { placeholder, rem, transitions } from 'polished'
import Icon from '~/src/components/atoms/Icon'
import Link from '~/src/components/atoms/Link'

import { responsiveFontSizes as fontSize } from '~/src/components/themes/default'

const styles = css`
  display: inline-block;
  position: relative;
  font-family: ${font('primary')};
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  background-color: ${palette('grayscale', 0, true)};
  cursor: pointer;
  ${transitions('border-color .1s ease-in')};

  &:hover {
    border-color: ${palette('grayscale', 3, true)}
  }

  @media screen and (max-width: 420px) {
    font-size: ${fontSize.mobile};
    border: 2px solid ${palette('grayscale', 2, true)};
    border-radius: 6px;
    height: 210px;
    width: ${({ responsive }) => responsive ? '100%' : rem('135px')};
  }

  @media screen and (min-width: 421px) {
    font-size: ${fontSize.desktop};
    border: 3px solid ${palette('grayscale', 2, true)};
    border-radius: 6px;
    height: 245px;
    width: ${({ responsive }) => responsive ? '100%' : rem('160px')};
  }
`

const StyledCategory = styled.div`${styles}`

const StyledIcon = styled(Icon)`
  color: ${palette('black', 0)};

  @media screen and (max-width: 420px) {
    font-size: ${rem('46.6px')};
    margin: ${({ responsive }) => responsive && 0};
    margin-top: ${rem('60px')};
  }

  @media screen and (min-width: 421px) {
    font-size: ${rem('66px')};
    margin-top: ${rem('60px')};
  }
`

const Text = styled.span`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  position: absolute;
  left: 0;
  right: 0;
  text-transform: uppercase;

  @media screen and (max-width: 420px) {
    font-size: ${fontSize.mobile};
    line-height: ${rem('16px')};
    font-weight: 500;
    margin: 0 ${rem('20px')};
    bottom: ${rem('19px')};
  }

  @media screen and (min-width: 421px) {
    font-size: ${fontSize.desktop};
    line-height: ${rem('20px')};
    font-weight: 600;
    margin: 0 ${rem('30px')};
    bottom: ${rem('27px')};
  }
`

const Category = ({ width, height, icon, responsive, children, ...props }) => {
  const iconElement = (
    <StyledIcon
      icon={icon}
      responsive={responsive}
      palette={props.palette}
      reverse={props.reverse}
      width={width}
      height={height}
    />
  )
  return (
    <Link {...props}>
      <StyledCategory>
        { iconElement }
        <Text>{children}</Text>
      </StyledCategory>
    </Link>
  )
}

Category.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.node,
  width: PropTypes.integer,
  height: PropTypes.integer,
}

export default Category
