// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
module.exports = {
  content: ['src/index.{html,pug}'],
  corePlugins: [
    'alignItems',
    'backgroundColor',
    'borderColor',
    'borderRadius',
    'borderStyle',
    'borderWidth',
    'boxSizing',
    'display',
    'justifyContent',
    'textColor',
    'fontFamily',
    'height',
    'inset',
    'margin',
    'minHeight',
    'overflow',
    'padding',
    'position',
    'userSelect',
    'transitionDuration',
    'width'
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem'
      }
    },
    fontFamily: {
      mono: ['Roboto Mono', 'mono'],
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Serif', 'serif']
    }
  }
};
// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
