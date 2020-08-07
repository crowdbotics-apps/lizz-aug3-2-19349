import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen488736Navigator from '../features/BlankScreen488736/navigator';
import BlankScreen388735Navigator from '../features/BlankScreen388735/navigator';
import BlankScreen187120Navigator from '../features/BlankScreen187120/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen488736: { screen: BlankScreen488736Navigator },
BlankScreen388735: { screen: BlankScreen388735Navigator },
BlankScreen187120: { screen: BlankScreen187120Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
