import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppsIcon from '@material-ui/icons/Apps';
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
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
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

const ManagementCard = ({ className, ...rest }) => {
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
            style={{ height: '400px', width: '300px'}}
        >
            <CardHeader classes={{title: classes.headerTitle}} title="QUẢN LÝ" />
            <Divider />
            <CardContent>
                <Box
                    position="relative"
                >
                    <AppsIcon style={{ fontSize: 100 }} />
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    mt={2}
                >
                    <Typography>DANH SÁCH TRUYỆN ĐÃ ĐĂNG</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

ManagementCard.propTypes = {
    className: PropTypes.string
};

export default ManagementCard;
