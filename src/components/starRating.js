import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';

export default class StarRating extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
        <Icon name='star' style={{ fontSize: 12, width: 12, marginRight: 2, color: '#ffa500' }} />
        <Icon name='star' style={{ fontSize: 12, width: 12, marginRight: 2, color: '#ffa500' }} />
        <Icon name='star' style={{ fontSize: 12, width: 12, marginRight: 2, color: '#ffa500' }} />
        <Icon name='star' style={{ fontSize: 12, width: 12, marginRight: 2, color: '#ffa500' }} />
        <Icon name='star-outline' style={{ fontSize: 12, width: 12, marginRight: 2, color: '#ffa500' }} />
      </View>
    )
  }
}