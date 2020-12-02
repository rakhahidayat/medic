import React, { Component } from 'react';
import styles from './DetailHistory.style';
import { View, Text, Image, TouchableOpacity, FlatList, StatusBar, ScrollView, Alert, BackHandler, SafeAreaView, Dimensions } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import * as Utils from '../../../style/Utils';

class DetailHistoryScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            listOrder: [
                {
                    name: 'Vaksin',
                    status: 'Menunggu Pembayaran',
                    image:require('../../../assets/icons/vaksin1.png'),
                    imageStatus:require('../../../assets/icons/dollar.png'),
                    keterangan: 'Pembayaran Belum di Lunasi',
                    harga: '175.000'
                },
            ],
            info: false,
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
        this.props.navigation.navigate('History');
    };

    detailHistory(){
        this.props.navigation.navigate('DetailHistory');
    }

    viewInfo(){
        if(this.state.info === false){
            this.setState({ info: true })
        } else {
            this.setState({ info: false })
        }
        
    }

    
    render() {
        return (
            <View style={styles.containerMain}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.logoCart} source={require('../../../assets/icons/transaction1.png')}/>
                    <Text style={styles.logoText}>Detail History</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this.nextPage()} style={{ flex: 1, marginTop: Utils.wp(10), alignItems: 'flex-end'}}>
                        <Text style={{ fontSize: Utils.fixedFontSize(12), color: '#000000', fontWeight: 'bold', marginRight: Utils.wp(5)}}>Back</Text>
                        <Image style={styles.logoNext} source={require('../../../assets/icons/arrowleft.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.paddingRight}>
                    <Text style={{ fontSize: Utils.fixedFontSize(12), color: '#000000', margin: Utils.wp(10)}}>{this.state.listOrder[0].status}</Text>
                    <Text style={{ fontSize: Utils.fixedFontSize(12), color: '#000000', margin: Utils.wp(10)}}>Tipe Order : {this.state.listOrder[0].name}</Text>
                    <Text style={{ fontSize: Utils.fixedFontSize(12), color: '#000000', margin: Utils.wp(10)}}>Status : {this.state.listOrder[0].keterangan}</Text>
                    <Text style={{ fontSize: Utils.fixedFontSize(16), color: '#000000', fontWeight: 'bold', margin: Utils.wp(10)}}>Biaya : Rp. {this.state.listOrder[0].harga}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{ flex: 1, fontSize: Utils.fixedFontSize(12), color: '#000000', margin: Utils.wp(10)}}>Bayar melalui Virtual Account </Text>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => this.viewInfo()}>
                            <Image style={{ width: Utils.wp(20),height: Utils.wp(20), alignItems: 'flex-end'}} source={require('../../../assets/icons/info.png')}/>
                        </TouchableOpacity>
                    </View>
                    {this.state.info === true ? <Image style={{ width: Utils.wp(350), height: Utils.wp(380)}} source={require('../../../assets/icons/carabayar.png')}/> : null}
                </View>
                {/* <View> */}
                    
                {/* </View> */}
            </View>
        );
    }
}

export default (DetailHistoryScreen);