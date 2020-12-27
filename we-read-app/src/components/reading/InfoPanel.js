import React from 'react';
import { useHistory } from 'react-router-dom'

import {
  Container,
  makeStyles,
  Typography,
  Link,
  Button
} from '@material-ui/core';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import defaultImg from '../../resources/images/defaultAvatar.png';

const useStyles = makeStyles((theme) => ({
  container: (theme) => ({
    display: 'inline-block',
    width: '100%',
    marginTop: '15px',
    marginBottom: '15px',
    backgroundColor: theme.body
  }),
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
  },
  image: (theme) => ({
    border: theme.fieldBorder === "0px" ? '1px solid' : theme.fieldBorder,
  }),
  title: (theme) => ({
    fontSize: '34px',
    marginRight: '24px',
    color: theme.text
  }),
  button: {
    minWidth: '45px',
    height: '45px',
    color: 'white',
    backgroundColor: '#27ae60',
    borderRadius: '8px',
    marginRight: '10px'
  },
  author: (theme) => ({
    fontSize: textSize,
    color: theme.link,
  }),
  infoBox: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    color: theme.text
  }),
  description: (theme) => ({
    fontSize: textSize,
    wordBreak: 'break-all',
    textAlign: 'justify',
    color: theme.text
  })

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

const InfoPanel = ({ theme }) => {
  const classes = useStyles(theme);
  const histoty = useHistory();

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg" className={classes.container} maxWidth={false}>
        <div className={classes.leftContainer}>
          <img height={230} width={200} src={defaultImg} alt="Default fiction"
            className={classes.image}
          />
        </div>

        <div className={classes.rightContainer}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" className={classes.title}>{fiction.title}</Typography>
            <Button className={classes.button} onClick={() => { histoty.push("/Detail/1"); }}>
              <QuestionAnswerIcon style={{ width: '30px', height: '30px' }}></QuestionAnswerIcon>
            </Button>
            <Button className={classes.button} onClick={() => { histoty.push("/Detail/1"); }}>
              <BookmarkIcon style={{ width: '30px', height: '30px' }}></BookmarkIcon>
            </Button>
          </div>
          <Typography style={{ fontSize: textSize, display: 'flex', color: 'gray' }}>
            Bởi&nbsp;
              {fiction.authors.map(author =>
            <Link key={author.id} className={classes.author} onClick={() => { histoty.push("/Profile"); }}>
              {author.name}&nbsp;
              </Link>
          )}
          </Typography>
          <br></br>
          <div className={classes.infoBox}>
            <Typography style={{ fontSize: textSize, width: '37%' }}>
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
          <Typography className={classes.description}>
            {fiction.description}
          </Typography>
        </div>
      </Container>
    </React.Fragment >
  );
}

export default InfoPanel;