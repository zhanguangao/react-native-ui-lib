import {Navigation} from 'react-native-navigation';
import LottieScreen from './LottieScreen';
import FeedbackScreen from './FeedbackScreen';
import CardScannerScreen from './CardScannerScreen';

Navigation.registerComponent('example.animations.LottieScreen', () => LottieScreen);
Navigation.registerComponent('example.animations.FeedbackScreen', () => FeedbackScreen);
Navigation.registerComponent('example.animations.CardScannerScreen', () => CardScannerScreen);
