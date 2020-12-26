import React, { useState, useEffect } from 'react';
import {
    Container,
    Box,
    TextField,
    Typography,
    Switch,
    makeStyles
} from '@material-ui/core';

import FontDownloadIcon from '@material-ui/icons/FontDownload';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'rows',
        justifyContent: 'center',
    },
    toolbar: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'rows',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '14px',
        fontSize: '20px'
    },
    marginIcon: {
        marginRight: '5px'
    },
    marginGroup: {
        marginRight: '24px'
    },
    fontIcon: {
        width: '33px',
        height: '33px',
        color: '#2F80ED',
    },
    fontDropdown: {
        width: '200px'
    }
}));

const data1 = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28];
const data2 = ['Arial', 'Roboto', 'Cambria', 'Georgia', 'Times New Roman'];
const data3 = ['50%', '60%', '70%', '80%', '90%'];

const Toolbar = (props) => {
    const classes = useStyles();
    const [dark, setDark] = useState(false);
    const [listFontSize, setListFontSize] = useState(data1);
    const [listFont, setListFont] = useState(data2);
    const [listIndent, setListIndent] = useState(data3);

    const handleChangeFont = (e) => {
        props.setFont(e.target.value);
    }
    const handleChangeFontSize = (e) => {
        props.setFontSize(e.target.value);
    }
    const handleChangeIndent = (e) => {
        props.setIndent(e.target.value);
    }

    const handleChangeDark = () => {
        console.log("hello")
    }

    return (
        <Container className={classes.root} maxWidth="lg">
            <Box className={classes.toolbar}>
                <Typography className={classes.marginIcon}>Dark mode</Typography>
                <Switch
                    className={classes.marginGroup} onChange={handleChangeDark}
                    color="primary"
                    name="dark"
                />
                <FontDownloadIcon className={`${classes.fontIcon} ${classes.marginIcon}`} />
                <TextField
                    className={`${classes.fontDropdown} ${classes.marginGroup}`}
                    size="small"
                    name="font"
                    onChange={handleChangeFont}
                    required
                    select
                    SelectProps={{ native: true }}
                    variant="outlined"
                    value={props.font}
                >
                    {listFont.map((option) => (
                        <option key={option} value={option} >
                            {option}
                        </option>
                    ))}
                </TextField>

                <Typography className={classes.marginIcon}>Size</Typography>
                <TextField
                    className={classes.marginGroup}
                    size="small"
                    name="fontSize"
                    onChange={handleChangeFontSize}
                    required
                    select
                    SelectProps={{ native: true }}
                    variant="outlined"
                    value={props.fontSize}
                >
                    {listFontSize.map((option) => (
                        <option key={option} value={option} >
                            {option}
                        </option>
                    ))}
                </TextField>

                <Typography className={classes.marginIcon}>Indent</Typography>
                <TextField
                    className={classes.marginGroup}
                    size="small"
                    name="indent"
                    onChange={handleChangeIndent}
                    required
                    select
                    SelectProps={{ native: true }}
                    variant="outlined"
                    value={props.indent}
                >
                    {listIndent.map((option) => (
                        <option key={option} value={option} >
                            {option}
                        </option>
                    ))}
                </TextField>

            </Box>
        </Container>
    );
}

export default Toolbar;