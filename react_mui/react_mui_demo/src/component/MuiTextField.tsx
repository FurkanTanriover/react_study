import React from 'react'
import { Stack,TextField,InputAdornment } from '@mui/material'
import { useState } from 'react'
export const MuiTextField = () => {
    const [value, setValue] = useState("");
  return (
      <Stack spacing={4}>
    <Stack  direction={"row"} spacing={2}>
        <TextField label='name' variant='outlined'></TextField>
        <TextField label='name' variant='filled'></TextField>
        <TextField label='name' variant='standard'></TextField>
    </Stack>
    <Stack spacing={2} direction={"row"}>
        <TextField label="small secondary" variant='outlined' color='secondary' size='small'></TextField>
    </Stack>
    <Stack spacing={2} direction={"row"}>
        <TextField 
        label="required input" 
        required 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        error={!value}
        helperText={!value?"Password required":"nice password"}
        > 
        </TextField>
        <TextField label="disable input" disabled > </TextField>
        <TextField label="password" helperText="şifrenizi giriniz" type={"password"} > </TextField>
    </Stack>
    <Stack spacing={2} direction={"row"}>
    <TextField label="Amount" InputProps={{
        startAdornment:<InputAdornment position='start'>$</InputAdornment>
    }}> </TextField>
    <TextField label="Weight" InputProps={{
        endAdornment:<InputAdornment position="end">KG</InputAdornment>
    }}> </TextField>

    </Stack>

    </Stack>
  )
}
