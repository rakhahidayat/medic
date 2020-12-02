import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, Image, ScrollView, ActivityIndicator, RefreshControl, FlatList, BackHandler, Dimensions } from 'react-native';
import styles from './Search.style';
import RangeSlider from 'rn-range-slider';
import * as Utils from '../../style/Utils';

class ModalFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rangeLow: 0,
            rangeHigh: 0,
        }
    }

    render() {
        const {exit, handleFilterA, sorter, sorterB, sorted, sortedB, rangeLow, rangeHigh} = this.props;
        return(
            <View style={styles.modalContent}>
                <View style={styles.headerModelContainer}>
                    <View style={styles.headerBack}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => exit()}>
                            <Image style={styles.logoClose} source={require('../../assets/icons/iconCloseCircle.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerFilter}>
                        <Text style={styles.textTitle}>Filter</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: '#eeeeee'}}>
                    <Text style={styles.textRegist}>Kategori Filter A</Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.logInButton}
                        onPress={() => { handleFilterA() }}>
                        <Text style={[styles.textDaftar]}>Lihat Semua</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerModel}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => sorter(1)} style={sorted == 1 ? styles.headerBorderItemActive : styles.headerBorderItem}>
                        <View style={styles.headerFilterItem}>
                            <Text style={sorted == 1 ? styles.sortOptionTextActive : styles.sortOptionText}>Sub Kategori A1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => sorter(2)} style={sorted == 2 ? styles.headerBorderItemActive : styles.headerBorderItem}>
                        <View style={styles.headerFilterItem}>
                        <Text style={sorted == 2 ? styles.sortOptionTextActive : styles.sortOptionText}>Sub Kategori A2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerModel}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => sorter(3)} style={sorted == 3 ? styles.headerBorderItemActive : styles.headerBorderItem}>
                        <View style={styles.headerFilterItem}>
                        <Text style={sorted == 3 ? styles.sortOptionTextActive : styles.sortOptionText}>Sub Kategori A3</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', backgroundColor: '#eeeeee'}}>
                    <Text style={styles.textRegist}>Kategori Filter B</Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.logInButton}
                        onPress={() => { handleFilterA() }}>
                        <Text style={[styles.textDaftar]}>Lihat Semua</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerModel}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => sorterB(1)} style={sortedB == 1 ? styles.headerBorderItemActive : styles.headerBorderItem}>
                        <View style={styles.headerFilterItem}>
                            <Text style={sortedB == 1 ? styles.sortOptionTextActive : styles.sortOptionText}>Sub Kategori B1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => sorterB(2)} style={sortedB == 2 ? styles.headerBorderItemActive : styles.headerBorderItem}>
                        <View style={styles.headerFilterItem}>
                        <Text style={sortedB == 2 ? styles.sortOptionTextActive : styles.sortOptionText}>Sub Kategori B2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerModel}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => sorterB(3)} style={sortedB == 3 ? styles.headerBorderItemActive : styles.headerBorderItem}>
                        <View style={styles.headerFilterItem}>
                        <Text style={sortedB == 3 ? styles.sortOptionTextActive : styles.sortOptionText}>Sub Kategori B3</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', backgroundColor: '#eeeeee'}}>
                    <Text style={styles.textRegist}>Harga</Text>
                </View>
                <View style={{flex: 1, marginLeft: Utils.wp(20)}}>
                <RangeSlider
                    style={{flex: 1, width: Dimensions.get('window').width - 40, height: 80}}
                    gravity={'center'}
                    min={5000}
                    max={5000000}
                    step={100}
                    selectionColor="#6d358c"
                    blankColor="#cacaca"
                    onValueChanged={(low, high, fromUser) => {
                        this.setState({rangeLow: low, rangeHigh: high})
                    }}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.textHargaMin}>Harga Minimum</Text>
                    <Text style={styles.textHargaMax}>Harga Maksimum</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.valueHargaMin}>{this.state.rangeLow}</Text>
                    <Text style={{marginTop: Utils.wp(-70), flex: 0, fontSize: Utils.fixedFontSize(14), fontFamily: 'SFUIDisplay-Medium', fontWeight: 'bold'}}>-</Text>
                    <Text style={styles.valueHargaMax}>{this.state.rangeHigh}</Text>
                </View>
            </View>
        )
    }

};

export default ModalFilter;