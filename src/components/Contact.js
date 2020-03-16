import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Contact() {


    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar />
            <main>

                <div>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Contact Us
                     </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            We are always exited to hear from you and we are always looking to expand our group!
                        </Typography>
                        <img src="https://nysba.org/app/uploads/2020/01/Contact-Us_Hero-Image-1-1280x640.jpg" style={{ maxHeight: '500px', witdth: 'auto' }} />


                    </Container>
                </div>
            </main>
        </React.Fragment>

    )
}