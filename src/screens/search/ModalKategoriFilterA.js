import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, Image, ScrollView, ActivityIndicator, RefreshControl, FlatList, BackHandler, Dimensions } from 'react-native';
import styles from './Search.style';
import * as Utils from '../../style/Utils';

class ModalKategoriFilterA extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rangeLow: 0,
            rangeHigh: 0,
        }
    }

    render() {
        const {filterButton} = this.props;
        return(
            <View style={styles.modalContent}>
                <View style={styles.headerModelContainer}>
                    <View style={styles.headerBack}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => filterButton()}>
                            <Image style={styles.logoClose} source={require('../../assets/icons/iconCloseCircle.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerFilter}>
                        <Text style={styles.textTitle}>Kategori Filter A</Text>
                    </View>
                </View>
                <View style={styles.lineStyle2}/>
                <Text style={styles.textKategori}>Cari Kategori</Text>
            </View>
        )
    }

};

export default ModalKategoriFilterA;