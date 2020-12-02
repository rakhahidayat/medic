import React, { Component, useState } from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import InvoiceScreen from '../invoice/Invoice';
import EstimateScreen from '../estimate/Estimate';
import SearchScreen from '../search/Search';
import colors from '../../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, Text, View, Alert, ToastAndroid } from 'react-native';
import styles from './MainTabBar.style';
import * as Utils from '../../style/Utils';
import { Badge, withBadge } from 'react-native-elements'
import Mybadge from '../../components/IconBadge';
import NotificationScreen from '../notification/Notification';
// import AsyncStorage from '@react-native-community/async-storage';
// import { UserInactivityComponent } from '../../components/UserInactivityComponent';
// import { connect } from 'react-redux';
// import { LOGOUT_SESSION } from '../../redux/screenActions/login/type';

// let currentPage = ''

// const mapStateToProps = ({ timeOutActivity }) => {
//     const { currentRoute } = timeOutActivity;
//     currentPage = currentRoute
//     return { currentRoute };
// };

// const HomeScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <HomeScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const PromotionScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <PromotionScreen {...props} />
//         </UserInactivityComponent> 
//     )
// }

// const FinancialScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <FinancialScreen {...props} />
//         </UserInactivityComponent> 
//     )
// }

// const PromotionDetailAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <PromotionDetail {...props} />
//         </UserInactivityComponent> 
//     )
// }

// const EquipmentStatusAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <EquipmentStatus {...props} />
//         </UserInactivityComponent> 
//     )
// }

// const EquipmentDetailAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <EquipmentDetail {...props} />
//         </UserInactivityComponent> 
//     )
// }

// const EquipmentCautionAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <EquipmentCaution {...props} />
//         </UserInactivityComponent> 
//     )
// }

// const EquipmentCharacteristicAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <EquipmentCharacteristic {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const EquipmentMapsAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <EquipmentMaps {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const EquipmentScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <EquipmentScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const EquipmentWorkingHistoryAdvance = ({...props}) =>{
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <EquipmentWorkingHistory {...props} />
//         </UserInactivityComponent> 
//     )
// }

// const EquipmentWorkingHistoryDetailAdvance = ({...props}) =>{
//     return (
//         <UserInactivityComponent onActionComplete={(e)=> {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}}{...props}>
//             <EquipmentWorkingHistoryDetail {...props}/>
//         </UserInactivityComponent>
//     )
// }

// const EquipmentStatisticsAdvance = ({...props}) =>{
//     return (
//         <UserInactivityComponent onActionComplete={(e)=> {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}}{...props}>
//             <EquipmentStatistics {...props}/>
//         </UserInactivityComponent>
//     )
// }

// const EquipmentOilHistoryAdvance = ({...props}) =>{
//     return(
//         <UserInactivityComponent onActionComplete={(e)=> {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}}{...props}>
//             <EquipmentOilHistory {...props}/>
//         </UserInactivityComponent>
//     )
// }

// const EquipmentOilHistoryDetailAdvance = ({ ...props}) => {
//     return(
//         <UserInactivityComponent onActionComplete={(e)=> {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}}{...props}>
//             <EquipmentOilHistoryDetail {...props}/>
//         </UserInactivityComponent>
//     )
// }

// const NotificationScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <NotificationScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const PeriodicalAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <Periodical {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const OrderScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <OrderScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const OrderDetailScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <OrderDetailScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const PartDetailScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <PartDetailScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const ClosedOrderScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <ClosedOrderScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const WriteReviewScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <WriteReviewScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const OtherScreenAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <OtherScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const OtherSettingAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <OtherSetting {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const OtherContactAdvance = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <OtherContact {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const OtherTicketing = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <Ticketing {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const OtherDetailTicketing = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <DetailTicketing {...props} />
//         </UserInactivityComponent> 
//     )
// };
// const OtherTicketReview = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <TicketReview {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const OtherCreateFeedback = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <CreateFeedback {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const OtherCreateRequest = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <CreateRequest {...props} />
//         </UserInactivityComponent> 
//     )
// };

// const ImageFeedback = ({...props}) => { 
//     return (
//         <UserInactivityComponent onActionComplete={(e) => {if(currentPage === props.currentRoute){LogoutProcess(e, props)}}} {...props}>
//             <ImageScreen {...props} />
//         </UserInactivityComponent> 
//     )
// };


// const HomeScreenRedux = connect(mapStateToProps)(HomeScreenAdvance);
// const PromotionScreenRedux = connect(mapStateToProps)(PromotionScreenAdvance);
// const FinancialScreenRedux = connect(mapStateToProps)(FinancialScreenAdvance);
// const PromotionDetailRedux = connect(mapStateToProps)(PromotionDetailAdvance);
// const EquipmentStatusRedux = connect(mapStateToProps)(EquipmentStatusAdvance);
// const EquipmentDetailRedux = connect(mapStateToProps)(EquipmentDetailAdvance);
// const EquipmentCautionRedux = connect(mapStateToProps)(EquipmentCautionAdvance);
// const EquipmentCharacteristicRedux = connect(mapStateToProps)(EquipmentCharacteristicAdvance);
// const EquipmentMapsRedux = connect(mapStateToProps)(EquipmentMapsAdvance);
// const EquipmentWorkingHistoryRedux = connect(mapStateToProps)(EquipmentWorkingHistoryAdvance)
// const EquipmentWorkingHistoryDetailRedux = connect(mapStateToProps)(EquipmentWorkingHistoryDetailAdvance)
// const EquipmentStatisticsRedux = connect(mapStateToProps)(EquipmentStatisticsAdvance)
// const EquipmentOilHistoryRedux = connect(mapStateToProps)(EquipmentOilHistoryAdvance)
// const EquipmentOilHistoryDetailRedux = connect(mapStateToProps)(EquipmentOilHistoryDetailAdvance)

// const EquipmentScreenRedux = connect(mapStateToProps)(EquipmentScreenAdvance);
// const NotificationScreenRedux = connect(mapStateToProps)(NotificationScreenAdvance);
// const PeriodicalRedux = connect(mapStateToProps)(PeriodicalAdvance);
// const PartDetailScreenRedux = connect(mapStateToProps)(PartDetailScreenAdvance);

// const OrderScreenRedux = connect(mapStateToProps)(OrderScreenAdvance);
// const OrderDetailScreenRedux = connect(mapStateToProps)(OrderDetailScreenAdvance);
// const ClosedOrderScreenRedux = connect(mapStateToProps)(ClosedOrderScreenAdvance);
// const WriteReviewScreenRedux = connect(mapStateToProps)(WriteReviewScreenAdvance);

// const OtherScreenRedux = connect(mapStateToProps)(OtherScreenAdvance);
// const OtherSettingRedux = connect(mapStateToProps)(OtherSettingAdvance);
// const OtherContactRedux = connect(mapStateToProps)(OtherContactAdvance);
// const OtherTicketingRedux = connect(mapStateToProps)(OtherTicketing);
// const OtherDetailTicketingRedux = connect(mapStateToProps)(OtherDetailTicketing);
// const OtherTicketReviewRedux = connect(mapStateToProps)(OtherTicketReview);
// const OtherCreateFeedbackRedux = connect(mapStateToProps)(OtherCreateFeedback);
// const OtherCreateRequestRedux = connect(mapStateToProps)(OtherCreateRequest);
// const ChangePasswordRedux = connect(mapStateToProps)(ChangePassword);
// const ChangePasswordCompleteRedux = connect(mapStateToProps)(ChangePasswordComplete);
// const ImageRedux = connect(mapStateToProps)(ImageFeedback);

// const LogoutProcess = (e, props) => {
//     AsyncStorage.getItem('data', (error, result) => {
//         const resultParsed = JSON.parse(result);
//         if(resultParsed !== null){
//             props.navigation.navigate('PinScreen',{username : resultParsed.userName});
//         }
//     })
// };


const InvoiceStack = createStackNavigator({
    Invoice: { 
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
     }
    //  Estimate: { 
    //     screen: EstimateScreen,
    //     navigationOptions: {
    //         header: null
    //     }
    //  },
    //  Report: { 
    //     screen: ReportScreen,
    //     navigationOptions: {
    //         header: null
    //     }
    //  },
    //  More: { 
    //     screen: MoreScreen,
    //     navigationOptions: {
    //         header: null
    //     }
    //  },
  });

    const EstimateStack = createStackNavigator({
        Estimate: { 
            screen: EstimateScreen,
            navigationOptions: {
                header: null
            }
         },
        });

    const ReportStack = createStackNavigator({
        Invoice: { 
            screen: InvoiceScreen,
            navigationOptions: {
                header: null
            }
         },
        });
        
    const MoreStack = createStackNavigator({
        Invoice: { 
            screen: InvoiceScreen,
            navigationOptions: {
                header: null
            }
            },
        });
//   let EquipmentStack = createStackNavigator({
//     EquipmentScreen: { 
//         screen: EquipmentScreenRedux,
//         navigationOptions: {
//             header: null
//         }
//      },
//      EquipmentStatus: {
//         screen: EquipmentStatusRedux,
//         navigationOptions: {
//             header: null
//         }
//     },
//     EquipmentDetail: {
//         screen: EquipmentDetailRedux,
//         navigationOptions: {
//             header: null
//         }
//     },
//     EquipmentCaution: {
//         screen: EquipmentCautionRedux,
//         navigationOptions: {
//             header: null
//         }
//     },
//     EquipmentCharacteristic: {
//         screen: EquipmentCharacteristicRedux,
//         navigationOptions: {
//             header: null
//         }
//     },
//     EquipmentMaps: {
//         screen: EquipmentMapsRedux,
//         navigationOptions: {
//             header: null
//         }
//     },
//     EquipmentWorkingHistory:{
//         screen: EquipmentWorkingHistoryRedux,
//         navigationOptions:{
//             header: null
//         }
//     },

//     EquipmentWorkingHistoryDetail:{
//         screen: EquipmentWorkingHistoryDetailRedux,
//         navigationOptions:{
//             header: null
//         }
//     },

//     EquipmentStatistics:{
//         screen: EquipmentStatisticsRedux,
//         navigationOptions:{
//             header: null
//         }
//     },

//     EquipmentOilHistory:{
//         screen : EquipmentOilHistoryRedux,
//         navigationOptions:{
//             header: null
//         }
//     },

//     EquipmentOilHistoryDetail:{
//         screen : EquipmentOilHistoryDetailRedux,
//         navigationOptions:{
//             header: null
//         }
//     },
    
//   });
//   const NotificationStack = createStackNavigator({
//     Notification: { 
//         screen: NotificationScreenRedux,
//         navigationOptions: {
//             header: null
//         } 
//     },
//     Periodical: {
//         screen: PeriodicalRedux,
//         navigationOptions: {
//             header: null
//         }
//     }
//   });
//   const OrderStack = createStackNavigator({
//     OrderScreen: { 
//         screen: OrderScreenRedux,
//         navigationOptions: {
//             header: null
//         } 
//     },
//     OrderDetailScreen: { 
//         screen: OrderDetailScreenRedux,
//         navigationOptions: {
//             header: null
//         } 
//     },
//     PartDetailScreen: { 
//         screen: PartDetailScreenRedux,
//         navigationOptions: {
//             header: null
//         } 
//     },
//     ClosedOrderScreen: {
//         screen: ClosedOrderScreenRedux,
//         navigationOptions: {
//             header: null
//         } 
//     },
//     WriteReviewScreen: {
//         screen: WriteReviewScreenRedux,
//         navigationOptions: {
//             header: null
//         } 
//     },
//   });
//   const OtherStack = createStackNavigator({
//     Other: { 
//         screen: OtherScreenRedux,
//         navigationOptions: {
//             header: null
//         } 
//     },
//     OtherSetting: {
//         screen: OtherSettingRedux,
//         navigationOptions: {
//             header: null
//         }
//     },
//     OtherContact: {
//         screen: OtherContactRedux,
//         navigationOptions: {
//             header: null
//         }
//     },
//     ChangePassword: {
//         screen: ChangePasswordRedux,
//         navigationOptions: {
//             header: null
//         }
//     },
//     ChangePasswordComplete: {
//         screen: ChangePasswordCompleteRedux,
//         navigationOptions: {
//             header: null
//         }
//     },
//   });

const MainTab = createBottomTabNavigator({
    Invoice: {
        screen: InvoiceStack,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (
                <Text style={focused == false ? styles.text : styles.textActive}>Home</Text>
            ),
            tabBarIcon: ({ focused }) => (
                <Image
                    style={styles.logo}
                    source={focused == false ? require('../../assets/icons/home.png') : require('../../assets/icons/home1.png')}
                />
            )
        },
    },
    Estimate: {
        screen: EstimateStack,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (
                <Text style={focused == false ? styles.text : styles.textActive}>Account</Text>
            ),
            tabBarIcon: ({ focused }) => (
                <Image
                    style={styles.logo}
                    source={focused == false ? require('../../assets/icons/user.png') : require('../../assets/icons/user1.png')}
                />
            )
        },
    },
    Report: {
        screen: ReportStack,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (
                <Text style={focused == false ? styles.text : styles.textActive}>SOS</Text>
            ),
            tabBarIcon: ({ focused }) => (
                <Image
                    style={styles.logo}
                    source={focused == false ? require('../../assets/icons/bell.png') : require('../../assets/icons/bell1.png')}
                />
            )
        },
    },
    More: {
        screen: MoreStack,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (
                <Text style={focused == false ? styles.text : styles.textActive}>Chat</Text>
            ),
            tabBarIcon: ({ focused }) => (
                <Image
                    style={styles.logo}
                    source={focused == false ? require('../../assets/icons/chat.png') : require('../../assets/icons/chat1.png')}
                />
            )
        },
    },
    Mail: {
        screen: MoreStack,
        navigationOptions: {
            tabBarLabel: ({ focused }) => (
                <Text style={focused == false ? styles.text : styles.textActive}>Inbox</Text>
            ),
            tabBarIcon: ({ focused }) => (
                <Image
                    style={styles.logo}
                    source={focused == false ? require('../../assets/icons/email.png') : require('../../assets/icons/email1.png')}
                />
            )
        },
    },
    // Equipment: {
    //     screen: EquipmentStack,
    //     navigationOptions: {
    //         tabBarLabel: ({ focused }) => (
    //             <Text style={focused == false ? styles.text : styles.textActive}>Equipment</Text>
    //         ),
    //         tabBarIcon: ({ focused }) => (
    //             <Image
    //                 style={styles.logo}
    //                 source={focused == false ? require('../../assets/icons/iconEquipmentNonActive.png') : require('../../assets/icons/iconEquipmentActive.png')}
    //             />
    //         )
    //     },
    // },
    // Order: {
    //     screen: OrderStack,
    //     navigationOptions: {
    //         style: {},
    //         tabBarLabel: ({ focused }) => (
    //             <Text style={focused == false ? styles.text : styles.textActive}>Order</Text>
    //         ),
    //         tabBarIcon: ({ focused }) => (
    //             <Image
    //                 style={styles.logo}
    //                 source={focused == false ? require('../../assets/icons/iconOrderNonActive.png') : require('../../assets/icons/iconOrderActive.png')}
    //             />
    //         )
    //     },
    // },
    // Notification: {
    //     screen: NotificationStack,
    //     navigationOptions: {
    //         tabBarLabel: ({ focused }) => (
    //             <Text style={focused == false ? styles.text : styles.textActive}>Notification</Text>
    //         ),
    //         tabBarIcon: ({ focused }) => (
    //             <View style={styles.margin}>
    //                 <View style={styles.marginBottom}>
    //                 <Image
    //                     style={styles.logo}
    //                     source={focused == false ? require('../../assets/icons/iconNotificationNonActive.png') : require('../../assets/icons/iconNotificationActive.png')}
    //                 />
    //                 </View>
    //                 <View style={styles.badgeIcon}>
    //                 <Mybadge/>
    //                 </View>
    //             </View>

    //         )
    //     },
    // },
    // Other: {
    //     screen: OtherStack,
    //     navigationOptions: {
    //         tabBarLabel: ({ focused }) => (
    //             <Text style={focused == false ? styles.text : styles.textActive}>Other</Text>
    //         ),
    //         tabBarIcon: ({ focused }) => (
    //             <Image
    //                 style={styles.logo}
    //                 source={focused == false ? require('../../assets/icons/iconOtherNonActive.png') : require('../../assets/icons/iconOtherActive.png')}
    //             />

    //         )
    //     },
    // },
},
    {
        backBehavior: 'none',
        tabBarOptions: {
            style: {
                backgroundColor: '#fff',
                height: Utils.wp(50),
            },
            labelStyle: {
                fontWeight: '600',
                marginBottom: Utils.wp(7),
            },
            tabStyle: { 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-around'
            }, 
            activeTintColor: colors.yellow800,
            inactiveTintColor: colors.gray
        },
        tabBarPosition: 'bottom',
    })

const MainTabBar = createAppContainer(MainTab)
export default MainTabBar