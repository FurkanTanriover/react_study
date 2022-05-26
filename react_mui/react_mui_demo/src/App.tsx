import { Stack } from '@mui/material';
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { MuiButton } from './component/MuiButton';
import { MuiTextField } from './component/MuiTextField';
import { MuiTypography } from './component/MuiTypography';

function App() {
  return (
    <div className="App">
      <Stack spacing={8}>
      {/* <MuiTypography/>   
      <MuiButton/>    */}
      <MuiTextField/>
      </Stack>
    </div>
  );
}

export default App;
