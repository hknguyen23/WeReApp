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
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        background: 'linear-gradient(45deg, #fac150 30%, #fccf2b 90%)',
        boxShadow: '0 3px 5px 2px rgba(197, 199, 197 .3)',
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

const AnalystCard = ({ className, ...rest }) => {
    const classes = useStyles();
    const theme = useTheme();

    const data = {
        datasets: [
            {
                data: [67, 33],
                backgroundColor: [
                    colors.indigo[500],
                    colors.red[600],
                ],
                borderWidth: 8,
                borderColor: colors.common.white,
                hoverBorderColor: colors.common.white
            }
        ],
        labels: ['Đọc', 'Viết']
    };

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

    const devices = [
        {
            title: 'Đọc',
            value: 67,
            icon: LaptopMacIcon,
            color: colors.indigo[500]
        },
        {
            title: 'Viết',
            value: 33,
            icon: TabletIcon,
            color: colors.red[600]
        }
    ];

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
            style={{ height: '400px', width: '300px'}}
        >
            <CardHeader classes={{title: classes.headerTitle}} title="THỜI GIAN" />
            <Divider variant="middle" />
            <CardContent>
                <Box
                    position="relative"
                >
                    <Doughnut
                        data={data}
                        options={options}
                    />
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    mt={2}
                >
                    {devices.map(({
                                      color,
                                      icon: Icon,
                                      title,
                                      value
                                  }) => (
                        <Box
                            key={title}
                            p={1}
                            textAlign="center"
                        >
                            <Icon color="action" />
                            <Typography
                                color="textPrimary"
                                variant="body1"
                            >
                                {title}
                            </Typography>
                            <Typography
                                style={{ color }}
                                variant="h4"
                            >
                                {value}
                                %
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

AnalystCard.propTypes = {
    className: PropTypes.string
};

export default AnalystCard;
