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
        height: '100%',
        background: 'linear-gradient(45deg, #82f76d 30%, #53fa34 90%)',
        boxShadow: '0 3px 5px 2px rgba(17, 245, 51 .3)',
        borderRadius: 3,
        border: 0,
        padding: '0 30px',
    },
    headerTitle: {
        fontSize: "30px",
        fontWeight: "bold",
        color: "white",
        boxShadow: "rgba(33, 203, 243, .3)"
    },

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
            // style={{ height: '400px', width: '300px', backgroundColor: "#f5f5f5"}}
            style={{ height: '400px', width: '300px' }}

        >
            <CardHeader classes={{ title: classes.headerTitle }} title="TRUYỆN" />
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
                    <Typography>ĐĂNG TRUYỆN MỚi</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

AddNovel.propTypes = {
    className: PropTypes.string
};

export default AddNovel;
