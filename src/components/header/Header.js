import React from 'react'
import './Header.css'
import { MenuItem, TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import categories from '../../data/data'
const Header = ({ category, setCategory, word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
      
    const handleChange=(language)=>{
        setCategory(language);
        setWord("");
    }
    return (
        <div className='header'>
            <span className='title'>{word?word:"Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className='search'
                        id="standard-basic"
                        label="Search a word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        variant="standard" />
                    <TextField
                    className='select'
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={category}
                        onChange={(e)=>handleChange(e.target.value)}
                        variant='standard'
                    >
                        {
                            categories.map((option) => {
                                return <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            })
                        }
                    </TextField>
                </ThemeProvider>

            </div>
        </div>
    )
}

export default Header
