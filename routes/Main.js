import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "../components/home"; 
import Register from "../components/register"; 
import Login from "../components/login";
import ForgotPassword from "../components/ForgotPassword";
import addProduct from "../components/addProduct";
 
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {headerShown: false} 
    },
    Registration: {
        screen: Register,
        navigationOptions: {headerShown: false} 
    },
    Login: {
        screen: Login,
        navigationOptions: {headerShown: false} 
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {headerShown: false} 
    },addProduct: {
        screen: addProduct ,
        navigationOptions: {headerShown: false} 
    },
}

const mainScreen = createStackNavigator(screens);
export default createAppContainer(mainScreen);
