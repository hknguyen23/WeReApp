import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import * as data from '../../resources/data/data';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarHalfIcon from '@material-ui/icons/StarHalf';
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: '95%',
    margin: 'auto'
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
    flexGrow: 0,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  quickAccess: {
    color: "black",
    cursor: 'pointer',
    "&:hover": {
      color: "#FF781F"
    },
    textDecoration: 'none'
  },
  paperLikeShadow: {
    boxShadow: '0 2px 4px 3px rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
  },
}));

const catOption =
{
  name: 'Thể loại',
  values: [{ id: 0, name: "Tất cả" }].concat(data.category.slice())
}
const tagOption =
{
  name: 'Tag',
  values: [{ id: 0, name: "Tất cả" }].concat(data.tags.slice())
}

const yearOption =
{
  name: 'Năm',
  values: [
    {
      id: 0,
      name: "Tất cả"
    }, {
      id: 1,
      name: 2021
    }, {
      id: 2,
      name: 2020
    }, {
      id: 3,
      name: 2019
    }, {
      id: 4,
      name: 2018
    }, {
      id: 5,
      name: 2017
    }, {
      id: 6,
      name: 2016
    }, {
      id: 7,
      name: 2015
    }, {
      id: 8,
      name: 2014
    }, {
      id: 9,
      name: 2013
    }, {
      id: 10,
      name: 2012
    }, {
      id: 11,
      name: 2011
    }, {
      id: 12,
      name: "Trước 2011"
    }
  ]
}
const statusOption =
{
  name: "Trạng thái",
  values: [
    {
      id: 0,
      name: "Tất cả"
    }, {
      id: 1,
      name: "Đang cập nhật"
    }, {
      id: 2,
      name: "Đã hoàn thành"
    }
  ]
}
const sortOption = {
  name: "Sắp xếp",
  values: [
    {
      id: 1,
      name: "Xem nhiều nhất"
    }, {
      id: 2,
      name: "Đánh giá cao nhất"
    }
    // , {
    //   id: 3,
    //   name: "Đánh giá cao nhất năm"
    // },
    // {
    //   id: 4,
    //   name: "Đánh giá cao mọi thời dại"
    // }
  ]
}

const itemsperPage = 12;

function Searching() {
  const classes = useStyles();
  const [input, setInput] = useState(useParams().fictionName + " ");
  const [chosenCatID, setChosenCatID] = useState([0]);
  const [chosenTagID, setChosenTagID] = useState([0]);
  const [chosenYearID, setChosenYearID] = useState(0);
  const [chosenStatusID, setChosenStatusID] = useState(0);
  const [chosenSortID, setChosenSortID] = useState(1);
  const [resultNum, setResultNum] = useState(0);
  const [page, setPage] = useState(1);
  const [totalNovels, setTotalNovels] = useState(0);
  const [displayedNovels, setDisplayNovels] = useState([]);
  const [values, setValues] = useState(input);

  const handleChange = (event) => {
    setValues(event.target.value);
  };

  const handleClickClearInput = () => {
    setValues("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setInput(values);
  };

  const handleChangeCat = (i) => {
    let newArr = [0];
    if (i === 0 && !chosenCatID.includes(0)) {              // if select all, deselect all other genre
      newArr = [0];
    }
    else {
      const index = chosenCatID.indexOf(i);                // add or remove genre
      if (index > -1) {                                           // remove genre
        newArr = chosenCatID.filter(id => id !== i);
      }
      else {                                                      // add genre                      
        newArr = [
          ...chosenCatID,
          i,
        ];
      }

      if (newArr.length === 0) {                                // if List genre is empty, add all
        newArr.push(0);
      }
      if (newArr.length > 1 && newArr.includes(0)) {            // if List genre has 2 or more genre and includes all, remove all
        newArr = newArr.filter(id => id !== 0);
      }
    }
    setChosenCatID(newArr);
  }

  const handleChangeTag = (i) => {
    let newArr = [0];
    if (i === 0 && !chosenTagID.includes(0)) {              // if select all, deselect all other tag
      newArr = [0];
    }
    else {
      const index = chosenTagID.indexOf(i);                // add or remove tag
      if (index > -1) {                                           // remove tag
        newArr = chosenTagID.filter(id => id !== i);
      }
      else {                                                      // add tag                      
        newArr = [
          ...chosenTagID,
          i,
        ];
      }

      if (newArr.length === 0) {                                // if List tag is empty, add all
        newArr.push(0);
      }
      if (newArr.length > 1 && newArr.includes(0)) {            // if List tag has 2 or more tag and includes all, remove all
        newArr = newArr.filter(id => id !== 0);
      }
    }
    setChosenTagID(newArr);
  }

  const handleChangeYear = (i) => {
    setChosenYearID(i)
  }

  const handleChangeStatus = (i) => {
    setChosenStatusID(i)
  }

  const handleChangeSort = (i) => {
    setChosenSortID(i)
  }

  useEffect(() => {
    const start = (page - 1) * itemsperPage;
    const end = start + itemsperPage - 1;
    let novels = JSON.parse(JSON.stringify(data.novels));

    console.log(novels)
    if (!chosenCatID.includes(0))
      novels = novels.filter(novel => chosenCatID.every(id => novel.catId.includes(id)));
    if (!chosenTagID.includes(0)) {
      novels = novels.filter(novel => chosenTagID.every(id => novel.tagId.includes(id)));
    }
    // if (chosenYearID !== 0) {
    //   if (chosenYearID !== 12)
    //     novels = novels.filter(novel => novel.year === yearOption.values[chosenYearID].name);
    //   else
    //     novels = novels.filter(novel => novel.year < 2010);
    // }
    if (chosenStatusID !== 0)
      novels = novels.filter(novel => novel.status === statusOption.values[chosenStatusID].id);

    if (chosenSortID === 1) {
      novels = novels.sort((novel1, novel2) => novel2.view - novel1.view);
    } else if (chosenSortID === 2) {
      novels = novels.sort((novel1, novel2) => novel2.rating - novel1.rating);
    }


    if (input === "undefined " || input.trim() === "") {
      setResultNum("");
      const paginatedNovels = novels.filter((item, index) => index >= start && index <= end);
      setTotalNovels(novels.length);
      setDisplayNovels(paginatedNovels);
    } else {
      const novelsByName = novels.filter(novel => novel.name.toLowerCase().includes(input.trim().toLowerCase()));
      const paginatedNovels = novelsByName.filter((item, index) => index >= start && index <= end);

      setTotalNovels(novelsByName.length);
      setDisplayNovels(paginatedNovels);
      setResultNum(`${novelsByName.length} Kết quả tìm kiếm "${input.trim()}"`);
    }
  }, [input, page, chosenCatID, chosenTagID, chosenStatusID, chosenSortID, setTotalNovels]);

  const calStar = (rating) => {
    const array = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0];
    const result = [];
    for (let i = 0; i < 5; i++) {
      if (array[i] <= rating && array[i + 1] <= rating)
        result.push(<StarIcon key={i} fontSize={"small"} style={{ color: "#FFB400" }} />);
      else if (rating === array[i])
        result.push(<StarIcon key={i} fontSize={"small"} style={{ color: "#FFB400" }} />);
      else if (array[i] < rating && array[i + 1] > rating) {
        result.push(<StarIcon key={i} fontSize={"small"} style={{ color: "#FFB400" }} />);
        result.push(<StarHalfIcon key={i} fontSize={"small"} style={{ color: "#FFB400" }} />);
        i++;
      }
      else result.push(<StarBorderIcon key={i} fontSize={"small"} style={{ color: "#FFB400" }} />);
    }
    return result;
  }

  return (
    <Container className={classes.cardGrid} maxWidth="xl">

      <div style={{ backgroundColor: '#f3f3f3', textAlign: 'center', borderRadius: '18px', padding: '20px' }}>

        {<Grid container >
          <Grid item xs={12} sm={2} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={10} md={11} lg={11} >
            <div style={{ textAlign: 'left' }}>
              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '7px', width: '45%' }}>
                <InputLabel htmlFor="outlined-adornment-password">Tên truyện</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={'text'}
                  label={'Tên truyện'}
                  value={values.trim()}
                  onChange={(e) => handleChange(e)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickClearInput}
                        edge="end"
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <IconButton style={{ marginTop: '25px' }} onClick={handleSearch}><SearchIcon /></IconButton>
            </div>

          </Grid>
        </Grid>
        }
        {
          <Grid container style={{ marginTop: '7px', marginBottom: '7px' }}>
            <Grid item xs={12} sm={2} md={1} lg={1}>
              <Typography style={{ textAlign: 'right', marginTop: '7px' }}>{catOption.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={11} lg={11}>
              <div style={{ textAlign: 'justify', marginLeft: '20px' }}>
                {
                  catOption.values.map((value, index) => (
                    <button key={index}
                      style={{
                        margin: '5px', backgroundColor: '#e0e0e0', borderRadius: '8px', border: '0px', outline: 'none', cursor: 'pointer',
                        padding: '6px 16px 6px', boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)',
                        backgroundColor: chosenCatID.includes(value.id) ? '#2F80ED' : '#E0E0E0',
                        color: chosenCatID.includes(value.id) ? 'white' : 'black'
                      }}
                      onClick={() => handleChangeCat(value.id)}
                    >
                      {value.name}
                    </button>
                  ))
                }
              </div>
            </Grid>
          </Grid>
        }
        {
          <Grid container style={{ marginTop: '7px', marginBottom: '7px' }}>
            <Grid item xs={12} sm={2} md={1} lg={1}>
              <Typography style={{ textAlign: 'right', marginTop: '7px' }}>{tagOption.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={11} lg={11}>
              <div style={{ textAlign: 'justify', marginLeft: '20px' }}>
                {
                  tagOption.values.map((value, index) => (
                    <button key={index}
                      style={{
                        margin: '5px', backgroundColor: '#e0e0e0', borderRadius: '8px', border: '0px', outline: 'none', cursor: 'pointer',
                        padding: '6px 16px 6px', boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)',
                        backgroundColor: chosenTagID.includes(value.id) ? '#2F80ED' : '#E0E0E0',
                        color: chosenTagID.includes(value.id) ? 'white' : 'black'
                      }}
                      onClick={() => handleChangeTag(value.id)}
                    >
                      {value.name}
                    </button>
                  ))
                }
              </div>
            </Grid>
          </Grid>
        }
        {/* {
          <Grid container style={{ marginTop: '7px', marginBottom: '7px' }}>
            <Grid item xs={12} sm={2} md={1} lg={1}>
              <Typography style={{ textAlign: 'right', marginTop: '7px' }}>{yearOption.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={11} lg={11}>
              <div style={{ textAlign: 'justify', marginLeft: '20px' }}>
                {
                  yearOption.values.map((value, index) => (
                    <button key={index}
                      style={{
                        margin: '5px', backgroundColor: '#e0e0e0', borderRadius: '8px', border: '0px', outline: 'none', cursor: 'pointer',
                        padding: '6px 16px 6px', boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)',
                        backgroundColor: chosenYearID === value.id ? '#2F80ED' : '#E0E0E0',
                        color: chosenYearID === value.id ? 'white' : 'black'
                      }}
                      onClick={() => handleChangeYear(value.id)}
                    >
                      {value.name}
                    </button>
                  ))
                }
              </div>
            </Grid>
          </Grid>
        } */}
        {
          <Grid container style={{ marginTop: '7px', marginBottom: '7px' }}>
            <Grid item xs={12} sm={2} md={1} lg={1}>
              <Typography style={{ textAlign: 'right', marginTop: '7px' }}>{statusOption.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={11} lg={11}>
              <div style={{ textAlign: 'justify', marginLeft: '20px' }}>
                {
                  statusOption.values.map((value, index) => (
                    <button key={index}
                      style={{
                        margin: '5px', backgroundColor: '#e0e0e0', borderRadius: '8px', border: '0px', outline: 'none', cursor: 'pointer',
                        padding: '6px 16px 6px', boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)',
                        backgroundColor: chosenStatusID === value.id ? '#2F80ED' : '#E0E0E0',
                        color: chosenStatusID === value.id ? 'white' : 'black'
                      }}
                      onClick={() => handleChangeStatus(value.id)}
                    >
                      {value.name}
                    </button>
                  ))
                }
              </div>
            </Grid>
          </Grid>
        }
        {
          <Grid container style={{ marginTop: '7px', marginBottom: '7px' }}>
            <Grid item xs={12} sm={2} md={1} lg={1}>
              <Typography style={{ textAlign: 'right', marginTop: '7px' }}>{sortOption.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={11} lg={11}>
              <div style={{ textAlign: 'justify', marginLeft: '20px' }}>
                {
                  sortOption.values.map((value, index) => (
                    <button key={index}
                      style={{
                        margin: '5px', backgroundColor: '#e0e0e0', borderRadius: '8px', border: '0px', outline: 'none', cursor: 'pointer',
                        padding: '6px 16px 6px', boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)',
                        backgroundColor: chosenSortID === value.id ? '#2F80ED' : '#E0E0E0',
                        color: chosenSortID === value.id ? 'white' : 'black'
                      }}
                      onClick={() => handleChangeSort(value.id)}
                    >
                      {value.name}
                    </button>
                  ))
                }
              </div>
            </Grid>
          </Grid>
        }
      </div>

      <h2 style={{ width: '100%', textAlign: 'right' }}>
        {resultNum}
      </h2>

      <div>
        <Grid container spacing={4}>
          {displayedNovels.map((novel, index) => (
            <Grid item xs={4} sm={3} md={2} lg={2} key={index}>
              <Link to={`/Detail/${novel.id}`} style={{ textDecoration: "none", color: "white" }}>
                <img src={data.imgURL[novel.id % data.imgURL.length]} className={classes.paperLikeShadow} width="93%" height="220px" style={{ borderRadius: '8px' }}></img>
              </Link>

              <div>
                <Typography title={novel.name} style={{
                  width: "100%", display: 'inline-block',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', textAlign: 'left',
                }}>
                  <Link to={`/Detail/${novel.id}`} className={classes.quickAccess}>{novel.name}</Link>
                </Typography>
              </div>
              <div style={{ display: 'flex', alignContent: 'center' }}>
                <Typography title={"Điểm đánh giá"} style={{ textAlign: "left", marginRight: '10px' }}>
                  {
                    calStar(novel.rating)
                  }
                </Typography>
                <Typography> {novel.rating.toFixed(1)}</Typography>
              </div>

              <div style={{ display: 'flex', alignContent: 'center' }}>
                <Typography title={"Số lượt xem"} style={{ textAlign: "left", marginRight: '10px' }}>
                  <VisibilityIcon />
                </Typography>
                <Typography> {novel.view}</Typography>
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
        displayedNovels.length !== 0 ?
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <PaginationRounded
              count={Math.ceil(totalNovels / itemsperPage)}
              color="primary"
              size="large"
              page={page}
              setPage={setPage} />
          </div>
          :
          <></>
      }
    </Container>
  );
}

export default Searching;

const useStyles_2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& .Mui-selected': {
      backgroundColor: '#0057B2',
      color: 'white',
    }
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