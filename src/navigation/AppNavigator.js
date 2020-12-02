import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import LandingScreen from '../screens/Landing/Landing';
// import LandingScreen2 from '../screens/Landing/Landing2';
// import LandingScreen3 from '../screens/Landing/Landing3';
// import LandingScreen4 from '../screens/Landing/Landing4';
import InvoiceScreen from '../screens/invoice/Invoice';
import MainTabBar from '../screens/tabbar/MainTabBar';
import NotificationScreen from '../screens/notification/Notification';
import HistoryScreen from '../screens/history/History';
import DetailHistoryScreen from '../screens/history/detailHistory/DetailHistory';
import {
    createStore,
    applyMiddleware,
} from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from '../redux/reducers';
import ReduxThunk from 'redux-thunk';
import { ROUTE_CHANGES } from '../redux/screenActions/timeOutActivity/type';
import { SET_REDIRECT } from '../redux/screenActions/redirect/type';
import INITIAL_STATE from '../redux/screenActions/redirect/initial-state';

const RootNavigator = createStackNavigator({
    // Landing: {
    //     screen: LandingScreen,
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    // Landing2: {
    //     screen: LandingScreen2,
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    // Landing3: {
    //     screen: LandingScreen3,
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    // Landing4: {
    //     screen: LandingScreen4,
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    Invoices: {
        screen: InvoiceScreen,
        navigationOptions: {
            header: null
        }
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: {
            header: null
        }
    },
    History: {
        screen: HistoryScreen,
        navigationOptions: {
            header: null
        }
    },
    DetailHistory: {
        screen: DetailHistoryScreen,
        navigationOptions: {
            header: null
        }
    },
    Main: {
        screen: MainTabBar,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    }
})

const AppNavigator = createAppContainer(RootNavigator)
const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));
class Root extends React.Component {

    // componentDidMount(){
    //     this.createNotificationListeners();
    // }

    componentDidUpdate(){
    }

    // componentWillUnmount(){
    //     this.notificationListener;
    //     this.notificationOpenListener;
    // }

    // async createNotificationListeners() {
    //     this.notificationOpenedListener = messaging().onNotificationOpenedApp((notificationOpen) => {
    //         const { title, body } = notificationOpen.notification;
    //     });
    
    //     this.notificationOpenedListener = await messaging().getInitialNotification().then((notificationOpen) => {
    //         if (notificationOpen) {
    //             if(notificationOpen.data.path != ''){
    //                 store.dispatch({type: SET_REDIRECT, payload: notificationOpen.data})
    //             }else{
    //                 store.dispatch({type: SET_REDIRECT, payload: {redirect: {...INITIAL_STATE.redirect, path: 'Notification'}}})
    //             }
    //         }
    //     });
    //   }

    render() {
        return (
            <Provider store={store}>
                <AppNavigator 
                    onNavigationStateChange={(prevState, newState) => {
                        this._getCurrentRouteName(newState)
                    }}
                />
            </Provider>
        );
    }

    _getCurrentRouteName(navState) {
        if (navState.hasOwnProperty('index')) {
            this._getCurrentRouteName(navState.routes[navState.index])
        } else {
            store.dispatch({type: ROUTE_CHANGES, payload: navState.routeName})
        } 
    };
}
export default Root
