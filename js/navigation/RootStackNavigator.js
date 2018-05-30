import { createStackNavigator } from 'react-navigation';

import NavigationLayout, { speakerScreen } from './NavigationLayout';

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
