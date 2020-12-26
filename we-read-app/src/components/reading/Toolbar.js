import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  Switch,
  makeStyles
} from '@material-ui/core';

import { lightTheme, darkTheme } from '../../constants/config.json';

import FontDownloadIcon from '@material-ui/icons/FontDownload';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'rows',
    justifyContent: 'center',
  },
  toolbar: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'rows',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px',
    fontSize: '20px'
  },
  marginIcon: {
    marginRight: '5px'
  },
  marginGroup: {
    marginRight: '24px'
  },
  fontIcon: {
    width: '33px',
    height: '33px',
    color: '#2F80ED',
  },
  fontDropdown: {
    width: '200px'
  }
}));

const data1 = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28];
const data2 = ['Arial', 'Roboto', 'Cambria', 'Georgia', 'Times New Roman'];
const data3 = ['50%', '60%', '70%', '80%', '90%'];

const Toolbar = (props) => {
  const classes = useStyles();
  const [listFontSize, setListFontSize] = useState(data1);
  const [listFont, setListFont] = useState(data2);
  const [listIndent, setListIndent] = useState(data3);

  const handleChangeFont = (e) => {
    props.setFont(e.target.value);
  }
  const handleChangeFontSize = (e) => {
    props.setFontSize(e.target.value);
  }
  const handleChangeIndent = (e) => {
    props.setIndent(e.target.value);
  }

  const handleChangeTheme = () => {
    if (props.theme === 'light') {
      props.setTheme('dark');
    }
    else {
      props.setTheme('light');
    }
  }

  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="lg" style={{ backgroundColor: props.theme === 'light' ? lightTheme.body : darkTheme.body }}>
        <Box className={classes.toolbar}>
          <Typography className={classes.marginIcon}>Dark mode</Typography>
          <Switch className={classes.marginGroup} onChange={handleChangeTheme}
            color="primary" name="dark"
          />
          <FontDownloadIcon className={`${classes.fontIcon} ${classes.marginIcon}`} />
          <TextField className={`${classes.fontDropdown} ${classes.marginGroup}`}
            size="small" name="font" required select variant="outlined" value={props.font}
            onChange={handleChangeFont} SelectProps={{ native: true }}  
          >
            {listFont.map((option) => (
              <option key={option} value={option} >
                {option}
              </option>
            ))}
          </TextField>
          <Typography className={classes.marginIcon}>Size</Typography>
          <TextField className={classes.marginGroup} size="small" name="fontSize"
            required select variant="outlined" value={props.fontSize}
            onChange={handleChangeFontSize} SelectProps={{ native: true }}
          >
            {listFontSize.map((option) => (
              <option key={option} value={option} >
                {option}
              </option>
            ))}
          </TextField>
          <Typography className={classes.marginIcon}>Indent</Typography>
          <TextField className={classes.marginGroup} size="small" name="indent"
            required select variant="outlined" value={props.indent}
            onChange={handleChangeIndent} SelectProps={{ native: true }} 
          >
            {listIndent.map((option) => (
              <option key={option} value={option} >
                {option}
              </option>
            ))}
          </TextField>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Toolbar;