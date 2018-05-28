import React from 'react';
import {BaseComponent} from '../../commons';
import Toast from '../toast';

/**
 * @description: The Notification component will be changed soon, please use the Toast component instead
 */
export default class Notification extends BaseComponent {

  render() {
    return <Toast {...this.props} />;
  }
}
