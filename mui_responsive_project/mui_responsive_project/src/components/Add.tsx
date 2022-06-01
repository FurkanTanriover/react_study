import { DateRange, Image, Mood, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Add as AddIcon } from '@mui/icons-material'
import aeLogo from "../static/images/ae_pp.jpeg"


const Add = () => {

    const [open, setOpen] = useState(false);

    const StyledModal=styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    })
    const UserBox=styled(Box)({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        marginBottom:"20px",
    })
  return (
    <>
        <Tooltip onClick={(e)=>setOpen(true)} title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(50%-25px)",md:30}}}>
            <Fab color='primary' aria-label='add'>
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={(e)=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={400} sx={{bgcolor:"background.default",color:"text.primary",p:5,borderRadius:10}}>
               <Typography variant='h5' color={"gray"} textAlign="center">Create post</Typography>
               <UserBox>
                   <Avatar src={aeLogo} sx={{width:30,height:30}}></Avatar>
                   <Typography variant='subtitle1'> Aleyna Elmas</Typography>
               </UserBox>
               <TextField
                id='standard-multiline-static'
                multiline
                rows={2}
                placeholder="what's on your mind"
                variant='standard'
                fullWidth
               /> 
               <Stack direction={"row"} gap={1} mb={20} mt={2}>
                    <Mood color='success'/>
                    <VideoCameraBack color='warning'/>
                    <Image color='error'/>
                    <PersonAdd color='primary'/>
               </Stack>
               <ButtonGroup fullWidth
               variant='contained'
               aria-label='outlined primary button group'
               >
                   <Button >Post</Button>
                   <Button sx={{width:"20%"}}><DateRange/></Button>
               </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add