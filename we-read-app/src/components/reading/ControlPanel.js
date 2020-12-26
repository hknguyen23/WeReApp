import React from 'react';
import {
    Container,
    Button,
    makeStyles
} from '@material-ui/core';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '0px',
        paddingLeft: '0px'
    },
    button: {
        width: '297px',
        height: '36px',
        borderRadius: '0px',
        backgroundColor: '#2196F3'
    },
}));

const ControlPanel = ({theme}) => {
    const classes = useStyles();
    console.log(theme);

    const handleChange = () => {

    }

    return (
        <React.Fragment>
            <Container className={classes.root} maxWidth="lg" style={{ backgroundColor: theme.body }}>
                <Button fullWidth variant="contained" color="primary"
                    className={classes.button} startIcon={<ArrowBackIosIcon />}
                >
                    Chương trước
                </Button>
                <Button fullWidth  variant="contained" color="primary" className={classes.button}>
                    Danh sách chương
                </Button>
                <Button fullWidth variant="contained" color="primary"
                    className={classes.button} endIcon={<ArrowForwardIosIcon />}
                >
                    Chương sau
            </Button>
            </Container>
        </React.Fragment>
    );
}

export default ControlPanel;