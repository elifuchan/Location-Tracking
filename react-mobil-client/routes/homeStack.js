import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Hakkinda from '../screens/Hakkinda';
import Map from '../Harita'


const screens = {
  Home: {
    screen: Home,
  },
  Hakkinda: {
    screen: Hakkinda,
  },
  Map: {
    screen: Map,
  }
  
  
};



// home stack navigator screens
const HomeStack = createStackNavigator(screens);



export default createAppContainer(HomeStack);


