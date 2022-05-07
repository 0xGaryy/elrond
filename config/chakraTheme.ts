import { extendTheme, theme as originTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1560px',
});

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: '100vh',
        overflowX: 'hidden',
        bgGradient: 'ffff',
        bgSize: '700px',
        backgroundPositionX: '150px',
        color: 'elvenTools.white',
      },
      '*': {
        '&::-webkit-scrollbar': {
          width: 1.5,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'elvenTools.dark.base',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'elvenTools.light',
          borderRadius: 1.5,
        },
        scrollbarWidth: 'auto',
        scrollbarColor: 'elvenTools.light elvenTools.dark.base',
      },
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  colors: {
    elvenTools: {
      bgStripes: '#2c3440',
      shadowColor: '#141414',
      dark: {
        lighter: '#3c4757',
        base: '#000000',
        darker: '#ffffff',
      },
      light: '#FAFFFD',
      white: '#000000',
      color1: {
        lighter: '#ffffff',
        base: '#000000',
        darker: '#000000',
      },
      color2: {
        lighter: '#000000',
        base: '#ffffff',
        darker: '#000000',
      },
      color3: {
        lighter: '#fb9567',
        base: '#6c3657',
        darker: '#f9611c',
      },
    },
  },
  components: {
    Alert: {
      variants: {
        subtle: {
          container: {
            bg: 'elvenTools.dark.lighter',
          },
        },
      },
    },
  },
  ...breakpoints,
});
