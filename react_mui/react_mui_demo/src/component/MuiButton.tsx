import React from 'react'
import { Stack, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
export const MuiButton = () => {
  return (
      <Stack spacing={2}>
    <Stack spacing={2} direction="row">
        <Button variant='text' href='https://www.google.com/'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
    </Stack>
    <Stack display={"block"} spacing={2} direction='row'>
    <Button variant='contained' color='error'size='small'>Error</Button>
    <Button variant='contained' color='error'size='medium'>Error</Button>
    <Button variant='contained' color='error'size='large'>Error</Button>
    </Stack>
    <Stack direction={'row'} spacing={2}>
    <Button variant='contained' color='error'size='medium' startIcon={<SendIcon/>}>Send</Button>
    <Button variant='contained' color='error'size='medium' endIcon={<SendIcon/>}>Send</Button>

    </Stack>
    </Stack>
  )
}
