import React, {Component, PropTypes} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import _ from 'lodash';
import {Avatar, Colors, Typography, Text, Button} from 'react-native-ui-lib';//eslint-disable-line
import {Animated} from 'react-native';
import Animation from 'lottie-react-native';

const star = require('../../assets/animations/star.json');

export default class LoadersScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
    };
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text text40>Rate Us!</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 60}}>
          {_.times(5, (i) => {
            return (
              <TouchableOpacity activeOpacity={1} key={i} onPress={() => this.setState({stars: i + 1})}>
                <Star index={i + 1} rating={this.state.stars}/>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}


class Star extends Component {

  static propTypes = {
    index: PropTypes.number,
    rating: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.state = {
      selected: false,
      progress: new Animated.Value(0),
    };
  }

  componentWillReceiveProps(nextProps) {
    const {index} = this.props;
    const {selected} = this.state;
    if (!selected && nextProps.rating >= index) {
      this.setState({
        selected: true,
      });
      this.start(this.props.rating);
    } else if (selected && nextProps.rating < index) {
      this.setState({
        selected: false,
      });
      this.reset();
    }
  }

  reset() {
    this.state.progress.setValue(0);
  }

  start(previousRating = 0) {
    Animated.timing(this.state.progress, {
      toValue: 1,
      delay: (this.props.index - 1 - previousRating) * 40,
      duration: 1200,
    }).start();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Animation
            style={{
              width: 50,
              height: 50,
            }}
            source={star}
            progress={this.state.progress}
          />
        </View>
      </View>
    );
  }
};

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
