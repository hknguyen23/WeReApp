import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
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
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        background: 'linear-gradient(45deg, #f2775e 30%, #f28872 90%)',
        boxShadow: '0 3px 5px 2px rgba(242, 24, 39, .3)',
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

const FavoriteCard = ({ className, ...rest }) => {
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
            <CardHeader classes={{title: classes.headerTitle}} title="yêu thích" />
            <Divider variant="middle" />
            <CardContent>
                <Box
                    position="relative"
                >
                    <FavoriteIcon style={{ fontSize: 100 , color: red[500]}} />
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    align-itmes="center"
                    mt={2}
                >
                    <Typography>DANH SÁCH TRUYỆN YÊU THÍCH</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

FavoriteCard.propTypes = {
    className: PropTypes.string
};

export default FavoriteCard;
