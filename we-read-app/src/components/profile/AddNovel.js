import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    colors,
    makeStyles,
    useTheme
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%'
    }
}));

const AddNovel = ({ className, ...rest }) => {
    const classes = useStyles();
    const theme = useTheme();

    const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.default,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
            style={{ height: '400px', width: '300px', backgroundColor: "#e5e5e5"}}
        >
            <CardHeader title="TRUYỆN" />
            <Divider />
            <CardContent>
                <Box
                    position="relative"
                >
                    <AddCircleOutlineIcon style={{ fontSize: 100 }} />
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    mt={2}
                >
                    <Typography>ĐĂNG TRUYỆN / CẬP NHẬT TRUYỆN</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

AddNovel.propTypes = {
    className: PropTypes.string
};

export default AddNovel;
