import React from 'react'
import { TextField,Box,MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
  //  const [country, setCountry] = useState("");
    const [countries, setCountries] = useState<string[]>([])
    const handleChangeM=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value=e.target.value;
        setCountries(typeof value==="string"?value.split(","):value);
    }

    // const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setCountry(e.target.value as string);
    // }
  return (
    <div>
        <Box width={'250px'}>
            <TextField
            label='Select Country'
            select 
            value={countries}
            onChange={handleChangeM}
            fullWidth
            SelectProps={{
                multiple:true,
            }}
            >
                <MenuItem value="TR">Türkiye</MenuItem>
                <MenuItem value="US">ABD</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
            </TextField>
        </Box>
    </div>
  )
}
