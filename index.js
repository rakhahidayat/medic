/**
 * @format
 */

import {AppRegistry, YellowBox, StatusBar, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './src/screens/splashscreen/Splash'
import Landing from './src/screens/Landing/Landing'
import Invoices from './src/screens/invoice/Invoice'
import AppNavigator from './src/navigation/AppNavigator';
import React, {Component} from 'react';
// YellowBox.ignoreWarnings([
//   'Setting a timer',
//   'Warning: componentWillMount is deprecated',
//   'Warning: componentWillReceiveProps is deprecated',
//   'Warning: componentWillUpdate is deprecated',
//   'Warning: Encountered two children with the same key',
//   'Warning: Cannot update during an existing state transition (such as within `render`)',
//   'Module RCTImageLoader requires',
//   'ViewPagerAndroid',
//   'Possible Unhandled Promise Rejection',
//   'Failed prop type: Invalid prop `onOpenModal` of type `boolean`',
//   'Each child in a list should have a unique "key" prop.',
//   'Deprecation warning: value provided is not in a recognized RFC2822 or ISO format.',
//   'Warning: Failed prop type: The prop `children` is marked as required in `ReactNativeModal`, but its value is `undefined`.'
// ]);

StatusBar.setBarStyle('light-content', true);
class Main extends Component {
    constructor(props){
        super(props);
        this.state = { currentScreen: 'Splash'};
        setTimeout(()=>{
            this.setState({ currentScreen: 'Invoices'})
        }, 500)
    }
    render(){
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <AppNavigator />
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () => Main);