import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps88770Navigator from '../features/Maps88770/navigator';
import Add-Item88769Navigator from '../features/Add-Item88769/navigator';
import Maps88765Navigator from '../features/Maps88765/navigator';
import UserProfile88761Navigator from '../features/UserProfile88761/navigator';
import Maps88717Navigator from '../features/Maps88717/navigator';
import Add-Item88716Navigator from '../features/Add-Item88716/navigator';
import UserProfile88708Navigator from '../features/UserProfile88708/navigator';
import BlankScreen3988685Navigator from '../features/BlankScreen3988685/navigator';
import BlankScreen6288683Navigator from '../features/BlankScreen6288683/navigator';
import BlankScreen6188682Navigator from '../features/BlankScreen6188682/navigator';
import BlankScreen6088681Navigator from '../features/BlankScreen6088681/navigator';
import BlankScreen5988680Navigator from '../features/BlankScreen5988680/navigator';
import SignIn25988651Navigator from '../features/SignIn25988651/navigator';
import Maps88557Navigator from '../features/Maps88557/navigator';
import UserProfile88553Navigator from '../features/UserProfile88553/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps88770: { screen: Maps88770Navigator },
Add-Item88769: { screen: Add-Item88769Navigator },
Maps88765: { screen: Maps88765Navigator },
UserProfile88761: { screen: UserProfile88761Navigator },
Maps88717: { screen: Maps88717Navigator },
Add-Item88716: { screen: Add-Item88716Navigator },
UserProfile88708: { screen: UserProfile88708Navigator },
BlankScreen3988685: { screen: BlankScreen3988685Navigator },
BlankScreen6288683: { screen: BlankScreen6288683Navigator },
BlankScreen6188682: { screen: BlankScreen6188682Navigator },
BlankScreen6088681: { screen: BlankScreen6088681Navigator },
BlankScreen5988680: { screen: BlankScreen5988680Navigator },
SignIn25988651: { screen: SignIn25988651Navigator },
Maps88557: { screen: Maps88557Navigator },
UserProfile88553: { screen: UserProfile88553Navigator },

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
