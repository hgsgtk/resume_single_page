import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import{
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
}from 'material-ui/styles/colors';

import icon_image from '../images/github-logo.jpg';
import profile_image from '../images/profile_image.jpg';
import qiita_logo from '../images/qiita_logo.jpeg';


const styles = {
  card: {
    margin: '10px',
  },
  align_left: {
    float: 'left',
  }
};

// ToDo: メインビジュアルのタイル化

const ProfileCard = ()=>(
  <Card
    style={styles.card}
  >
    <CardHeader
      title="Profile"
      subtitle="基本情報"
      avatar={icon_image}
    />
    <CardTitle title="Kazuki Higashiguchi" subtitle="東口和暉" />
    <CardText>
      <List>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar src={icon_image} />
          }
        >
          <a href="https://github.com/KAZUKI1994" style={styles.align_left}>GitHub Account</a>
        </ListItem>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar src={qiita_logo} />
          }
        >
          <a href="http://qiita.com/KAZUKI1994" style={styles.align_left}>Qiita Account</a>
        </ListItem>
      </List>
    </CardText>
  </Card>
);

export default ProfileCard;
