import { createStackNavigator } from 'react-navigation';

import NavigationLayout from './NavigationLayout';

export default createStackNavigator(
  {
    Layout: NavigationLayout
    // Speaker: SpeakerModal
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
