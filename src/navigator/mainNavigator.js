import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4289366Navigator from '../features/BlankScreen4289366/navigator';
import CopyOfBlankScreen6089345Navigator from '../features/CopyOfBlankScreen6089345/navigator';
import BlankScreen8789344Navigator from '../features/BlankScreen8789344/navigator';
import BlankScreen8689343Navigator from '../features/BlankScreen8689343/navigator';
import Maps88770Navigator from '../features/Maps88770/navigator';
import Add-Item88769Navigator from '../features/Add-Item88769/navigator';
import Maps88765Navigator from '../features/Maps88765/navigator';
import UserProfile88761Navigator from '../features/UserProfile88761/navigator';
import Maps88717Navigator from '../features/Maps88717/navigator';
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
BlankScreen4289366: { screen: BlankScreen4289366Navigator },
CopyOfBlankScreen6089345: { screen: CopyOfBlankScreen6089345Navigator },
BlankScreen8789344: { screen: BlankScreen8789344Navigator },
BlankScreen8689343: { screen: BlankScreen8689343Navigator },
Maps88770: { screen: Maps88770Navigator },
Add-Item88769: { screen: Add-Item88769Navigator },
Maps88765: { screen: Maps88765Navigator },
UserProfile88761: { screen: UserProfile88761Navigator },
Maps88717: { screen: Maps88717Navigator },
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
