import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  card: {
    // height: '100%',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '25%',
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
    flexGrow: 0,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    marginBottom: '-20px'
  },
  fab: {
    width: '35%',
    height: '35%',
    fontSize: '50px',
  },
  tagContent: {
    marginBottom: '10px',
    textAlign: 'left',
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#C4C4C4'
  },
  container: {
    display: 'inline-block',
    width: '100%',
  },
  floatRight: {
    float: "right",
    textAlign: 'right',
    width: '70%',
    marginRight: '5px'
  },
  floatLeft: {
    float: "left",
    width: '25%'
  },
  paperLikeShadow: {
    boxShadow: '0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    left: 5,
    top: 5,
    padding: '0 4px',
  },
}))(Badge);

export default function Home() {
  const classes = useStyles();
  const category = [
    {
      id: 1,
      name: "Bí ẩn",
    },
    {
      id: 2,
      name: "Bi kịch",
    },
    {
      id: 3,
      name: "Cung đấu",
    },
    {
      id: 4,
      name: "Giật gân",
    },
    {
      id: 5,
      name: "Hài hước",
    },
    {
      id: 6,
      name: "Kiếm hiệp",
    },
    {
      id: 7,
      name: "Lịch sử",
    },
    {
      id: 8,
      name: "Ngôn tình",
    },
    {
      id: 9,
      name: "Thám hiểm",
    },
    {
      id: 10,
      name: "Siêu nhiên",
    }
  ];
  const novels = [
    {
      id: 1,
      name: "Đêm hào nhoáng",
      catId: 1,
      updatedAt: 2, // đại diện cho ngày được sắp xếp, số càng lớn thì ngày càng gần
      rating: 3,
    }, {
      id: 2,
      name: "Quan tài cho Dimitrios",
      catId: 1,
      updatedAt: 1,
      rating: 1,
    }, {
      id: 3,
      name: "Giấc ngủ lớn",
      catId: 1,
      updatedAt: 5,
      rating: 4,
    },
    {
      id: 4,
      name: "Bí ẩn mãi là bí ẩn 1",
      catId: 1,
      updatedAt: 5,
      rating: 3,
    }
    ,
    {
      id: 5,
      name: "Bí ẩn mãi là bí ẩn 2",
      catId: 1,
      updatedAt: 4,
      rating: 3,
    }
    , {
      id: 6,
      name: "Bí ẩn mãi là bí ẩn 3",
      catId: 1,
      updatedAt: 3,
      rating: 2,
    }
    ,
    {
      id: 7,
      name: "Bí ẩn mãi là bí ẩn 4",
      catId: 1,
      updatedAt: 7,
      rating: 3.5,
    }
    ,
    {
      id: 8,
      name: "Bí ẩn mãi là bí ẩn 5",
      catId: 1,
      updatedAt: 1,
      rating: 3.5,
    }
    ,
    {
      id: 9,
      name: "Bí ẩn làng ma sói",
      catId: 1,
      updatedAt: 6,
      rating: 3.5,
    },
    {
      id: 10,
      name: "Quân hậu đen",
      catId: 1,
      updatedAt: 9,
      rating: 3.5,
    }
    ,
    {
      id: 11,
      name: "Ngôi làng bí ẩn",
      catId: 1,
      updatedAt: 10,
      rating: 3.5,
    }
    ,
    {
      id: 12,
      name: "Con tàu huyển bí",
      catId: 1,
      updatedAt: 7,
      rating: 3.5,
    },
    {
      id: 13,
      name: "Như Ý truyện",
      catId: 3,
      updatedAt: 2,
      rating: 4.0,
    },
    {
      id: 14,
      name: "Chân Hoàn truyện",
      catId: 3,
      updatedAt: 1,
      rating: 4.0,
    },
    {
      id: 15,
      name: "Hạnh phúc của một tang gia",
      catId: 2,
      updatedAt: 1,
      rating: 3.0,
    }

  ];
  const topMonth = [
    {
      id: 1,
      name: "Pháp sư vô tâm",
      date: "21/01/2021",
      author: "Đỗ Thị Mai Chờ",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 5,
      img: "https://macthienyblog.files.wordpress.com/2015/08/phap-su-vo-tam3-macthienyblog.jpg?w=656",
    }, {
      id: 2,
      name: "Bến thượng hải",
      date: "05/01/2021",
      author: "Lưu Liệm Tử",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 5,
      img: "https://i.pinimg.com/originals/0d/47/0e/0d470e179522f6d53c0a3cedfbc8eac9.png"
    }, {
      id: 3,
      name: "Chân Hoàn truyện",
      date: "15/01/2021",
      author: "Lưu Liệm Tử",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 4.5,
      img: "https://sstruyen.com/assets/img/story/hau-cung-chan-hoan-truyen.jpg"
    }, {
      id: 4,
      name: "Cung",
      date: "09/01/2021",
      author: "Vu Chính",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 4.0,
      img: "https://wikidich.com/photo/5ad973a4ef21ec7264c0fb91?o=1"
    }, {
      id: 5,
      name: "Như Ý truyện",
      date: "14/01/2021",
      author: "Trịnh Hiểu Long",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 4.0,
      img: "https://img.webtruyen.com/public/images/reviews_img/20191230/review-nhu-y-truyen-3.jpg"
    }
  ];
  const topWeek = [
    {
      id: 3,
      name: "Chân Hoàn truyện",
      date: "15/01/2021",
      author: "Lưu Liệm Tử",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 4.5,
      img: "https://sstruyen.com/assets/img/story/hau-cung-chan-hoan-truyen.jpg"
    }, {
      id: 2,
      name: "Bến thượng hải",
      date: "10/01/2021",
      author: "Lưu Liệm Tử",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 5,
      img: "https://i.pinimg.com/originals/0d/47/0e/0d470e179522f6d53c0a3cedfbc8eac9.png"
    }, {
      id: 5,
      name: "Như Ý truyện",
      date: "14/01/2021",
      author: "Trịnh Hiểu Long",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 4.0,
      img: "https://img.webtruyen.com/public/images/reviews_img/20191230/review-nhu-y-truyen-3.jpg"
    }, {
      id: 4,
      name: "Cung",
      date: "16/01/2021",
      author: "Vu Chính",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 4.0,
      img: "https://wikidich.com/photo/5ad973a4ef21ec7264c0fb91?o=1"
    }, {
      id: 1,
      name: "Pháp sư vô tâm",
      date: "13/01/2021",
      author: "Đỗ Thị Mai Chờ",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 5,
      img: "https://macthienyblog.files.wordpress.com/2015/08/phap-su-vo-tam3-macthienyblog.jpg?w=656",
    }
  ];
  const allTime = [
    {
      id: 3,
      name: "Chân Hoàn truyện",
      date: "15/01/2021",
      author: "Lưu Liệm Tử",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 4.5,
      img: "https://sstruyen.com/assets/img/story/hau-cung-chan-hoan-truyen.jpg"
    }, {
      id: 5,
      name: "Như Ý truyện",
      date: "14/01/2021",
      author: "Trịnh Hiểu Long",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 4.0,
      img: "https://img.webtruyen.com/public/images/reviews_img/20191230/review-nhu-y-truyen-3.jpg"
    }, {
      id: 4,
      name: "Cung",
      date: "16/01/2021",
      author: "Vu Chính",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 4.0,
      img: "https://wikidich.com/photo/5ad973a4ef21ec7264c0fb91?o=1"
    }, {
      id: 2,
      name: "Bến thượng hải",
      date: "10/01/2021",
      author: "Lưu Liệm Tử",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 5,
      img: "https://i.pinimg.com/originals/0d/47/0e/0d470e179522f6d53c0a3cedfbc8eac9.png"
    }, {
      id: 1,
      name: "Pháp sư vô tâm",
      date: "13/01/2021",
      author: "Đỗ Thị Mai Chờ",
      desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
      rating: 5,
      img: "https://macthienyblog.files.wordpress.com/2015/08/phap-su-vo-tam3-macthienyblog.jpg?w=656",
    }
  ];
  const imgURL = [
    "https://i.pinimg.com/originals/9f/95/47/9f95477167938b1df2c513e1c89fb155.png",
    "https://i.pinimg.com/236x/03/40/64/034064001bee35be94c16228884bf57b--wattpad-black-cats.jpg",
    "https://vnkings.com/wp-content/uploads/2018/09/C5FA230B-B569-4783-B92B-156AA667D1CC.jpeg",
    "https://cf.shopee.vn/file/5595a01670964d0295b156e5f4b5f2c5",
    "https://i.pinimg.com/236x/ae/bd/d3/aebdd3b97f77fac4112610f64ff601a1.jpg",
    "https://i.pinimg.com/236x/79/e3/f3/79e3f32c79474c41b7588b7247806dbb--wattpad.jpg",
    "https://i.imgur.com/qflHGgf.jpg?1",
    "https://vnkings.com/wp-content/uploads/2016/05/174759.jpg",
    "https://www.dongabooks.vn/uploads/Products/product_947/Truyen_co_tich_VN_Bia_1_Cung_web.jpg",
    "https://nhasachmiendong.com/files/products/hom-nay-toi-that-tinh_14.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZWjFjaJWpqtQ7rB-bFRMI08X_QBAblWf5g&usqp=CAU"
  ]

  const [chosenCategory, setChosenCategory] = React.useState(1);
  const [sortStrategy, setSortStrategy] = React.useState(0);
  const [topStrategy, setTopStrategy] = React.useState(0);
  const [novelByCat, setNovelByCat] = React.useState(novels.filter(novel => novel.catId === chosenCategory).sort((novel1, novel2) => novel2.updatedAt - novel1.updatedAt));
  const [displayedNovels, setDisplayNovels] = React.useState([]);
  const [displayedTop, setDisplayedTop] = React.useState(topMonth);
  const [page, setPage] = React.useState(1);

  const handleChangeCategory = (id) => {
    setChosenCategory(id);
    setPage(1);
  }


  React.useEffect(() => {
    if (sortStrategy === 0)
      setNovelByCat(novels.filter(novel => novel.catId === chosenCategory).sort((novel1, novel2) => novel2.updatedAt - novel1.updatedAt))
    else
      setNovelByCat(novels.filter(novel => novel.catId === chosenCategory).sort((novel1, novel2) => novel2.rating - novel1.rating));

  }, [chosenCategory, sortStrategy])

  React.useEffect(() => {
    if (topStrategy === 0)
      setDisplayedTop(topMonth);
    else if (topStrategy === 1) setDisplayedTop(topWeek);
    else setDisplayedTop(allTime);
  }, [topStrategy]);

  React.useEffect(() => {

    const start = (page - 1) * 9;
    const end = start + 9 - 1;
    const paginatedNovels = novelByCat.filter((item, index) => index >= start && index <= end);
    setDisplayNovels(paginatedNovels);

  }, [page, novelByCat])
  // main unit
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2} md={2}>
            <Card className={classes.card}>
              <CardHeader title={<b>THỂ LOẠI</b>} style={{ color: "#FF781F" }} className={classes.cardHeader} />
              <CardContent className={classes.cardContent}>
                {
                  category.map((item) => (
                    (
                      chosenCategory === item.id ?
                        <Button key={item.id} style={{ textAlign: "left", width: "100%", marginBottom: "10px", borderRadius: '0', backgroundImage: 'linear-gradient(to right, #c1c1c1 0%, #c1c1c1 95%, #FF781F 95%, #FF781F 100%)' }} >
                          <span style={{ width: "86%", fontWeight: "bold" }}>
                            {item.name}
                          </span>
                          <span style={{ width: "14%" }}>
                            <DoubleArrowIcon />
                          </span>
                        </Button>
                        :
                        <Button className={classes.tagContent} key={item.id} style={{ borderRadius: '0', backgroundColor: '#E1E1E1' }}
                          onClick={() => handleChangeCategory(item.id)}
                        >
                          <b>{item.name}</b>
                        </Button>
                    )
                  ))
                }
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <div style={{ marginBottom: '15px' }}>
              <SimpleFilter sortStrategy={sortStrategy} setSortStrategy={setSortStrategy} />
            </div>
            <div>
              <Grid container spacing={4}>
                {
                  novelByCat.length === 0 ?
                    <Typography>Chưa có mẫu truyện thuộc thể loại này. Xin hãy quay lại sau.</Typography>
                    // mới nhất
                    :
                    (
                      sortStrategy === 0 ?
                        displayedNovels.map((novel, index) => (
                          <Grid item xs={12} sm={4} md={4} key={index}>
                            <img src={imgURL[Math.floor(Math.random() * Math.floor(imgURL.length))]} width="100%" height="220px" style={{ borderRadius: '8px' }}></img>
                            <div >
                              <Typography title={novel.name} style={{
                                width: "100%", display: 'inline-block',
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                              }}>
                                <a href="/path" style={{ color: 'black' }}>{novel.name}</a>
                              </Typography>
                            </div>
                          </Grid>
                        ))
                        :
                        //nổi bật nhất
                        displayedNovels.map((novel, index) => (
                          <Grid item xs={12} sm={4} md={4} key={index}>
                            <img src={imgURL[Math.floor(Math.random() * Math.floor(imgURL.length))]} width="100%" height="220px" style={{ borderRadius: '8px' }}></img>
                            <div >
                              <Typography style={{
                                width: "100%", display: 'inline-block',
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                              }}><a href="/path" style={{ color: 'black' }}>{novel.name}</a></Typography>
                            </div>
                          </Grid>
                        ))
                    )
                }
              </Grid>
            </div>
            {
              novelByCat.length !== 0 ?
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <PaginationRounded
                    count={Math.ceil(novelByCat.length / 9)}
                    color="primary"
                    size="large"
                    page={page}
                    setPage={setPage} />
                </div>
                :
                <></>
            }
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <TopFilter topStrategy={topStrategy} setTopStrategy={setTopStrategy} />
            <div style={{ backgroundColor: '#E1E1E1', paddingTop: "8px" }}>
              {
                displayedTop.map((novel, index) => (
                  <div key={index} style={{ backgroundColor: "#c4c4c4", borderRadius: "8px", marginTop: '5px', marginBottom: '5px', padding: "10px" }}>
                    <div className={classes.container} >
                      <div className={classes.floatLeft}>
                        <StyledBadge badgeContent={index <= 2 ? index + 1 : null} color={index === 0 ? "secondary" : index === 1 ? "error" : "primary"}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                          style={{ marginTop: "10px" }}
                        >
                          <img src={novel.img} alt={"Novel avatar"} width="100%" height="130px" style={{ borderRadius: "8px" }} />
                        </StyledBadge>
                      </div>
                      <div className={classes.floatRight}>
                        <Typography style={{ fontSize: "25px", fontWeight: "bold", textAlign: "center" }}>{novel.name}</Typography>
                        <div title={novel.desc} style={{
                          textAlign: "justify",
                          overflow: "hidden",
                          maxHeight: "5.4em",
                          lineHeight: "1.8em",
                          position: "relative",
                          maxWidth: "100%",

                          // "&&:before": {   unwork
                          //   content: '"..."',
                          //   position: "absolute",
                          //   right: 0,
                          //   bottom: 0
                          // },
                          // "&&:after": {
                          //   content: '""',
                          //   position: "absolute",
                          //   right: 0,
                          //   width: "1em",
                          //   height: "1em",
                          //   marginTop: "0.2em",
                          //   background: "white"
                          // }
                        }}>
                          {novel.desc}
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      {
                        [1, 2, 3, 4, 5].map((item, index) => (
                          item <= novel.rating ?
                            <StarIcon key={index} fontSize={"small"} style={{ color: "#FFB400" }} />
                            :
                            <StarBorderIcon key={index} fontSize={"small"} style={{ color: "#FFB400" }} />
                        ))
                      }
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>
                        Tác giả: {novel.author}
                      </span>
                      <span>
                        Ngày đăng: {novel.date}
                      </span>
                    </div>
                  </div>
                ))
              }
            </div>
          </Grid>
        </Grid>
      </Container >
    </>
  );
}

const useStyles_1 = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'flex-end'
  },
}));

const options = [
  'Mới nhất',
  'Nổi bật',
];

function SimpleFilter({ sortStrategy, setSortStrategy }) {
  const classes = useStyles_1();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSortStrategy(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings" style={{ padding: '0px', margin: "0px", backgroundColor: "#c1c1c1", width: "20%", borderRadius: "8px" }}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
          style={{ color: 'white' }}
        >
          <ListItemText primary={options[sortStrategy]} />
          < ExpandMoreIcon />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === sortStrategy}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const useStyles_2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& .Mui-selected': {
      backgroundColor: '#0057B2',
      color: 'white',
    },
    // "& .MuiPaginationItem": {
    //   backgroundColor: "yellow"
    // },
    // '& .page-item': {
    //   backgroundColor: '#E0E0E0'
    // }
  },
}));

function PaginationRounded({ count, page, setPage }) {
  const classes = useStyles_2();
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className={classes.root}>
      <Pagination count={count} page={page} shape="rounded" color="primary" onChange={handleChange} />
    </div>
  );
}

const topOptions = [
  "TOP Tháng",
  "TOP Năm",
  "Mọi thời đại"
];

const useStyles_3 = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
}));

function TopFilter({ topStrategy, setTopStrategy }) {
  const classes = useStyles_3();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setTopStrategy(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings" style={{ padding: '0px', margin: "0px", backgroundColor: "#FF781F", borderRadius: "0px" }}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
          style={{ color: 'white' }}
        >
          <ListItemText style={{ textAlign: 'center' }} primary={topOptions[topStrategy]} />
          <ExpandMoreIcon />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {topOptions.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === topStrategy}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div >
  );
}