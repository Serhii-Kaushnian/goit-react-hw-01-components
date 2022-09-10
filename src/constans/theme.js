export const theme = Object.freeze({
  colors: {
    white: ' #ffffff',
    black: '#010101',
    gray: '#c0c0c0',
    green: ' #4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
    backgroudColor: 'rgb(173, 222, 222)',
  },
  spacing: value => `${value * 4}px`,
  sizes: {
    iconSize: { sm: 16, md: 24, lg: 32 },
  },
  fontSizes: {
    sm: `16px`,
    md: `24px`,
    lg: `32px`,
    xl: `40px`,
    xxl: `48px`,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  radii: {
    half: `50%`,
    sm: `5px`,
    md: `10px`,
    lg: `15px`,
    xl: `20px`,
  },
  shadows: {
    textShadow: {
      normal: `2px 2px 2px rgba(0, 0, 0, 0.4)`,
    },
    boxShadow: {
      normal: `rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset`,
      normalInvert: `rgba(50, 50, 93, 0.25) 0px 30px 50px -12px , rgba(0, 0, 0, 0.3) 0px 18px 26px -18px `,
    },
  },
});
