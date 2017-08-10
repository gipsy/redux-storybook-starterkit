// https://github.com/diegohaz/arc/wiki/Styling
import WebFont from 'webfontloader'
import { reversePalette } from 'styled-theme/composer'

WebFont.load({
  google: {
    families: ['Open+Sans:300,400,400i,600,600i,700,700i,800,800i', 'sans-serif']
  }
})

const theme = {}

theme.palette = {
  primary: ['#f6a623', '#d68a0c', '#f5c677', '#fee2b4', '#fceed6'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#ee828e', '#ef828e', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fefefe', '#eee'],
  grayscale: [
    '#212121',
    '#4a4a4a',
    '#616161',
    '#e2e2e2',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'OpenSans, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  maxWidth: '1100px',
}

const sizes = {
  desktop: 992,
  phone: 376
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

// const Content = styled.div`
//   height: 3em;
//   width: 3em;
//   background: papayawhip;
//
//   #<{(| Now we have our methods on media and can use them instead of raw queries |)}>#
//   ${media.desktop`background: #fff;`}
//   ${media.phone`background: #000;`}
// `;

export default theme
