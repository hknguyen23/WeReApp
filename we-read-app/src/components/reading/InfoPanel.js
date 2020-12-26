import React, { useState } from 'react';
import {
  Container,
  makeStyles,
  Typography,
  Divider,
  Button,
  TextField
} from '@material-ui/core';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import defaultImg from '../../resources/images/defaultAvatar.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline-block',
    width: '100%',
    marginTop: '15px',
    marginBottom: '15px'
  },
  rightContainer: {
    float: "right",
    width: '74%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  leftContainer: {
    float: "left",
    width: '26%',
    textAlign: 'left',
  },
  divider: {
    backgroundColor: 'black'
  }
}));

const fiction = {
  id: 1,
  title: "Truyện đời tôi",
  status: 1,
  views: 12345,
  followers: 350,
  description: "Donec eu tellus ut dolor viverra porta. Aliquam sit amet velit vel odio viverra euismod fringilla eu tellus. Aenean dapibus maximus aliquet. Donec bibendum blandit enim et facilisis.",
  rating: 3,
  authors: [{
    id: 1,
    name: "John Nguyen"
  }],
  comments: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
}

const textSize = '18px';

const InfoPanel = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <div className={classes.container}>
          <div className={classes.leftContainer}>
            <img height={230} width={200} src={defaultImg} alt="Default fiction" 
              style={{ border: "1px solid black" }}
            />    
          </div>

          <div className={classes.rightContainer}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h4" style={{ fontSize: '34px', marginRight: '24px' }}>{fiction.title}</Typography>
              <Button style={{ minWidth: '45px', height: '45px', color: 'white',
                backgroundColor: '#27ae60', borderRadius: '8px', marginRight: '10px' }}
              >
                <QuestionAnswerIcon style={{ width: '30px', height: '30px'}}></QuestionAnswerIcon>
              </Button>
              <Button style={{ minWidth: '45px', height: '45px', color: 'white',
                backgroundColor: '#27ae60', borderRadius: '8px' }}
              >
                <BookmarkIcon style={{ width: '30px', height: '30px'}}></BookmarkIcon>
              </Button>
            </div>
            <Typography style={{ fontSize: textSize, display: 'flex', color: 'gray' }}>
              Bởi&nbsp;
              {fiction.authors.map(author => 
                <Typography component={'span'} key={author.id} style={{ fontSize: textSize, color: '#0b79d0' }}>
                  {author.name}&nbsp;
                </Typography>
              )}
            </Typography>
            <br></br>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography style={{ fontSize: textSize,  width: '37%' }}>
                Trạng thái:
                {fiction.status === 1 ? " Đang cập nhật" : fiction.status === 2 ? " Hoàn chỉnh" : " Bị hủy"}
              </Typography>
              <Typography style={{ fontSize: textSize, width: '25%' }}>
                Lượt xem: {fiction.views}
              </Typography>
              <Typography style={{ fontSize: textSize, width: '20%' }}>
                Theo dõi: {fiction.followers}
              </Typography>
              <Typography style={{ fontSize: textSize, width: '18%' }}>
                Bình luận: {fiction.comments.length}
              </Typography>
            </div>
            <br></br>
            <Typography style={{ fontSize: textSize, wordBreak: 'break-all', textAlign: 'justify' }}>
              {fiction.description}
            </Typography>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default InfoPanel;