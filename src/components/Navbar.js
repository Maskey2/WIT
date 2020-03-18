import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
    Link
} from "react-router-dom";
import logo from '../assets/logo.png'
import '../App.css';
const styleSheet = {
    list: {
        width: 200,
    },
    padding: {
        paddingRight: 30,
        cursor: "pointer",
    },

    sideBarIcon: {
        color: "white",
        cursor: "pointer",
    },
    reslogo:
    {
        height: '60px',
        margin: 5
    },
    logo:
    {
        height: '120px',
        margin: 20
    },
    flex: {
        display: 'flex',
        backgroundColor: '#e4e4e4'
    },
    flex1: {
    },

    flex2: {
        marginLeft: 'auto'
    },
    subheading: {
        fontSize: 45,
        fontFamily: 'Exo',
        padding: '30px',
        fontFamily: 'Gochi Hand',
    },
    link:
    {
        textDecoration: 'none',
        color: 'white'
    },
    reslink:
    {
        textDecoration: 'none',
        color: '#213C54',
    },
    color: {
        backgroundColor: '#388087'
    }
}

class ResAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerActivate: false, drawer: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
    }

    //Small Screens
    createDrawer() {
        return (
            <div><Link to="/">
                <img src={logo} className={this.props.classes.reslogo} alt="" /> </Link>
                <AppBar className={this.props.classes.color} position="static">
                    <Toolbar>
                        <Grid container direction="row" justify="space-between"  >
                            <MenuIcon
                                className={this.props.classes.sideBarIcon}
                                onClick={() => { this.setState({ drawer: true }) }} />
                WIT
            </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={this.state.drawer}
                    onClose={() => { this.setState({ drawer: false }) }}
                    onOpen={() => { this.setState({ drawer: true }) }}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => { this.setState({ drawer: false }) }}
                        onKeyDown={() => { this.setState({ drawer: false }) }}>
                        <List className={this.props.classes.list}>
                            <ListItem key={1} button divider>
                                <Link to="/" className={this.props.classes.reslink}>Home</Link> </ListItem>
                            <ListItem key={2} button divider>
                                <Link to="/about" className={this.props.classes.reslink}>About</Link> </ListItem>
                            <ListItem key={3} button divider>
                                <Link to="/board" className={this.props.classes.reslink}>Board</Link> </ListItem>
                            <ListItem key={4} button divider>
                                <Link to="/gallery" className={this.props.classes.reslink}>Gallery</Link> </ListItem>
                            <ListItem key={5} button divider>
                                <Link to="/discussion" className={this.props.classes.reslink}>Discussion</Link> </ListItem>
                            <ListItem key={6} button divider>
                                <Link to="/alumni" className={this.props.classes.reslink}>Alumni</Link> </ListItem>
                            <ListItem key={7} button divider>
                                <Link to="/contact" className={this.props.classes.reslink}>Contact</Link></ListItem>
                        </List>
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }

    //Larger Screens
    destroyDrawer() {
        const { classes } = this.props
        return (
            <div>
                <div className={classes.flex}>
                    <div className={classes.flex1}>
                        <Link to="/">
                            <img src={logo} className={classes.logo} alt="" /></Link>
                    </div>
                    <div className={classes.flex2}>
                        <div className={classes.subheading}>LEARN. BELIEVE. CHANGE. GROW.</div>
                    </div>
                </div>
                <AppBar className={classes.color} position="static">
                    <Toolbar>
                        <Typography variant="headline" style={{ flexGrow: 1 }} color="inherit" >
                            WIT
                        </Typography>
                        <Typography variant="subheading" className={classes.padding} color="inherit" >
                            <Link to="/" className={classes.link}>Home</Link></Typography>
                        <Typography variant="subheading" className={classes.padding} color="inherit" >
                            <Link to="/about" className={classes.link}>About</Link></Typography>
                        <Typography variant="subheading" className={classes.padding} color="inherit" >
                            <Link to="/board" className={classes.link}>Board</Link></Typography>
                        <Typography variant="subheading" className={classes.padding} color="inherit" >
                            <Link to="/gallery" className={classes.link}>Gallery</Link></Typography>
                        <Typography variant="subheading" className={classes.padding} color="inherit" >
                            <Link to="/discussion" className={classes.link}>Discussion</Link></Typography>
                        <Typography variant="subheading" className={classes.padding} color="inherit" >
                            <Link to="/alumni" className={classes.link}>Alumni</Link></Typography>
                        <Typography variant="subheading" className={classes.padding} color="inherit" >
                            <Link to="/contact" className={classes.link}>Contact</Link></Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    render() {
        return (
            <div>

                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            </div>
        );
    }
}

ResAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);