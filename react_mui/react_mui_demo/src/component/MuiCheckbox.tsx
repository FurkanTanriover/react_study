import React from 'react'
import{Box,FormControlLabel,Checkbox, FormControl, FormLabel, FormGroup} from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from 'react'
export const MuiCheckbox = () => {
    const [accepTnC, setaccepTnC] = useState(false);
    const [skills, setskills] = useState<string[]>([])
    console.log(skills);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setaccepTnC(e.target.checked);
    };
    const handleSkillChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const index=skills.indexOf(e.target.value);
        if(index===-1){
            setskills([...skills,e.target.value]);
        }
        else{
            setskills(skills.filter((skill)=>skill!==e.target.value));
        }
    };

  return (
    <Box>
        <Box>
            <FormControlLabel
            label='I accept terms and conditions'
            control={<Checkbox checked={accepTnC} onChange={handleChange}></Checkbox>}
            />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={accepTnC} onChange={handleChange}/>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange}/>}/>
                    <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange}/>}/>
                    <FormControlLabel label='JAVASCRİPT' control={<Checkbox value='js' checked={skills.includes('js')} onChange={handleSkillChange}/>}/>
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
