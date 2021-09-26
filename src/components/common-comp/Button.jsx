import React from 'react';
// import Button from '@material-ui/core/Button';
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function ShopButton({ clsName, val}) {
  //   const theme = createTheme({
  //   status: {
  //     danger: '#e53e3e',
  //   },
  //   palette: {
  //     primary: {
  //       main: '#0971f1',
  //       darker: '#053e85',
  //     },
  //     neutral: {
  //       main: '#64748B',
  //       contrastText: '#fff',
  //     },
  //   },
  // });
  return (
    // <ThemeProvider theme={theme}>
    // <Button variant="contained" color="neutral" className={clsName}>
    //   {val}
    // </Button>
    // </ThemeProvider>
    <button variant="contained"  className={clsName}>
      {val}
    </button>
  );
}

export default ShopButton;
