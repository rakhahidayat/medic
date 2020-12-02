import React, { Component } from 'react';
import styles from './Landing.style';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, StatusBar, ToastAndroid, Alert, BackHandler, SafeAreaView, Dimensions } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import * as Utils from '../../style/Utils';

class LandingScreen4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            text: '',
            setText: '',
            file: [],
            image: [],
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
        this.props.navigation.navigate('Invoice');
    };

    back() {
        this.props.navigation.goBack()
    };
    
    render() {
        return (
            <View style={styles.containerMain}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => this.back()}>
                    <Image style={styles.logoBack} source={require('../../assets/icons/back.png')}/>
                </TouchableOpacity>
                <Text style={styles.logoText2}>All Set !</Text>
                <Text style={styles.logoContent}>You're ready to create your first invoice.</Text>
                <View style={styles.bottomView}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this.nextPage()}>
                        <Image style={styles.logoNext} source={require('../../assets/icons/next.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default (LandingScreen4);