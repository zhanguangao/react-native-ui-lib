import {Navigation} from 'react-native-navigation';
import LottieScreen from './LottieScreen';
import FeedbackScreen from './FeedbackScreen';

Navigation.registerComponent('example.animations.LottieScreen', () => LottieScreen);
Navigation.registerComponent('example.animations.FeedbackScreen', () => FeedbackScreen);
