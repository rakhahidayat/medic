import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Splash.style';
import * as Utils from '../../style/Utils';

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ backgroundColor:"#fff", height: Utils.wp(165), width: Utils.wp(165), borderRadius: 20, marginBottom: Utils.wp(25)}}>
                    <View style={{ backgroundColor:"#fa323f", height: Utils.wp(150), width: Utils.wp(150), borderRadius: 20, marginLeft: 7.5, marginTop: 7.5}}>
                        <Text style={{color:'#fff', textAlign: 'center', top: Utils.wp(55), fontWeight: 'bold', fontSize: Utils.fixedFontSize(25)}}>MEDICAL</Text>
                    </View>
                </View>
                <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Versi 1.01</Text>
                </View>
            </View>
        );
    };
}
export default Splash;
