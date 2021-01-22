import React, { useEffect, useState, useRef } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  useTheme
} from '@material-ui/core';

import MenuBookIcon from '@material-ui/icons/MenuBook';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from '../../constants/config.json';

import ReadingPanel from './ReadingPanel';
import InfoPanel from './InfoPanel';
import Toolbar from './Toolbar';
import ControlPanel from './ControlPanel';

const useStyles = makeStyles((theme) => ({
  root: (theme) => ({
    width: '90%',
    minHeight: '100%',
    borderRadius: '4px',
    paddingBottom: '24px',
    paddingTop: '24px',
  }),
  card: (theme) => ({
    backgroundColor: theme.body,
    border: theme.fieldBorder,
  }),
  cardHeader: {
    color: '#FFFFFF',
    backgroundColor: '#0452BB'
  },
  cardContent: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '5px 0px',
    backgroundColor: theme.body,
  }),
  divider: (theme) => ({
    border: theme.fieldBorder
  })
}));

const Reading = () => {
  const [font, setFont] = useState("Arial");
  const [fontSize, setFontSize] = useState(16);
  const [indent, setIndent] = useState('90%');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const ID = +useParams().fictionID;
  const chapterID = useParams().chapterID;
  const classes = useStyles(isDarkMode ? darkTheme : lightTheme);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const myRef = useRef(null)

  return (
    <React.Fragment>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
      </ThemeProvider>

      <Container className={classes.root} maxWidth="false">
        <Card className={classes.card}>
          <CardHeader className={classes.cardHeader}
            avatar={<MenuBookIcon style={{ fontSize: 30 }} />}
            titleTypographyProps={{ variant: 'h5', align: "left" }}
            title="Đọc truyện" />
          <CardContent className={classes.cardContent}>
            <InfoPanel theme={isDarkMode ? darkTheme : lightTheme} ID={ID} />
            <Divider className={classes.divider} />
            <Toolbar
              refProp={myRef}
              font={font} setFont={(i) => setFont(i)}
              fontSize={fontSize} setFontSize={(i) => setFontSize(i)}
              indent={indent} setIndent={(i) => setIndent(i)}
              theme={isDarkMode ? darkTheme : lightTheme}
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
            <Divider className={classes.divider} />
            <ControlPanel
              chapterID={chapterID}
              ID={ID}
              theme={isDarkMode ? darkTheme : lightTheme}
            />
            <Divider className={classes.divider} />
            <ReadingPanel
              font={font}
              fontSize={fontSize}
              indent={indent}
              chapterID={chapterID}
              theme={isDarkMode ? darkTheme : lightTheme}
            />
            <Divider className={classes.divider} />
            <ControlPanel
              refProp={myRef}
              chapterID={chapterID}
              ID={ID}
              theme={isDarkMode ? darkTheme : lightTheme} />
            <Divider className={classes.divider} />
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Reading;