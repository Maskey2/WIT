import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import Footer from './Footer';
import contents from './GalleryContent'
import contentss from './GalleryContent2'
import p1 from '../assets/Gallery/Saugat.jpg';
import p2 from '../assets/Gallery/avash.jpg';
import p3 from '../assets/Gallery/Bibesh.png';
import p4 from '../assets/Gallery/Akriti.jpg';
import '../App.css';
const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardMedia2: {
        paddingTop: '56.25%', // 16:9
        height: '400px',
    },
    cardContent: {
        flexGrow: 1,
    },

}));




export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Gallery            </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Images of Events hosted by Women in Technology.
                         </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={4}>
                        {contents.map(content => (
                            <Grid item key={content} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={content.image}
                                        subtitle={content.subtitle}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography component="h5" align='center'>
                                            {content.subtitle}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid container spacing={4}>
                        {contentss.map(content => (
                            <Grid item key={content} xs={12} sm={6} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia2}
                                        image={content.image}
                                        subtitle={content.subtitle}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography component="h5" align='center'>
                                            {content.subtitle}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
}