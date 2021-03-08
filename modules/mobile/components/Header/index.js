import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typograpgy from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default">
                <ToolBar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link href="/">
                        <Typograpgy variant="h6"> ZEELA</Typograpgy>
                    </Link>
                </ToolBar>
            </AppBar>
        </div>
    );
};

export default Header;
