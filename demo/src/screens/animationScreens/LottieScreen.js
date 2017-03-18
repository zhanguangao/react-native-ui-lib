import React, {Component} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import _ from 'lodash';
import {Avatar, Constants, Colors, Typography, Text, Button} from 'react-native-ui-lib';//eslint-disable-line
import {Animated} from 'react-native';
import Animation from 'lottie-react-native';

const lottie = require('../../assets/animations/lottie.json');


export default class LoadersScreen extends Component {

  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.start();
  }

  reset() {
    this.state.progress.setValue(0);
  }

  start() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Animation
              style={{
                width: Constants.screenWidth,
                height: Constants.screenHeight,
              }}
              source={lottie}
              progress={this.state.progress}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, height: 100}}>
          <Button label="reset" size={'medium'} outline outlineColor={Colors.dark10} onPress={this.reset}/>
          <Button label="start" size={'medium'} outline outlineColor={Colors.dark10} onPress={this.start}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
