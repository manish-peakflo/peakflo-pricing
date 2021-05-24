import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3e92cc',
    },
    secondary: {
      main: '#3e92cc',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    typography: {
      fontFamily: "Nunito Sans, Roboto, sans-serif"
    },
    text: {
      default: '#3e92cc',
    },
    textColor: '#3e92cc',
  }
});

export default theme;