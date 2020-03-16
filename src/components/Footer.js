import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import selu from "../assets/slu.png";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Nishma Maskey
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    res: {
        height: '30px',
        width: 'auto'
    },
    selu: {
        height: '100px',
        width: 'auto'
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div >
            <footer className={classes.footer}>

                <Typography align="center" color="textSecondary">
                    <div>
                        <div>
                            <img src={selu} className={classes.selu} alt="logo" />
                        </div>
                        <p><b>Follow us in Social Media to stay connected</b></p>

                        <a href="https://www.facebook.com/SeluWit/">
                            <img src={fb} className={classes.res} alt="logo" />
                        </a>

                        <a href="https://www.instagram.com/wit.selu/">
                            <img src={ig} className={classes.res} alt="logo" />
                        </a>


                    </div>
                </Typography>
                <Box mt={5} className={classes.center}>
                    <Copyright />
                </Box>
            </footer>
        </div>
    );
}