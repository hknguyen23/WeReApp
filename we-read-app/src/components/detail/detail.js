import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useParams, Link } from "react-router-dom";
import {
  Container,
  makeStyles,
  Typography,
  Divider,
  Tooltip,
  Button,
  Card,
  TextField,
  IconButton
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarIcon from '@material-ui/icons/Star';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import defaultImg from '../../resources/images/defaultAvatar.png';
import { category, tags, novels, topMonth, imgURL, detail, detailTest } from '../../resources/data/data'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline-block',
    width: '100%',
    marginTop: '24px'
  },
  rightContainer: {
    float: "right",
    width: '69%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  leftContainer: {
    float: "left",
    width: '31%',
    textAlign: 'center',
  },
  viewsAndFollowers: {
    display: 'flex',
    flexDirection: 'row'
  },
  divider: {
    backgroundColor: 'black'
  },
  button: {
    padding: 0,
    borderRadius: '8px',
    lineHeight: 'normal',
    fontWeight: 'normal',
    textTransform: 'none',
    color: 'white',
    backgroundColor: '#27ae60',
    "&:hover": {
      backgroundColor: '#0d5e36',
    }
  },
  readNowButton: {
    padding: 0,
    borderRadius: '8px',
    lineHeight: 'normal',
    fontWeight: 'normal',
    textTransform: 'none',
  },
  pagination: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& .Mui-selected': {
      backgroundColor: '#0057B2',
      color: 'white',
    }
  }
}));

const offset = 5;
const fontSize = {
  title: '44px',
  label: '24px',
  button: '20px',
  header: '30px'
}

function Detail() {
  const classes = useStyles();
  const history = useHistory();
  const ID = +useParams().fictionID;
  const [commentPage, setCommentPage] = useState(1);
  const [fiction, setFiction] = useState(detail);
  const [rating, setRating] = useState(0);

  useEffect(() => {

    if (ID === 1000) {
      setFiction(detailTest);
    }
    else {
      window.scrollTo(0, 0);
      const fictionCopy = JSON.parse(JSON.stringify(fiction));
      if (ID <= 25) {
        fictionCopy.id = novels[ID - 1].id;
        fictionCopy.title = novels[ID - 1].name;
        fictionCopy.imgURL = imgURL[novels[ID - 1].id % imgURL.length];
        fictionCopy.rating = novels[ID - 1].rating;
        fictionCopy.views = novels[ID - 1].view;
      } else {
        fictionCopy.id = topMonth[ID - 25 - 1].id;
        fictionCopy.title = topMonth[ID - 25 - 1].name;
        fictionCopy.imgURL = topMonth[ID - 25 - 1].img;
        fictionCopy.rating = topMonth[ID - 25 - 1].rating;
        fictionCopy.views = topMonth[ID - 25 - 1].view;

      }
      setFiction(fictionCopy);
      setRating(fictionCopy.rating);
    }
  }, []);

  const calculateDaysAdded = (fromDate, toDate) => {
    // To calculate the time difference of two dates 
    var differenceInTime = toDate.getTime() - fromDate.getTime();

    // To calculate the no. of days between two dates 
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.round(differenceInDays);
  }

  const createChaptersList = (chapters) => {
    let list = [];
    for (let i = chapters.length - 1; i >= 0; i--) {
      list.push(
        <Card key={i} style={{
          height: '56px', backgroundColor: '#e5e5e5', display: 'flex',
          alignItems: 'center', marginBottom: '2px', paddingLeft: '15px', paddingRight: '10px'
        }}
        >
          <Typography style={{ fontSize: '16px', width: '30%', color: '#0276af', textDecoration: 'underline' }}>
            <Link key={chapters[i].ordinal} to={"/Reading/" + fiction.id + "/" + chapters[i].ordinal}>
              Chương {chapters[i].ordinal}
            </Link>
          </Typography>
          <Typography style={{ fontSize: '16px', width: '40%', textAlign: 'center' }}>
            Cập nhật vào khoảng {calculateDaysAdded(new Date(chapters[i].dateAdded), new Date())} ngày
          </Typography>
          <Typography style={{ fontSize: '16px', width: '30%', textAlign: 'right' }}>
            {chapters[i].views} lượt xem
          </Typography>
        </Card>
      );
    }
    return list;
  }

  const createCommentsList = (comments) => {
    let list = [];
    let start = offset * (commentPage - 1);
    let end = offset * commentPage > comments.length ? comments.length : offset * commentPage;
    for (let i = start; i < end; i++) {
      list.push(
        <Card key={i} style={{ backgroundColor: '#e5e5e5', padding: '10px', marginBottom: '3px' }}>
          <div style={{ display: 'flex' }}>
            <AccountCircle style={{ width: '5%', height: '40px' }}></AccountCircle>
            <div style={{ width: '90%' }}>
              <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>
                {comments[i].name}
              </Typography>
              <Typography>
                Khoảng {calculateDaysAdded(new Date(comments[i].dateAdded), new Date())} ngày trước
              </Typography>
            </div>
            <div style={{ flexDirection: 'column', width: '5%', textAlign: 'center' }}>
              <Tooltip title="Không thích" aria-label="Không thích">
                <IconButton size='small'>
                  <ThumbDownIcon style={{ color: '#979797', width: '40px', height: '40px' }} />
                </IconButton>
              </Tooltip>
              <Typography>{comments[i].dislikeCount}</Typography>
            </div>
            <div style={{ flexDirection: 'column', width: '5%', textAlign: 'center' }}>
              <Tooltip title="Thích" aria-label="Thích">
                <IconButton size='small'>
                  <ThumbUpIcon style={{ color: '#0e4da4', width: '40px', height: '40px' }} />
                </IconButton>
              </Tooltip>
              <Typography>{comments[i].likeCount}</Typography>
            </div>
          </div>
          <div>
            <Typography style={{ fontSize: '16px', wordBreak: 'break-all', textAlign: 'justify' }}>
              {comments[i].text}
            </Typography>
          </div>
        </Card>
      );
    }
    return list;
  }

  const handleMoveToReadingPage = () => {
    history.push(`/Reading/${ID}/1`);
  }

  const handleSearchGenre = (genreID) => {
    history.push(`/Searching?genre=${genreID}`);
  }
  const handleSearchTag = (tagID) => {
    history.push(`/Searching?tag=${tagID}`);
  }

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <div className={classes.container}>
          <div className={classes.leftContainer}>
            <img height={425} width={350} src={fiction.imgURL === "none" ? defaultImg : fiction.imgURL} alt="Default fiction"
              style={{ border: "1px solid black" }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <Rating name="size-large" value={rating} precision={0.5} size="large"
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setRating(newValue);
                    }
                    else {
                      setRating(0);
                    }
                  }} />
              </div>
              <Typography style={{ fontSize: fontSize.label, marginLeft: '10px' }}>
                {rating + "/5"}
              </Typography>
            </div>
            <Typography style={{ textAlign: 'center', fontSize: fontSize.label }}>
              với {fiction.reviews.length} lượt đánh giá
            </Typography>
          </div>

          <div className={classes.rightContainer}>
            <Typography style={{ fontSize: fontSize.title }}>{fiction.title}</Typography>
            <Divider className={classes.divider}></Divider>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography style={{ fontSize: fontSize.label, display: 'flex' }}>
                Tác giả:&nbsp;
              </Typography>
              {fiction.authors.map(author =>
                <Link key={author.id} to="/Profile"
                  style={{ textDecoration: 'none', fontSize: fontSize.label, color: '#0b79d0' }}
                >
                  {author.name}&nbsp;
                </Link>
              )}
            </div>
            <Divider className={classes.divider} style={{ marginBottom: '5px' }}></Divider>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography style={{ fontSize: fontSize.label, marginRight: '3px' }}>
                Thể loại:
              </Typography>
              {fiction.genres.map(genre => {
                const cat = category.filter(cat => cat.id === genre);
                if (cat.length !== 0) {
                  return (
                    <Button key={cat[0].id} className={classes.button}
                      onClick={() => handleSearchGenre(genre.id)}
                      style={{
                        height: '36px', width: '150px', color: 'white',
                        backgroundColor: '#2196f3', marginRight: '10px', fontSize: fontSize.button
                      }}
                    >
                      {cat[0].name}
                    </Button>)
                }
              })}
            </div>
            <Divider className={classes.divider} style={{ marginTop: '5px', marginBottom: '5px' }}></Divider>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography style={{ fontSize: fontSize.label, marginRight: '23px' }}>
                Tag(s):
              </Typography>
              {fiction.tags.map(tag => {
                const tempTag = tags.filter(i => i.id === tag);
                if (tempTag.length !== 0) {
                  return (
                    <Button key={tempTag[0].id} className={classes.button} style={{
                      height: '36px', width: '150px', color: 'white',
                      backgroundColor: '#2196f3', marginRight: '10px', fontSize: fontSize.button
                    }}
                      onClick={() => handleSearchTag(tempTag[0].id)}
                    >
                      {tempTag[0].name}
                    </Button>)
                }
              })}
            </div>
            <Divider className={classes.divider} style={{ marginTop: '5px' }}></Divider>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography style={{ fontSize: fontSize.label, display: 'flex' }}>
                Độ tuổi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
              {fiction.age.map(age =>
                <Typography component={'span'} key={age.id} style={{ fontSize: fontSize.label }}>
                  {age.name}&nbsp;
                  </Typography>
              )}
            </div>
            <Divider className={classes.divider}></Divider>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography style={{ fontSize: fontSize.label, display: 'flex' }}>
                Ngôn ngữ:&nbsp;
              </Typography>
              {fiction.languages.map(language =>
                <Typography component={'span'} key={language.id} style={{ fontSize: fontSize.label }}>
                  {language.name}&nbsp;
                  </Typography>
              )}
            </div>
            <Divider className={classes.divider}></Divider>
            <Typography style={{ fontSize: fontSize.label }}>
              Trạng thái:
              {fiction.status === 1 ? " Đang cập nhật" : fiction.status === 2 ? " Hoàn chỉnh" : " Bị hủy"}
            </Typography>
            <Divider className={classes.divider}></Divider>
            <div className={classes.viewsAndFollowers}>
              <Typography style={{ fontSize: fontSize.label, width: '50%' }}>
                Lượt xem:<b>&nbsp;{fiction.views}</b>
              </Typography>
              <Typography style={{ fontSize: fontSize.label, width: '50%' }}>
                Theo dõi:&nbsp;<b>{fiction.followers}</b>
              </Typography>
            </div>
            <Divider className={classes.divider} style={{ marginBottom: '10px' }}></Divider>
            <div style={{ textAlign: 'center' }}>
              <Button variant="contained" color="secondary" className={classes.readNowButton}
                onClick={handleMoveToReadingPage}
                style={{
                  width: '300px', height: '60px', fontSize: '24px', fontWeight: 'bold', marginRight: '24px'
                }}
              >
                Đọc ngay
              </Button>
              <Tooltip title="Bình luận" aria-label="Bình luận">
                <Button className={classes.button} style={{
                  width: '60px', height: '60px', marginRight: '24px'
                }}
                  href="#commentSection"
                >
                  <QuestionAnswerIcon style={{ width: '48px', height: '48px' }} />
                </Button>
              </Tooltip>
              <Tooltip title="Lưu vào yêu thích" aria-label="Lưu vào yêu thích">
                <Button className={classes.button} style={{
                  width: '60px', height: '60px', marginRight: '24px'
                }}
                >
                  <BookmarkIcon style={{ width: '48px', height: '48px' }} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className={classes.container} style={{ textAlign: 'left' }}>
          <Typography style={{ fontSize: fontSize.header }}>Nội dung</Typography>
          <Divider className={classes.divider}></Divider>
          {ID !== 1000 ?
            <Typography style={{ fontSize: fontSize.label, whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '18px' }}>
              {fiction.description}
            </Typography>
            : <div style={{ fontSize: fontSize.label, textAlign: 'justify', fontSize: '18px' }}
              dangerouslySetInnerHTML={{ __html: fiction.description }} />
          }
        </div>
        <div className={classes.container} style={{ textAlign: 'left' }}>
          <Typography style={{ fontSize: fontSize.header }}>
            Danh sách các chương ({fiction.chapters.length})
          </Typography>
          <Divider className={classes.divider} style={{ marginTop: '-3px', marginBottom: '5px' }}></Divider>
          <div style={{ overflowY: 'scroll', maxHeight: '280px' }}>
            {createChaptersList(fiction.chapters)}
          </div>
        </div>
        <div id="commentSection" className={classes.container} style={{ textAlign: 'left' }}>
          <Typography style={{ fontSize: fontSize.header }}>
            Bình luận ({fiction.comments.length})
          </Typography>
          <Divider className={classes.divider} style={{ marginTop: '-3px', marginBottom: '5px' }}></Divider>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
            <TextField placeholder="  Nhập bình luận..." fullWidth multiline rows={5} rowsMax={5}
              style={{ backgroundColor: '#bbbbbb', marginBottom: '10px' }}
              inputProps={{ style: { fontSize: '16px' } }} // font size of input text
            />
            <Button className={classes.button} variant="contained" color="secondary"
              style={{ width: '150px', height: '40px', textTransform: 'none', borderRadius: '8px', fontSize: fontSize.button }}>
              <QuestionAnswerIcon style={{ width: '30px', height: '30px' }} />
              &nbsp;Bình luận
            </Button>
          </div>
          <div>
            {createCommentsList(fiction.comments)}
          </div>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination className={classes.pagination} size="large" color="primary" shape="rounded"
              count={Math.ceil(fiction.comments.length / offset)} /*showFirstButton showLastButton*/
              onChange={(event, value) => setCommentPage(value)} />
          </div>
          <br></br>
        </div>
      </Container>
    </React.Fragment >
  );
}

export default Detail;
