import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
  Container,
  makeStyles,
  Typography,
  Link,
  Divider,
  Tooltip,
  Button
} from '@material-ui/core';
import { novels, topMonth, imgURL } from '../../resources/data/data'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import defaultImg from '../../resources/images/defaultAvatar.png';
import { detail, detailTest } from '../../resources/data/data'

const useStyles = makeStyles((theme) => ({
  container: (theme) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: '15px',
    marginBottom: '15px',
    backgroundColor: theme.body
  }),
  rightContainer: {
    float: "right",
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    textAlign: 'left',
  },
  leftContainer: {
    float: "left",
    textAlign: 'left',
    marginRight: '25px',
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
    marginRight: '10px',
    "&:hover": {
      backgroundColor: '#0d5e36',
    }
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



const textSize = '18px';

const InfoPanel = ({ theme, ID }) => {
  const classes = useStyles(theme);
  const histoty = useHistory();
  const [fiction, setFiction] = useState(detail);

  useEffect(() => {
    if (ID === 1000) {
      setFiction(detailTest);
    }
    else {
      const fictionCopy = JSON.parse(JSON.stringify(fiction));
      if (ID <= 25) {
        fictionCopy.title = novels[ID - 1].name;
        fictionCopy.imgURL = imgURL[novels[ID - 1].id % imgURL.length];
      } else {
        fictionCopy.title = topMonth[ID - 25 - 1].name;
        fictionCopy.imgURL = topMonth[ID - 25 - 1].img;
      }
      setFiction(fictionCopy);
    }
  }, [setFiction]);

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg" className={classes.container} maxWidth={false}>
        <div className={classes.leftContainer}>
          <img height={230} width={200} src={fiction.imgURL === "none" ? defaultImg : fiction.imgURL} alt="Default fiction"
            className={classes.image}
          />
        </div>

        <div className={classes.rightContainer}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" className={classes.title}>{fiction.title}</Typography>
            <Tooltip title="Bình luận" aria-label="Bình luận">
              <Button className={classes.button} onClick={() => { histoty.push(`/Detail/${ID}`); }}>
                <QuestionAnswerIcon style={{ width: '30px', height: '30px' }}></QuestionAnswerIcon>
              </Button>
            </Tooltip>
            <Tooltip title="Lưu vào yêu thích" aria-label="Lưu vào yêu thích">
              <Button className={classes.button} onClick={() => { histoty.push(`/Detail/${ID}`); }}>
                <BookmarkIcon style={{ width: '30px', height: '30px' }}></BookmarkIcon>
              </Button>
            </Tooltip>
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
          <Divider></Divider>
          <Typography className={classes.description} style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '18px' }}>
            {fiction.description}
          </Typography>
        </div>
      </Container>
    </React.Fragment >
  );
}

export default InfoPanel;