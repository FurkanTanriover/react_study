import React from 'react'
import { Stack, Button, IconButton,ToggleButton,ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export const MuiButton = () => {

    const[formats,setFormats]=useState<string| null>(null)
    console.log(formats);

    const handleFormatChange=(_e:React.MouseEvent<HTMLElement>,updatedFormats:string|null)=>{
        setFormats(updatedFormats);
    }
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
    <Stack display={"block"} direction={'row'} spacing={2}>
    <Button startIcon={<SendIcon/>} variant='contained' color='info'size='small' disableRipple onClick={()=>alert("yollandı")}>info</Button>
    <Button endIcon={<SendIcon/>} variant='contained' color='info'size='small'>info</Button>
    <IconButton aria-label='send' color='success' size='small'>
        <SendIcon/>
    </IconButton>
    </Stack>
    <Stack direction={"row"}>
        <ToggleButtonGroup 
            aria-label='text formatting' 
            value={formats} 
            onChange={handleFormatChange} 
            color={"error"} 
            orientation={"horizontal"}>
                <ToggleButton value={"bold"}>
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value={"italic"}>
                    <FormatItalicIcon/>
                </ToggleButton>  
                <ToggleButton value={"underlined"}>
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
    </Stack>
    </Stack>
  )
}
