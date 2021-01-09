import React from 'react';
import { Link as LINK } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{
      color: 'white',
      fontSize: '15px'
    }}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        WeRe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '35vh',
    marginTop: '30px'
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#2196F3',

  },
  paperLikeShadow: {
    boxShadow: '0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  quickAccess: {
    color: "white",
    cursor: 'pointer',
    "&:hover": {
      color: "#FF781F"
    },
    textDecoration: 'none'
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={`${classes.footer} ${classes.paperLikeShadow}`} >
        <Container maxWidth="lg"
          style={{
            color: 'white',
            // fontWeight: 'bold'
          }}
          className={classes.main}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3} md={3} style={{ textAlign: 'center' }}>
              <Typography >
                <LibraryBooksIcon style={{ fontSize: '80px' }} />
              </Typography>
              <Typography style={{ fontSize: '45px', fontWeight: 'bold' }}>WeRe</Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={3} style={{ textAlign: 'left' }}>
              <Typography style={{ fontSize: '20px', marginBottom: '10px' }}><b> THÔNG TIN LIÊN HỆ</b></Typography>
              <div style={{ display: 'table', margin: '5px' }}>
                <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '15px' }}>
                  <PhoneIcon />
                </div>
                <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                  <div>
                    0909789651
                  </div>
                  <div>
                    0709855627
                  </div>
                </div>
              </div>
              <div style={{ display: 'table', margin: '5px' }}>
                <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '15px' }}>
                  <MailIcon />
                </div>
                <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                  <div>
                    masa23@gmail.com
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={3} md={3} style={{ textAlign: 'left' }}>
              <Typography style={{ fontSize: '20px', marginBottom: '10px' }}><b> TRUY CẬP NHANH</b></Typography>
              <div>
                <div style={{ paddingRight: '15px', marginTop: '5px', marginBottom: '5px' }}>
                  <Link className={classes.quickAccess}>Danh sách yêu thích</Link>
                </div>
                <div style={{ paddingRight: '15px', marginTop: '5px', marginBottom: '5px' }}>
                  <LINK to="/Uploading" className={classes.quickAccess}>Đăng truyện</LINK>
                </div>
                <div style={{ paddingRight: '15px', marginTop: '5px', marginBottom: '5px' }}>
                  <LINK to="/Profile" className={classes.quickAccess}>Tài khoản của bạn</LINK>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} sm={3} md={3} style={{ textAlign: 'left' }}>
              <Typography style={{ fontSize: '20px', marginBottom: '10px' }}><b> KẾT NỐI VỚI CHÚNG TÔI</b></Typography>
              <div style={{ display: 'table' }}>
                <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingRight: '15px' }}>
                  <IconButton style={{ color: 'white', marginLeft: '-10px' }}>
                    <FacebookIcon style={{ fontSize: '30px' }} />
                  </IconButton>
                  <IconButton style={{ color: 'white' }}>
                    <RedditIcon style={{ fontSize: '30px' }} />
                  </IconButton>
                  <IconButton style={{ color: 'white' }}>
                    <TwitterIcon style={{ fontSize: '30px' }} />
                  </IconButton>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* <Typography variant="h2" component="h1" gutterBottom>
              Sticky footer
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {'Pin a footer to the bottom of the viewport.'}
              {'The footer will move as the main element of the page grows.'}
            </Typography>
            <Typography variant="body1">Sticky footer placeholder.</Typography> */}
        </Container>
        {/* <Typography variant="body1">

          </Typography> */}

        <Copyright />
      </footer>
    </div >
  );
}