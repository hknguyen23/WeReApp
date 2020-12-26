import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles
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
  root: {
    width: '940px',
    minHeight: '100%',
    borderRadius: '4px'
  },
  cardHeader: {
    color: '#FFFFFF',
    backgroundColor: '#0452BB'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '5px 0px',
  },

}));

const data = [
  {
    number: 1,
    title: 'Tiêu đề chương 1',
    selected: false,
  },
  {
    number: 2,
    title: 'Tiêu đề chương 2',
    selected: false,
  },
  {
    number: 3,
    title: 'Tiêu đề chương 3',
    selected: false,
  },
  {
    number: 4,
    title: 'Tiêu đề chương 4 ',
    selected: true,
  },
  {
    number: 5,
    title: 'Tiêu đề chương 5',
    selected: false,
  },
  {
    number: 6,
    title: 'Tiêu đề chương 6',
    selected: false,
  },

]

const Reading = () => {
  const classes = useStyles();
  const [chapterList, setChapterList] = useState(data);
  const [font, setFont] = useState("Arial");
  const [fontSize, setFontSize] = useState(16);
  const [indent, setIndent] = useState('90%');
  const [theme, setTheme] = useState('light');

  const selected = chapterList.filter((chapter) => chapter.selected === true);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
      </ThemeProvider>
      <Container className={classes.root} maxWidth="lg">
        <Card>
          <CardHeader className={classes.cardHeader}
            avatar={<MenuBookIcon style={{ fontSize: 30 }} />}
            titleTypographyProps={{ variant: 'h5', align: "left" }}
            title="Đọc truyện" />
          <CardContent className={classes.cardContent}>
            <InfoPanel theme={theme === 'light' ? lightTheme : darkTheme} />
            <Divider />
            <Toolbar
              font={font} setFont={(i) => setFont(i)}
              fontSize={fontSize} setFontSize={(i) => setFontSize(i)}
              indent={indent} setIndent={(i) => setIndent(i)}
              theme={theme} setTheme={setTheme}
            />
            <Divider />
            <ControlPanel theme={theme === 'light' ? lightTheme : darkTheme} />
            <Divider />
            <ReadingPanel
              selected={selected[0]}
              font={font}
              fontSize={fontSize}
              indent={indent}
              theme={theme === 'light' ? lightTheme : darkTheme}
            />
            <Divider />
            <ControlPanel theme={theme === 'light' ? lightTheme : darkTheme} />
            <Divider />
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Reading;