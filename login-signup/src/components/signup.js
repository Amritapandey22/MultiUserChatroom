import React, {useState} from 'react'

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 400, margin:0 }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const [selectedFile, setSelectedFile] = useState(null);
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email"/>
                    <TextField fullWidth label='Aadhar' placeholder="Aadhar Card Number"/>
                    <TextField fullWidth label='Address' placeholder="Enter your Address"/>
                    <TextField fullWidth label='Phone-Number'  placeholder="Enter your email"/>
                   
                    
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    {/* <label>User Image 
                    <input
                     fullWidth
                     type="file"
                         //value={values.link}
                         //onChange={handleInputChange}
                         value={selectedFile}
                         onChange={(e) => setSelectedFile(e.target.files[0])}
                         name="link"
                         label="Image"
                     />
                    </label>
                    <label>Aadhar Image 
                    <input
                     
                     type="file"
                         //value={values.link}
                         //onChange={handleInputChange}
                         value={selectedFile}
                         onChange={(e) => setSelectedFile(e.target.files[0])}
                         name="link"
                         label="Image"
                     />
                    </label> */}
                    <label htmlFor="upload-photo"> 
                    <Fab color="primary" size="small" component="span" aria-label="add" style={{margin:'15px'}}>
                    <AddIcon /> 
                           </Fab> 
                           <p> Add image
                               </p>
                               </label>
                        <input
                        onChange={(e)=>console.log(e.target.files[0])}
                        style={{visibility:'hidden'}}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        /> 
                        
                        <label htmlFor="upload-photo"> 
                    <Fab color="primary" size="small" component="span" aria-label="add" style={{margin:'15px'}}>
                    <AddIcon /> 
                           </Fab> 
                           <p> Add Aadhar image
                               </p>
                               </label>
                        <input
                        onChange={(e)=>console.log(e.target.files[0])}
                        style={{visibility:'hidden'}}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        /> 
                   
                        <br />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button fullWidth type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;