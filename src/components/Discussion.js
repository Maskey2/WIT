import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Sneha from '../assets/Sneha.jpg';
import '../App.css';
const useStyles = makeStyles(theme => ({
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
        height: '350px',
    },
    cardContent: {
        flexGrow: 1,
    },
    button: {
        padding: '10px'
    },
    link:
    {
        textDecoration: 'none',
        padding: '10px',
        color: 'black'
    }

}));

export default function Album() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <main>
                <div>
                    <Container maxWidth="lg">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Discussion Women in Technology
                     </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            #1 Let's hear what our ex-president of Women in Technnology at Southeastern Ms Sneha Sharma has to say about WIT and Southeastern!
                    </Typography>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={0}>
                        <Typography align="center" style={{ padding: '15px', fontSize: '22px' }}>Ms Sharma is currently working as a Risk Manager at Coface North America Insurance Company in New York. She graduated from SELU with Mathematics major in 2015.</Typography>
                        <Grid xs={12} sm={6} md={4}>
                            <img src={Sneha} className={classes.card} alt="QnA" />
                        </Grid>
                        <Grid xs={12} sm={6} md={8}>
                            <div>
                                <Typography className="question"><strong>1.     What is amazing in your life right now? </strong></Typography>
                                <Typography className="answer">Looking back at my college days and having worked very hard to be where I am today, it is a nice
                                feeling to know that hard work pays off. Also, keeping in mind that there is a long way to go and
                                making sure I keep moving towards the right direction. Being in this state of satisfaction and ambition
                                does feel amazing.</Typography>
                                <Typography className="question"><strong>2.     Would you like to share some of your best memories from your time at Southeastern? </strong></Typography>
                                <Typography className="answer">Southeastern is my second home because there are so many good memories attached with it. I met many amazing people during my time there. My professors and friends who were always supportive and stood by me. Also, all the
                                people I interacted with whether it was in campus organizations like WIT and SUMS or when I was tutoring – those years shaped me as a person
                                and will always be with me.</Typography>
                                <Typography className="question"><strong>3.     What made you join WIT?  </strong></Typography>
                                <Typography className="answer">If I remember correctly, I was initially approached by Vivian Boykin, co-founder of WIT. We were volunteering at the same event in the university organized by Mircrosoft U-Crew. I whole heartedly agreed with the organization’s vision and did not
                        need much convincing to be a part of it and have the privilege of contributing in any way possible.</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Typography className="question"><strong>4.     What is your favorite experience as a president of WIT? </strong></Typography>
                    <Typography className="answer">To mention one specifically, I remember organizing demo session outside student union where we taught students how to make dipping dots using liquid nitrogen.
                        It was an excellent experience where we got to show people how science can be fun</Typography>

                    <Typography className="question"><strong>5.     What advice would you like to give to the high school girls who want to pursue their
                        college degree in the STEM field but are having second thoughts? </strong></Typography>
                    <Typography className="answer">Agusta Ada was one of the very first computer programmers. Margaret Hamilton was not only a vital part of the Apollo 11 mission that reached the moon, but also coined the term “software engineering”. And very recently, Dr. Katherine Bouman (a 29-year-old MIT fellow) was instrumental in capturing the very first image of the black hole. So don’t
                        let anyone make you feel that women do not belong in this field. Follow your heart and break the stereotypes. Your future self will thank you.</Typography>

                    <Typography className="question"><strong>6.     Any advice you would like to give to WIT members?  </strong></Typography>
                    <Typography className="answer">You are already a part of an amazing and a very important organization – make the most of it by being as involved as you possibly can and take
                    initiatives. I met many talented and strong women when I was there so I am sure you are in good hands and confident that you too will be there for others who will
                    follow you. Do remember that you are following
                        the footsteps of incredible women who has contributed to science and technology and you too will one day inspire the young ones.  </Typography>
                    <hr /><hr />
                    <h4><strong>#2 Interested in being a part of Women in Technology? Curious about if you are eligible? Please take a look at the our constitution to know more about us.
                        It contains all the information related to the eligibility to be in the executive board and also responsibilities of each position!</strong>
                    </h4>
                    <button className={classes.button}> <a href="https://drive.google.com/file/d/1df_OZRSMJ8xKa1yYBtzjDcEDKldVain9/view?usp=sharing" className={classes.link}>WIT Constitution</a></button>
                    <hr /><hr />
                </Container>
            </main>
        </React.Fragment>
    );
}