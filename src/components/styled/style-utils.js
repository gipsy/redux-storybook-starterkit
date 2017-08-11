import { css } from 'styled-components'

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

//#TODO it's usage renders into style completely wrong
export const responsiveMixin = () => {
  const sizes = {
    default: 99999,
    desktop: 992,
    tablet: 768,
    phone: 376,
  };

  // Iterate through the sizes and create a media template
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {});

  return media;
};
