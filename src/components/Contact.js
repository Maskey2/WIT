import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../App.css';
import Form from './Form'

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
            <main>
                <div>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Contact Us
                     </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            We are always exited to hear from you and we are always looking to expand our group!
                        </Typography>
                        <Form />
                    </Container>
                </div>
            </main>
        </React.Fragment>

    )
}