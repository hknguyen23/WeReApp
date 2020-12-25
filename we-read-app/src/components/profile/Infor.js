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
import defaultImg from '../../resources/images/defaultAvatar.png';

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
  root: {},
  avatar: {
    height: 100,
    width: 100
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
          <div justifyContent="flex-start">
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
            <Typography>
              <Chip icon={<FaceIcon/>} label={"Excelent Author"} color="primary" variant="outlined"/>
              <Chip label="#Basic_Reader"/>
              <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} variant="outlined"/>
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
