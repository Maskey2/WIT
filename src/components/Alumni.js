import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alum from '../assets/Alumni.jpg'
import { Grid } from '@material-ui/core';
import '../App.css';
export default function Alumni() {


    return (
        <React.Fragment>
            <main>
                <div>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Alumni
                     </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            We are always exited to hear from ex students and we would love to hear from you!
                        </Typography>
                        <img src={Alum} style={{ height: 'auto', width: '100%' }} />

                    </Container>
                </div>
            </main>
        </React.Fragment >

    )
}