import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import {
  Container,
  makeStyles,
  Typography,
  Divider,
  Tooltip,
  Button,
  Card,
  TextField
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarIcon from '@material-ui/icons/Star';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import defaultImg from '../../resources/images/defaultAvatar.png';
import { novels, topMonth, imgURL } from '../../resources/data/data'


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline-block',
    width: '100%',
    marginTop: '24px'
  },
  rightContainer: {
    float: "right",
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  leftContainer: {
    float: "left",
    width: '35%',
    textAlign: 'left',
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
  }
}));

const offset = 5;

function Detail() {
  const classes = useStyles();
  const history = useHistory();
  const ID = +useParams().fictionID;
  const [commentPage, setCommentPage] = useState(1);
  const [fiction, setFiction] = useState({
    id: 1,
    title: "Truyện đời tôi",
    imgURL: "none",
    status: 1,
    views: 12345,
    followers: 350,
    description: "Donec eu tellus ut dolor viverra porta. Aliquam sit amet velit vel odio viverra euismod fringilla eu tellus. Aenean dapibus maximus aliquet. Donec bibendum blandit enim et facilisis.",
    rating: 3,
    authors: [{
      id: 1,
      name: "John Nguyen"
    }],
    genres: [{
      id: 1,
      name: "Kinh dị"
    },
    {
      id: 2,
      name: "Tâm lý"
    },
    {
      id: 3,
      name: "Hành động"
    },
    {
      id: 4,
      name: "Bí ẩn"
    }],
    tags: [{
      id: 1,
      name: "Nam chính"
    },
    {
      id: 2,
      name: "Ma thuật"
    },
    {
      id: 3,
      name: "Chiến tranh"
    }],
    languages: [{
      id: 1,
      name: "Tiếng Việt"
    }],
    reviews: [{
      id: 1,
      userID: 2,
    },
    {
      id: 2,
      userID: 3,
    },
    {
      id: 3,
      userID: 4,
    },
    {
      id: 4,
      userID: 5,
    }],
    chapters: [{
      id: 1,
      ordinal: 1,
      views: 4000,
      dateAdded: "2020/12/15",
      lastModified: "2020/12/15"
    },
    {
      id: 2,
      ordinal: 2,
      views: 3500,
      dateAdded: "2020/12/16",
      lastModified: "2020/12/16"
    },
    {
      id: 3,
      ordinal: 3,
      views: 2500,
      dateAdded: "2020/12/20",
      lastModified: "2020/12/20"
    },
    {
      id: 4,
      ordinal: 4,
      views: 2000,
      dateAdded: "2020/12/23",
      lastModified: "2020/12/23"
    },
    {
      id: 5,
      ordinal: 5,
      views: 345,
      dateAdded: "2020/12/24",
      lastModified: "2020/12/24"
    }],
    comments: [{
      id: 1,
      userID: 2,
      name: "Jay Minh",
      dateAdded: "2020/12/20",
      likeCount: 10,
      dislikeCount: 0,
      text: "Text labels need to be distinct from other elements. If the text label isn’t capitalized, it should use a different color, style, or layout from other text."
    },
    {
      id: 2,
      userID: 3,
      name: "Phan Minh",
      dateAdded: "2020/12/19",
      likeCount: 1,
      dislikeCount: 1,
      text: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all."
    },
    {
      id: 3,
      userID: 4,
      name: "Coder",
      dateAdded: "2020/12/18",
      likeCount: 0,
      dislikeCount: 0,
      text: "He picked up the burnt end of the branch and made a mark on the stone. Day 52 if the marks on the stone were accurate. He couldn't be sure. Day and nights had begun to blend together creating confusion, but he knew it was a long time. Much too long."
    },
    {
      id: 4,
      userID: 5,
      name: "Nguyễn Văn Cừ Khôi",
      dateAdded: "2020/12/10",
      likeCount: 30,
      dislikeCount: 2,
      text: "Stranded. Yes, she was now the first person ever to land on Venus, but that was of little consequence. Her name would be read by millions in school as the first to land here, but that celebrity would never actually be seen by her. She looked at the control panel and knew there was nothing that would ever get it back into working order. She was the first and it was not clear this would also be her last."
    },
    {
      id: 5,
      userID: 6,
      name: "Ngô Đình Đám",
      dateAdded: "2020/12/09",
      likeCount: 8,
      dislikeCount: 0,
      text: "She didn't like the food. She never did. She made the usual complaints and started the tantrum he knew was coming. But this time was different. Instead of trying to placate her and her unreasonable demands, he just stared at her and watched her meltdown without saying a word."
    },
    {
      id: 6,
      userID: 7,
      name: "Lý Mạc Sầu Lẻ Bóng",
      dateAdded: "2020/12/03",
      likeCount: 20,
      dislikeCount: 13,
      text: "He had three simple rules by which he lived. The first was to never eat blue food. There was nothing in nature that was edible that was blue. People often asked about blueberries, but everyone knows those are actually purple. He understood it was one of the stranger rules to live by, but it had served him well thus far in the 50+ years of his life."
    },
    {
      id: 7,
      userID: 8,
      name: "Hacker",
      dateAdded: "2020/11/30",
      likeCount: 2,
      dislikeCount: 10,
      text: "He wondered if he should disclose the truth to his friends. It would be a risky move. Yes, the truth would make things a lot easier if they all stayed on the same page, but the truth might fracture the group leaving everything in even more of a mess than it was not telling the truth. It was time to decide which way to go."
    }]
  })

  useEffect(() => {
    window.scrollTo(0, 0);
    const fictionCopy = JSON.parse(JSON.stringify(fiction));
    if (ID <= 25) {
      fictionCopy.id = novels[ID - 1].id;
      fictionCopy.title = novels[ID - 1].name;
      fictionCopy.imgURL = imgURL[novels[ID - 1].id % imgURL.length];
    } else {
      fictionCopy.id = topMonth[ID - 25 - 1].id;
      fictionCopy.title = topMonth[ID - 25 - 1].name;
      fictionCopy.imgURL = topMonth[ID - 25 - 1].img;
    }
    setFiction(fictionCopy);
  }, []);

  const drawStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} style={{ width: '48px', height: '48px', color: '#ffb400' }} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<StarIcon key={rating + i} style={{ width: '48px', height: '48px', color: 'gray' }} />);
    }
    return stars;
  }

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
              <ThumbDownIcon style={{ color: '#979797', width: '40px', height: '40px' }} />
              <Typography>{comments[i].dislikeCount}</Typography>
            </div>
            <div style={{ flexDirection: 'column', width: '5%', textAlign: 'center' }}>
              <ThumbUpIcon style={{ color: '#0e4da4', width: '40px', height: '40px' }} />
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
    history.push(`/Reading/${ID}`);
  }

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <div className={classes.container}>
          <div className={classes.leftContainer}>
            <img height={475} width={400} src={fiction.imgURL === "none" ? defaultImg : fiction.imgURL} alt="Default fiction"
              style={{ border: "1px solid black" }}
            />
            <div style={{ width: '402px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                {drawStars(fiction.rating)}
              </div>
              <Typography style={{ fontSize: '30px', marginLeft: '10px' }}>
                {fiction.rating + "/5"}
              </Typography>
            </div>
            <Typography style={{ textAlign: 'center', width: '402px', fontSize: '30px' }}>
              với {fiction.reviews.length} lượt đánh giá
            </Typography>
          </div>

          <div className={classes.rightContainer}>
            <Typography style={{ fontSize: '54px' }}>{fiction.title}</Typography>
            <Divider className={classes.divider}></Divider>
            <Typography style={{ fontSize: '30px', display: 'flex' }}>
              Tác giả:&nbsp;
              {fiction.authors.map(author =>
              <Link key={author.id} to="/Profile"
                style={{ textDecoration: 'none', fontSize: '30px', color: '#0b79d0' }}
              >
                {author.name}&nbsp;
              </Link>
            )}
            </Typography>
            <Divider className={classes.divider}></Divider>
            <Typography style={{ fontSize: '30px' }}>
              Thể loại:&nbsp;
              {fiction.genres.map(genre =>
              <Button key={genre.id} className={classes.button} style={{
                height: '36px', width: '150px', color: 'white',
                backgroundColor: '#2196f3', marginRight: '10px', fontSize: '24px'
              }}
              >
                {genre.name}
              </Button>
            )}
            </Typography>
            <Divider className={classes.divider} style={{ marginTop: '5px' }}></Divider>
            <Typography style={{ fontSize: '30px' }}>
              Tag(s):&nbsp;
              {fiction.tags.map(tag =>
              <Button key={tag.id} className={classes.button} style={{
                height: '36px', width: '150px', color: 'white',
                backgroundColor: '#2196f3', marginRight: '10px', fontSize: '24px'
              }}
              >
                {tag.name}
              </Button>
            )}
            </Typography>
            <Divider className={classes.divider} style={{ marginTop: '5px' }}></Divider>
            <Typography style={{ fontSize: '30px', display: 'flex' }}>
              Ngôn ngữ:&nbsp;
              {fiction.languages.map(language =>
              <Typography component={'span'} key={language.id} style={{ fontSize: '30px' }}>
                {language.name}&nbsp;
                </Typography>
            )}
            </Typography>
            <Divider className={classes.divider}></Divider>
            <Typography style={{ fontSize: '30px' }}>
              Trạng thái:
              {fiction.status === 1 ? " Đang cập nhật" : fiction.status === 2 ? " Hoàn chỉnh" : " Bị hủy"}
            </Typography>
            <Divider className={classes.divider}></Divider>
            <div className={classes.viewsAndFollowers}>
              <Typography style={{ fontSize: '30px', width: '50%' }}>
                Lượt xem:&nbsp;{fiction.views}
              </Typography>
              <Typography style={{ fontSize: '30px', width: '50%' }}>
                Theo dõi:&nbsp;{fiction.followers}
              </Typography>
            </div>
            <Divider className={classes.divider} style={{ marginBottom: '10px' }}></Divider>
            <div style={{ textAlign: 'center' }}>
              <Button variant="contained"  color="secondary" className={classes.readNowButton} style={{
                width: '340px', height: '64px', fontSize: '30px', fontWeight: 'bold', marginRight: '24px'
              }}
                onClick={handleMoveToReadingPage}
              >
                Đọc ngay
              </Button>
              <Tooltip title="Bình luận" aria-label="Bình luận">
                <Button className={classes.button} style={{
                  width: '64px', height: '64px', marginRight: '24px'
                }}
                  href="#commentSection"
                >
                  <QuestionAnswerIcon style={{ width: '48px', height: '48px' }} />
                </Button>
              </Tooltip>
              <Tooltip title="Lưu vào yêu thích" aria-label="Lưu vào yêu thích">
                <Button className={classes.button} style={{
                  width: '64px', height: '64px', marginRight: '24px'
                }}
                >
                  <BookmarkIcon style={{ width: '48px', height: '48px' }} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className={classes.container} style={{ textAlign: 'left' }}>
          <Typography style={{ fontSize: '36px' }}>Nội dung</Typography>
          <Divider className={classes.divider}></Divider>
          <Typography style={{ fontSize: '30px', wordBreak: 'break-all', textAlign: 'justify' }}>
            {fiction.description}
          </Typography>
        </div>
        <div className={classes.container} style={{ textAlign: 'left' }}>
          <Typography style={{ fontSize: '36px' }}>
            Danh sách các chương ({fiction.chapters.length})
          </Typography>
          <Divider className={classes.divider} style={{ marginTop: '-3px', marginBottom: '5px' }}></Divider>
          <div style={{ overflowY: 'scroll', maxHeight: '280px' }}>
            {createChaptersList(fiction.chapters)}
          </div>
        </div>
        <div id="commentSection" className={classes.container} style={{ textAlign: 'left' }}>
          <Typography style={{ fontSize: '36px' }}>
            Bình luận ({fiction.comments.length})
          </Typography>
          <Divider className={classes.divider} style={{ marginTop: '-3px', marginBottom: '5px' }}></Divider>
          <TextField placeholder="  Nhập bình luận..." fullWidth multiline rows={5} rowsMax={5}
            style={{ backgroundColor: '#bbbbbb', marginBottom: '20px' }}
            inputProps={{ style: { fontSize: '16px' } }} // font size of input text
          />
          <div>
            {createCommentsList(fiction.comments)}
          </div>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination size="large" color="primary" count={Math.ceil(fiction.comments.length / offset)}
              variant="outlined" shape="rounded" showFirstButton showLastButton
              onChange={(event, value) => setCommentPage(value)} />
          </div>
          <br></br>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Detail;
