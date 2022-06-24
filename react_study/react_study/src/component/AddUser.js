import React,{useState} from 'react'
import posed from 'react-pose';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{ faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import uniqid from 'uniqid';
import UserConsumer from '../context';


const Animation=posed.div({
    visible:{
        opacity:1,
        applyAtStart:{
            display:"block"
        }
    },
    hidden:{
        opacity:0,
        applyAtEnd:{
            display:"none"
        }
    } 
});

  


export default function AddUser() {

    const [visible,setVisible]=useState(true);
    // const [name,setName]=useState("");
    // const [department,setDepartment]=useState("");
    // const [salary,setSalary]=useState("");
    const [inputFields,setInputFields]=useState({
        name:"",
        department:"",
        salary:"",
    })
    
    const changeInput=(e)=>{
        setInputFields({...inputFields, [e.target.name]: e.target.value})
    }
    
    const addUser=(dispatch,e)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        const newUser={
            id:uniqid(), 
            name:inputFields.name,
            department:inputFields.department,
            salary:inputFields.salary,
        };
        dispatch({type:"ADD_USER",payload:newUser});
        console.log(newUser);
    }
     return <UserConsumer>
     
        {
            value=>{
                const dispatch=value;
               
                return (

                    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
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
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
          
                    <div className='col-md-8 mb-4'>
                         <div className='card-header d-flex justify-content-between'>
                                <h4>Add User</h4>
                               {visible? <i onClick={()=>setVisible(!visible)}><FontAwesomeIcon icon={faEye }></FontAwesomeIcon> </i>:<i onClick={()=>setVisible(!visible)}><FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon></i>}
                
                            </div>
                        <Animation pose={visible?"visible":"hidden"}>
                
                        <div className='card'>
                           
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'> 
                                        <label htmlFor='name'>Name</label>
                                        <input type="text" name='name' id='id' placeholder='Enter Name' className='form-control' value={inputFields.name} onChange={changeInput} >
                                        </input> 
                                    </div>
                                    <div className='form-group'> 
                                        <label htmlFor='departmen'>Department</label>
                                        <input type="text" name='department' id='department' placeholder='Enter Department' className='form-control' value={inputFields.department} onChange={changeInput}>
                                        </input>
                                    </div>
                                    <div className='form-group'> 
                                        <label htmlFor='salary'>Salary</label>
                                        <input type="text" name='salary' id='salary' placeholder='Enter Salary' className='form-control' value={inputFields.salary} onChange={changeInput}>
                                        </input>
                                    </div>
                                    <button onClick={()=>addUser(dispatch)} className='btn btn-danger btn-block ' type ='submit'> Add User</button>
                                </form>
                            </div>
                        </div>
                        </Animation>
                
                
                    </div>
                  )
            }
        }
    </UserConsumer>
   
    }
