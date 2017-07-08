import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import icon_image from '../images/github-logo.jpg';
import profile_image from '../images/profile_image.jpg';

import IconButton from 'material-ui/IconButton';

const ProfileCard = ()=>(
  <Card>
    <CardHeader
      title="Profile"
      subtitle="基本情報"
      avatar={icon_image}
    />
    <CardMedia
      overlay={<CardTitle title="Live in Tokyo" subtitle="System Enginner" />}
    >
      <img src={profile_image} alt="" height="400px"/>
    </CardMedia>
    <CardTitle title="Kazuki Higashiguchi" subtitle="東口和暉" />
    <CardText>
      <div>
        <IconButton iconClassName="muidocs-icon-custom-github" />
      </div>
    </CardText>
  </Card>
);

export default ProfileCard;
