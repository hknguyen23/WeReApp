import React from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100px',
    backgroundColor: theme.body,
    paddingTop: '30px',
    paddingBottom: '40px'
  }),
  title: (theme) => ({
    fontSize: '24px',
    marginTop: '10px',
    color: theme.text,
  }),
  paragraph:  (theme) => ({
    lineHeight: 1.6,
    marginTop: '10px',
    marginBottom: '10px',
    whiteSpace: 'pre-wrap',
    textAlign: 'justify',
    color: theme.text
  }),
}));

const data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum, neque eu aliquet suscipit, dolor est tincidunt quam, vel volutpat metus dolor vitae justo. Cras ac mauris mattis, facilisis lacus ut, euismod arcu. Maecenas tincidunt, risus at dapibus congue, risus purus sodales erat, sit amet ultricies purus metus eget libero. Fusce quis lorem sapien. Aliquam erat volutpat. Nullam porttitor mollis varius. Morbi viverra nulla vel sapien lobortis, vitae consectetur augue pharetra. Etiam quis iaculis nibh. Sed pretium tincidunt felis, eget venenatis lorem volutpat eget.\nVivamus molestie, libero ut scelerisque viverra, sapien nisl faucibus diam, a pellentesque dui nunc maximus felis. Aliquam lacinia ipsum non enim varius, eget malesuada velit gravida. Proin et congue sapien, nec congue erat. Aliquam vitae erat magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eu finibus sapien. Vestibulum nisl arcu, faucibus id risus sed, bibendum condimentum dolor. Nunc dapibus efficitur arcu vitae ultricies.\nSed vitae eros sit amet odio dictum porttitor sed id odio. Sed sagittis dolor quis odio dapibus accumsan. Ut eget velit nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tristique elit leo. Nunc vel lectus pretium, venenatis turpis pulvinar, rhoncus odio. Praesent eget odio sed massa semper mattis. Vivamus feugiat tempor leo non fringilla. Integer eu hendrerit mi. Maecenas semper ullamcorper tellus, et consequat justo blandit sit amet. Vestibulum accumsan, magna ut aliquet dictum, nisl nisi blandit sem, non viverra magna sapien vitae ex. Maecenas facilisis orci nec vestibulum commodo. Integer felis felis, aliquam sed condimentum vitae, varius scelerisque odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\nSed eleifend mattis ullamcorper. Sed porta sem vel nibh blandit, nec dapibus justo interdum. Duis diam libero, volutpat ut pellentesque in, ultrices a ipsum. Nulla quis elementum libero, efficitur sollicitudin elit. Sed facilisis magna non lacus mattis, vitae convallis magna suscipit. Nunc eu enim sit amet mauris ultricies lacinia ut vitae erat. Fusce aliquet metus eu sem mollis faucibus. Integer leo urna, aliquam quis leo nec, congue dignissim diam. Curabitur sed purus risus. Vivamus auctor arcu eu augue rutrum rhoncus. Nullam maximus ligula in diam pharetra cursus. Nullam quis imperdiet enim, eu congue eros. Nunc luctus diam in urna interdum maximus. Pellentesque maximus nunc ut blandit fermentum. Morbi rhoncus purus egestas ipsum fringilla vestibulum.\nMorbi in magna dui. Integer nunc nibh, posuere eu vulputate eget, eleifend sed neque. Nunc non ante egestas, consectetur arcu eget, elementum lectus. Proin congue nibh in accumsan lacinia. Ut efficitur tincidunt tincidunt. Nullam eu tellus et sem fermentum scelerisque. Integer suscipit, nisl eu rhoncus eleifend, nibh erat faucibus orci, sed aliquam sem turpis sit amet orci."
const ReadingPanel = (props) => {
  const classes = useStyles(props.theme);

  const customStyle = {
    fontSize: props.fontSize + 'px',
    width: props.indent,
    fontFamily: props.font,
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg" className={classes.container}>
        <div className={classes.title}>
          Chapter {props.selected.number}
        </div>
        <div className={classes.title}>
          {props.selected.title}
        </div>
        <div className={`${classes.paragraph}`} style={customStyle}>
          {data}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default ReadingPanel;