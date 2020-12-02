import React, { Component } from 'react';
import styles from './Notification.style';
import { View, Text, Image, TouchableOpacity, FlatList, StatusBar, ScrollView, Alert, BackHandler, SafeAreaView, Dimensions } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import * as Utils from '../../style/Utils';

class NotificationScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            listOrder: [
                {
                    name: 'Vaksin',
                    status: 'Menunggu Pembayaran',
                    image:require('../../assets/icons/vaksin1.png'),
                    imageStatus:require('../../assets/icons/dollar.png')
                },
                {
                    name: 'Rapid Test',
                    status: 'Sudah Dibayar',
                    image:require('../../assets/icons/corona1.png'),
                    imageStatus:require('../../assets/icons/dollar1.png')
                },
                {
                    name: 'Ambulance',
                    status: 'Dalam Penjemputan',
                    image:require('../../assets/icons/ambulanceIcon1.png'),
                    imageStatus:require('../../assets/icons/hourglass.png')
                },
                {
                    name: 'Vaksin',
                    status: 'Menunggu Pembayaran',
                    image:require('../../assets/icons/vaksin1.png'),
                    imageStatus:require('../../assets/icons/dollar.png')
                },
                {
                    name: 'Rapid Test',
                    status: 'Sudah Dibayar',
                    image:require('../../assets/icons/corona1.png'),
                    imageStatus:require('../../assets/icons/dollar1.png')
                },
                {
                    name: 'Ambulance',
                    status: 'Dalam Penjemputan',
                    image:require('../../assets/icons/ambulanceIcon1.png'),
                    imageStatus:require('../../assets/icons/hourglass.png')
                },
                {
                    name: 'Vaksin',
                    status: 'Sudah Dibayar',
                    image:require('../../assets/icons/vaksin1.png'),
                    imageStatus:require('../../assets/icons/dollar1.png')
                },
                {
                    name: 'Rapid Test',
                    status: 'Sudah Dibayar',
                    image:require('../../assets/icons/corona1.png'),
                    imageStatus:require('../../assets/icons/dollar1.png')
                },
                {
                    name: 'Ambulance',
                    status: 'Dalam Penjemputan',
                    image:require('../../assets/icons/ambulanceIcon1.png'),
                    imageStatus:require('../../assets/icons/hourglass.png')
                },
                {
                    name: 'Vaksin',
                    status: 'Menunggu Pembayaran',
                    image:require('../../assets/icons/vaksin1.png'),
                    imageStatus:require('../../assets/icons/dollar.png')
                },
                {
                    name: 'Rapid Test',
                    status: 'Sudah Dibayar',
                    image:require('../../assets/icons/corona1.png'),
                    imageStatus:require('../../assets/icons/dollar1.png')
                },
                {
                    name: 'Ambulance',
                    status: 'Dalam Penjemputan',
                    image:require('../../assets/icons/ambulanceIcon1.png'),
                    imageStatus:require('../../assets/icons/hourglass.png')
                },
            ],
        };
    };

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            if(Platform.OS === 'android') StatusBar.setBackgroundColor('#fff');
          });
    };

    componentWillUnmount() {
        this._navListener.remove();
    };

    nextPage() {
        this.props.navigation.navigate('Invoices');
    };

    
    render() {
        return (
            <View style={styles.containerMain}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.logoCart} source={require('../../assets/icons/bell2.png')}/>
                    <Text style={styles.logoText}>Notification</Text>
                </View>
                <View style={styles.flatlistBox}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <FlatList
                            data={this.state.listOrder}
                            renderItem={({ item }) => (
                                <View style={{ alignItems: 'center', paddingBottom: Utils.wp(20), marginTop: Utils.wp(20), flexDirection: 'row' }}>
                                    <Image style={{  width: Utils.wp(40), height: Utils.wp(40), marginRight: Utils.wp(20), justifyContent: 'flex-end'}} source = {item.image} />
                                    <View style={styles.paddingRight}>
                                        <Text style={{ fontSize: Utils.fixedFontSize(12), color: '#000000', fontWeight: 'bold'}}>{item.status}</Text>
                                        <Text style={{ fontSize: Utils.fixedFontSize(12), color: '#000000', fontWeight: 'bold'}}>Tipe Order : {item.name}</Text>
                                    </View>
                                    <Image style={{  width: Utils.wp(40), height: Utils.wp(40), alignItems:'flex-end'}} source = {item.imageStatus} />
                                </View>
                            )}
                            numColumns={1}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </ScrollView>
                </View>
                {/* <View> */}
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this.nextPage()} style={{ alignItems: 'flex-end'}}>
                        <Text style={{ fontSize: Utils.fixedFontSize(12), color: '#000000', fontWeight: 'bold', marginRight: Utils.wp(5)}}>Back</Text>
                        <Image style={styles.logoNext} source={require('../../assets/icons/arrowleft.png')}/>
                    </TouchableOpacity>
                {/* </View> */}
            </View>
        );
    }
}

export default (NotificationScreen);