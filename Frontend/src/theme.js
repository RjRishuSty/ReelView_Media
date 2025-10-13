import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7743DB', // fourth color
      light: '#C3ACD0', // third color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#c3863c', // second color
      light:'#f7efe5',
      contrastText: '#000000',
    },
    background: {
      default: '#FFFBF5', // first color
      paper: '#FFFFFF',
    },
    text:{
      main:'#000',
      light:'#595959',

    },
    hover: {
      main: '#FFFFFF', // hover color red
    },
    active: {
      main: '#0000FF', // active color blue
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Poppins', sans-serif" },
    h2: { fontFamily: "'Poppins', sans-serif" },
    h3: { fontFamily: "'Poppins', sans-serif" },
    h4: { fontFamily: "'Poppins', sans-serif" },
    h5: { fontFamily: "'Poppins', sans-serif" },
    h6: { fontFamily: "'Poppins', sans-serif" },
    body1: { fontFamily: "'Inter', sans-serif" },
    body2: { fontFamily: "'Inter', sans-serif" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#c3863c', // hover red
          },
          '&:active': {
            backgroundColor: '#0000FF', // active blue
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '&:hover fieldset': {
              borderColor: '#c3863c', // hover red
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7743DB', // primary focus
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // borderRadius: '12px',
          backgroundColor: '#FFFBF5', // first color
        },
      },
    },
  },
});

export default theme;
