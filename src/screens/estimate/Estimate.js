import React, { Component } from 'react';
import styles from './Estimate.style';
import {
    View,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    FlatList,
    ScrollView,
    RefreshControl,
    Dimensions,
    BackHandler,
    StatusBar,
    ToastAndroid,
    SafeAreaView,
    Linking
} from 'react-native';
import { Card, CardItem, Left, Body, } from 'native-base';
import * as Utils from '../../style/Utils';
import SearchBar from '../../components/SearchBar';
import Swiper from 'react-native-swiper';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

console.disableYellowBox = true;
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.014;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class EstimateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    };

    handleBackButtonClick() {
        return true;
    };

    handleSearchButton() {
        this.props.navigation.navigate('Search');
    }

    navigateMaps(lat, long){
        var scheme = Platform.OS === 'ios' ? `maps:0,0?q=${lat},${long}` : `geo:${lat},${long}?q=${lat},${long}`;
        Linking.openURL(scheme);
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                    latitude: -6.2715431,
                    longitude: 106.7951503,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                    }}
                >
                <MapView.Marker
                    coordinate={{latitude: -6.2715431,
                    longitude: 106.7951503}}
                    title={"GoWork"}
                    description={"Ambulance"}
                    image={require('../../assets/icons/ambulance2.png')}
                />
                <MapView.Marker
                    coordinate={{latitude: -6.2725071,
                    longitude: 106.7968606}}
                    title={"Upnormal Fatmawati"}
                    description={"Restaurant"}
                    image={require('../../assets/icons/ambulance2.png')}
                />
                <MapView.Marker
                    onPress={() => this.navigateMaps( -6.2706136, 106.7952995)}
                    coordinate={{latitude: -6.2706136,
                    longitude: 106.7952995}}
                    title={"Ambulance"}
                    description={"Gogogo"}
                    image={require('../../assets/icons/ambulance2.png')}
                />
                </MapView>
            </View>
        );
    };
    }

    export default(EstimateScreen);