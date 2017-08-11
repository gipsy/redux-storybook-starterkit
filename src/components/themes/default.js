// https://github.com/diegohaz/arc/wiki/Styling
import WebFont from 'webfontloader'
import { reversePalette } from 'styled-theme/composer'

WebFont.load({
  google: {
    families: ['Lato:100,100i,300,300i,400,400i,700,700i,900,900i', 'sans-serif']
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
    '#333333',
    '#4a4a4a',
    '#616161',
    '#e2e2e2',
    '#9b9b9b',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Lato, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  maxWidth: '1100px',
}

export default theme
