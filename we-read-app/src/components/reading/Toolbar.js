import React, { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    FormHelperText,
    Checkbox,
    makeStyles
} from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';


const useStyles = makeStyles((theme) => ({

}));

const fontSize = [8, 10, 12, 14, 16, 18];

const Toolbar = () => {
    const classes = useStyles();

    const handleChange = () => {

    }

    return (
        <Container className={classes.root} maxWidth="lg">
            <Container className={classes.inputLabel}>
                <Typography>Độ tuổi </Typography>
            </Container>
            <TextField
                size="small"
                name="fontSize"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
            >
                {fontSize.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </TextField>

        </Container>
    );
}

export default Toolbar;