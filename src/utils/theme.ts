const colors = {
  accent: '#ffcd00',
  black: '#212121',
  grey: '#bdbdbd',
  white: '#fafafa',

  textHeading: '#263238',
  textMain: '#37474f',
}

const colorAlias = {
  backgroundHr: colors.grey,
  backgroundButton: colors.accent,
  backgroundScreen: colors.black,

  textButton: colors.black,
  textScreen: colors.white,
  textInput: colors.textMain,

  link: colors.black,
  linkHover: colors.textMain,
  linkFaded: '#455a64',

  borderInput: colors.grey,
  borderInputFocus: colors.black,
  borderTable: colors.grey,
}

const typography = {
  main:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  code:
    "Menlo, Consolas, Monaco, 'Ubuntu Mono', 'Liberation Mono', 'Lucida Console', monospace",
}

const fontSize = {
  base: '16px',
  h1: '2',
  h2: '1.75',
  h3: '1.5',
  h4: '1.375',
  h5: '1.25',
  h6: '1.125',
  main: '1',
  pre: '0.875',
  blockquote: '1.125',
}

const lineHeight = {
  body: 1.5,
  heading: 1.2,
}

const theme = {
  colors,
  colorAlias,
  typography,
  fontSize,
  lineHeight,
}

export type ThemeInterface = typeof theme
export default theme
