import React from 'react'
import { Stack,TextField } from '@mui/material'
export const MuiTextField = () => {
  return (
    <Stack spacing={4} direction={"row"}>
        <TextField label='name'></TextField>
    </Stack>
  )
}
