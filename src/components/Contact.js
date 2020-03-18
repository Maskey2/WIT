import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import Footer from './Footer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import '../App.css';
const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: 'black',
    },
}));

export default function Contact() {
    const classes = useStyles();
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
                        <Grid item xs={12}>
                            <Typography align="center">
                                <a href="https://www.google.com/maps/dir/30.5135616,-90.4790016/selu+location/@30.5163838,-90.4783979,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x862722985b04e61d:0xd65f00282c35660!2m2!1d-90.4688572!2d30.5173159" className={classes.link}>
                                    <LocationOnIcon style={{ fontSize: '40px' }} />
                                </a>
                                <p>Southeastern Louisiana University,</p>
                                <p>500 W University Ave, Hammond, LA 70402</p>
                                <a href="mailto:slu_wit@southeastern.edu" className={classes.link}>
                                    <EmailIcon style={{ fontSize: '40px', textAlign: 'center', justifyContent: 'center' }} />
                                    <p> slu_wit@southeastern.edu</p></a>
                                <p style={{ paddingBottomt: '20px' }}>
                                    <a href="mailto:maskeynishma@gmail.com" className={classes.link} >Nishma Maskey</a>
                                </p>
                            </Typography>
                        </Grid>
                    </Container>
                </div>
            </main>
            <Footer />
        </React.Fragment>

    )
}