import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '../../resources/images/portrait.jpg'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [input, setInput] = React.useState("");
  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleToHome = () => {
    history.push("/");
  }

  const handleToProfile = () => {
    history.push("/Profile");

  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      history.push(`/Searching?name=${input}`);
    }

  }

  const queryParameters = {
    fictionName: input
  }
  // const handleToSearchPage = () => {
  //   const queryParameters = {
  //     fictionName: input
  //   }
  //   history.push(`/Searching/${input}`)
  // }

  return (
    <div className={classes.grow} >
      <AppBar position="static" style={{ backgroundColor: "#2196F3" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            style={{ marginRight: '-5px' }}
            onClick={handleToHome}
          >
            <LibraryBooksIcon fontSize="large" />
          </IconButton>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography className={classes.title} variant="h5" noWrap style={{ fontWeight: "bold" }}>
              WeRe
          </Typography>
          </NavLink>
          <div className={classes.grow} />
          <div className={classes.search} >
            <Link className={classes.searchIcon} style={{ cursor: 'pointer', color: 'white' }}
              // to={`/Searching/${input} `}>
              to={`/Searching?name=${input}`}>

              <SearchIcon />
            </Link>
            <InputBase
              placeholder="Tìm kiếm..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setInput(e.target.value)}
              value={input}
              fullWidth
              onKeyPress={handleEnter}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={'primary-search-account-menu'}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              onClick={handleToProfile}
            >
              {/* <AccountCircle /> */}
              <img width={"40"} height={"40px"} src={Avatar} style={{ borderRadius: "50%" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={'primary-search-account-menu'}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        onClick={handleToProfile}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu> */}
    </div >
  );
}