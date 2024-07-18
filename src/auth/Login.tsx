import { 
    Container,
    Box,
    Button,
    Typography,
    TextField
} from "@mui/material";
import { useState } from "react";

import Grid from '@mui/material/Grid'; // Grid version 1
import BackgroundImage from '../assets/images/loginbg.jpeg'

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container fixed>
            <Grid container textAlign="left" height="100vh" justifyContent="center">
                <Grid
                    alignSelf="center"
                    container
                    direction="column"
                    rowSpacing={2} 
                    border="3px solid #3264a8"
                    sx={
                        {
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            padding: {
                                xs: "2rem",
                                sm: "3rem",
                                md: "4rem"
                            },
                            width: {
                                
                                sm: "100%",
                                md: "60%"
                            }
                        }
                    }>
                    <Typography variant="h4">Please login.</Typography>
                    <Grid item>
                        <TextField fullWidth value={username} label="Username" onChange={(e) => setUsername(e.target.value)} 
                            inputProps={{
                                title: 'Please enter your username.',
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField fullWidth value={password} label="Password" onChange={(e) => setPassword(e.target.value)} 
                            inputProps={{
                                title: 'Please enter your password.',
                            }}
                        />
                    </Grid>
                    <Grid item textAlign="right">
                            <Button
                                sx={
                                    {
                                        backgroundColor: "#3264a8",
                                        color: "#fff",
                                        padding: "0.5rem 1.5rem",
                                        borderRadius: "5px"
                                    }
                                }    
                            >
                                Login
                            </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}