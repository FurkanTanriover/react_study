import React,{useState,useEffect} from 'react'
import {  Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import axios from 'axios'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import aeLogo from "../static/images/ae_pp.jpeg"


const Post = () => {

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
            setPosts(res.data);
        }).catch(err=>{
            console.log(err);
        })
    });

  return (
    <Box>
         <Card sx={{ maxWidth: 900,boxShadow:15,margin:3}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="recipe"  src={aeLogo}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Aleyna Elmas"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />

        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
  
    </Card>
    </Box>
  )
}

export default Post