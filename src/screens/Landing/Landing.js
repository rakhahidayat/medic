import React, { Component } from 'react';
import styles from './Landing.style';
import { View, Text, Image, TouchableOpacity, ImageBackground, StatusBar, ToastAndroid, Alert, BackHandler, SafeAreaView, Dimensions } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import * as Utils from '../../style/Utils';

class LandingScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false
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
        this.props.navigation.navigate('Landing2');
    };

    
    render() {
        return (
            <View style={styles.containerMain}>
                <Image style={styles.logoCart} source={require('../../assets/icons/browser.png')}/>
                <Text style={styles.logoText}>Welcome</Text>
                <Text style={styles.logoText}>to Invoice App</Text>
                <Text style={styles.logoContent}>Create and send professional looking Invoices in under 1 minute.</Text>
                <View style={styles.bottomView}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this.nextPage()}>
                        <Image style={styles.logoNext} source={require('../../assets/icons/next.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default (LandingScreen);