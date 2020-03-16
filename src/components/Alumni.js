import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Alumni() {


    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar />
            <main>

                <div>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>

                            Alumni
                     </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            We are always exited to hear from you and we are always looking to expand our group!
                        </Typography>
                        <img src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2016/06/Alumni.jpg" style={{ maxHeight: '500px', witdth: 'auto' }} />


                    </Container>
                </div>
            </main>
        </React.Fragment>

    )
}