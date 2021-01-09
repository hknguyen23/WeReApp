import React from 'react';
import {
    Container,
    Button,
    makeStyles
} from '@material-ui/core';
import { useHistory } from 'react-router-dom'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    root: (theme) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '0px',
        paddingLeft: '0px',
        backgroundColor: theme.body
    }),
    button: (theme) => ({
        width: '33,3%',
        height: '36px',
        borderRadius: '0px',
        backgroundColor: theme.button,
    }),
    middleButton: (theme) => ({
        borderLeft: theme.fieldBorder === "0px" ? "1px solid #FFFFFF" : theme.fieldBorder,
        borderRight: theme.fieldBorder === "0px" ? "1px solid #FFFFFF" : theme.fieldBorder,
    })
}));

const ControlPanel = ({ theme }) => {
    const classes = useStyles(theme);
    const histoty = useHistory();

    const handleChange = () => {

    }

    return (
        <React.Fragment>
            <Container className={classes.root} maxWidth={false}>
                <Button fullWidth variant="contained" color="primary"
                    className={classes.button} startIcon={<ArrowBackIosIcon />}
                    onClick={() => { histoty.push("/Reading"); }}
                >
                    Chương trước
                </Button>
                <Button fullWidth variant="contained" color="primary" className={`${classes.button} ${classes.middleButton}`}
                    onClick={() => { histoty.push("/Detail/1"); }}

                >
                    Danh sách chương
                </Button>
                <Button fullWidth variant="contained" color="primary"
                    className={classes.button} endIcon={<ArrowForwardIosIcon />}
                    onClick={() => { histoty.push("/Reading"); }}
                >
                    Chương sau
            </Button>
            </Container>
        </React.Fragment>
    );
}

export default ControlPanel;