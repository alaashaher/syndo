import { createTheme } from '@material-ui/core/styles';

const theme = (dir) =>
  createTheme({
    direction: dir,
    palette: {
      primary: {
        main: '#2B71AD'
        // main: '#ffc400'
        // main: '#2F4456'
        // main: "#d72a33"
      },
      secondary: {
        main: '#d72a33'
        // main: "#f44336"
        // main: "#fff"
      }
    },
    typography: {
      fontFamily: null
    }
  });

export default theme;
