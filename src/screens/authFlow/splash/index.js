import React, { Component } from 'react';
import {  Wrapper, Text } from '../../../components';
import { appImages, appStyles } from '../../../services';
import { Image } from 'react-native';

function Splash() {
  return (
    <Wrapper isMain isCenter>
      <Image source={appImages.splash}/>
    </Wrapper>
  );
}

export default Splash;
