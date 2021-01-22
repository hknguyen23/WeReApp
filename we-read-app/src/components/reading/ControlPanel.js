import React from 'react';
import {
    Container,
    Button,
    makeStyles
} from '@material-ui/core';
import { useHistory } from 'react-router-dom'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { detail } from '../../resources/data/data'

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

const ControlPanel = (props) => {
    const classes = useStyles(props.theme);
    const histoty = useHistory();

    const handleChange = () => {

    }

    const prevChapter = Number(props.chapterID) - 1;
    const nextChapter = Number(props.chapterID) + 1;

    return (
        <React.Fragment>
            <Container className={classes.root} maxWidth={false}>
                <Button fullWidth variant="contained" color="primary"
                    className={classes.button} startIcon={<ArrowBackIosIcon />}
                    disabled={prevChapter <= 0}
                    onClick={() => {
                        histoty.push(`/Reading/${props.ID}/${prevChapter}`);
                        if (props.refProp) {
                            props.refProp.current.scrollIntoView()
                        }
                    }}
                >
                    Chương trước
                </Button>
                <Button fullWidth variant="contained" color="primary" className={`${classes.button} ${classes.middleButton}`}
                    onClick={() => { histoty.push(`/Detail/${props.ID}`); }}

                >
                    Danh sách chương
                </Button>
                <Button fullWidth variant="contained" color="primary"
                    className={classes.button} endIcon={<ArrowForwardIosIcon />}
                    disabled={nextChapter > detail.chapters.length}
                    onClick={() => {
                        histoty.push(`/Reading/${props.ID}/${nextChapter}`);
                        if (props.refProp) {
                            props.refProp.current.scrollIntoView()
                        }
                    }}
                >
                    Chương sau
            </Button>
            </Container>
        </React.Fragment>
    );
}

export default ControlPanel;