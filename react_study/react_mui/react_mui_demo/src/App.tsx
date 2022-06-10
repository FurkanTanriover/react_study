import { Stack } from '@mui/material';
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { MuiCheckbox } from './component/MuiCheckbox';
// import { MuiButton } from './component/MuiButton';
// import { MuiSelect } from './component/MuiSelect';
// import { MuiTextField } from './component/MuiTextField';
// import { MuiTypography } from './component/MuiTypography';

function App() {
  return (
    <div className="App">
      <Stack spacing={8}>
        {/* <MuiTypography/>
        <MuiTextField/>
        <MuiButton/>
      <MuiSelect/> */}
      <MuiCheckbox/>
      </Stack>
    </div>
  );
}

export default App;
