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
import { category, novels, topMonth, topWeek, allTime, imgURL } from '../../resources/data/data'

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
  const [chosenCategory, setChosenCategory] = React.useState(1);
  const [sortStrategy, setSortStrategy] = React.useState(0);
  const [topStrategy, setTopStrategy] = React.useState(0);
  const [novelByCat, setNovelByCat] = React.useState(novels.filter(novel => novel.catId.includes(chosenCategory)).sort((novel1, novel2) => novel2.updatedAt - novel1.updatedAt));
  const [displayedNovels, setDisplayNovels] = React.useState([]);
  const [displayedTop, setDisplayedTop] = React.useState(topMonth);
  const [page, setPage] = React.useState(1);

  const handleChangeCategory = (id) => {
    setChosenCategory(id);
    setPage(1);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (sortStrategy === 0)
      setNovelByCat(novels.filter(novel => novel.catId.includes(chosenCategory)).sort((novel1, novel2) => novel2.updatedAt - novel1.updatedAt))
    else
      setNovelByCat(novels.filter(novel => novel.catId.includes(chosenCategory)).sort((novel1, novel2) => novel2.rating - novel1.rating));

  }, [chosenCategory, sortStrategy])

  React.useEffect(() => {
    if (topStrategy === 0)
      setDisplayedTop(topMonth);
    else if (topStrategy === 1) setDisplayedTop(topWeek);
    else setDisplayedTop(allTime);
  }, [topStrategy]);

  React.useEffect(() => {

    const start = (page - 1) * 12;
    const end = start + 12 - 1;
    const paginatedNovels = novelByCat.filter((item, index) => index >= start && index <= end);
    setDisplayNovels(paginatedNovels);

  }, [page, novelByCat])
  // main unit
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={2}>
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

          <Grid item xs={12} sm={12} md={6}>
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
                    // (
                    //   sortStrategy === 0 ?
                    displayedNovels.map((novel, index) => (
                      <Grid item xs={4} sm={3} md={3} key={index}>
                        <Link to={`/Detail/${novel.id}`} style={{ textDecoration: "none", color: "white" }}>
                          <img src={imgURL[novel.id % imgURL.length]} width="100%" height="180px" style={{ borderRadius: '8px' }}></img>
                        </Link>

                        <div >
                          <Typography title={novel.name} style={{
                            width: "100%", display: 'inline-block',
                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                          }}>
                            <Link to={`/Detail/${novel.id}`} style={{ color: 'black' }}>{novel.name}</Link>
                          </Typography>
                        </div>
                      </Grid>
                    ))
                  // :
                  // //nổi bật nhất
                  // displayedNovels.map((novel, index) => (
                  //   <Grid item xs={12} sm={4} md={4} key={index}>
                  //     <img src={imgURL[Math.floor(Math.random() * Math.floor(imgURL.length))]} width="100%" height="220px" style={{ borderRadius: '8px' }}></img>
                  //     <div >
                  //       <Typography style={{
                  //         width: "100%", display: 'inline-block',
                  //         whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                  //       }}><a href="/path" style={{ color: 'black' }}>{novel.name}</a></Typography>
                  //     </div>
                  //   </Grid>
                  // ))
                  // )
                }
              </Grid>
            </div>
            {
              novelByCat.length !== 0 ?
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <PaginationRounded
                    count={Math.ceil(novelByCat.length / 12)}
                    color="primary"
                    size="large"
                    page={page}
                    setPage={setPage} />
                </div>
                :
                <></>
            }
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
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
                          <Link to={`/Detail/${novel.id}`} >
                            <img src={novel.img} alt={"Novel avatar"} width="100%" height="130px" style={{ borderRadius: "8px" }} />
                          </Link>
                        </StyledBadge>
                      </div>
                      <div className={classes.floatRight}>
                        <Link to={`/Detail/${novel.id}`} style={{ textDecoration: "none", color: "black" }}>
                          <Typography style={{ fontSize: "25px", fontWeight: "bold", textAlign: "center" }}>{novel.name}</Typography>
                        </Link>
                        <div title={novel.desc} style={{
                          textAlign: "justify",
                          overflow: "hidden",
                          maxHeight: "5.4em",
                          lineHeight: "1.8em",
                          position: "relative",
                          maxWidth: "100%",
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
      <List component="nav" aria-label="Device settings" style={{ padding: '0px', margin: "0px", backgroundColor: "#c1c1c1", width: "12vw", borderRadius: "8px" }}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
          style={{ color: 'black' }}
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