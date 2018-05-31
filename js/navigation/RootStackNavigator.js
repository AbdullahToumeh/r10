import { createStackNavigator } from 'react-navigation';

import NavigationLayout from './NavigationLayout';
import { speakerScreen } from './NavigationLayout';

export default createStackNavigator(
  {
    Layout: NavigationLayout,
    Speaker: speakerScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
