import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  Chip
} from '@material-ui/core';

import FaceIcon from '@material-ui/icons/Face';
import defaultImg from '../../resources/images/portrait.jpg';

const user = {
  avatar: defaultImg,
  city: 'Ho Chi Minh City',
  country: 'Viet Nam',
  jobTitle: 'Author',
  name: 'Nguyen Quang Minh',
  email: "quangminh@gmail.com",
  timezone: 'GTM-7'
};

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '24px',
    marginBottom: '24px'
  },
  avatar: {
    height: 100,
    width: 100
  },
  chip: {
    margin: '5px',
  }
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();


  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <div>
            <Avatar
                className={classes.avatar}
                src={user.avatar}
            />
          </div>
          <div display="flex" justifyContent="flex-start">
            <Typography
                color="textPrimary"
                gutterBottom
                variant="h3"
            >
              {user.name}
            </Typography>
            <Typography
                color="textPrimary"
                gutterBottom
                variant="body1"
            >
              {user.email}
            </Typography>
            <Typography
                color="textSecondary"
                variant="body1"
            >
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
            >
              {`${moment().format('hh:mm A')} ${user.timezone}`}
            </Typography>
            <Typography >
              <Chip className={classes.chip} icon={<FaceIcon/>} label={"Excelent Author"} color="primary" variant="outlined"/>
              <Chip className={classes.chip} label="#Basic_Reader"/>
              <Chip className={classes.chip} avatar={<Avatar>M</Avatar>} label="Best_author" variant="outlined"/>
            </Typography>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
