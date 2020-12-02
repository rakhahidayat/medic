import React, { Component } from 'react';
import styles from './Search.style';
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
} from 'react-native';
import Modal from 'react-native-modal'
import { Card, CardItem, Left, Body, } from 'native-base';
import * as Utils from '../../style/Utils';
import SearchBar from '../../components/SearchBar';
import Swiper from 'react-native-swiper';
import ModalFilter from './ModalFilter'
import ModalKategoriFilterA from './ModalKategoriFilterA'

const defaultBrandList = [{
    amount: 0,
    brandCode: "",
    brandImagePath: "",
    brandName: "",
    isCaution: false,
    numberOfNewCaution: 0,
    secondaryPath: "",
}];

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduk: [ 
                {
                    id: 1,
                    nama: 'Ice Cream Stick type A',
                    harga: 'Rp. 4.500'
                },
                {
                    id: 2,
                    nama: 'Ice Cream Stick type B',
                    harga: 'Rp. 8.500'
                },
                {
                    id: 3,
                    nama: 'Ice Cream Stick type C',
                    harga: 'Rp. 4.500'
                },
                {
                    id: 4,
                    nama: 'Ice Cream Stick type D',
                    harga: 'Rp. 8.500'
                },
                {
                    id: 5,
                    nama: 'Ice Cream Stick type E',
                    harga: 'Rp. 4.500'
                },
                {
                    id: 6,
                    nama: 'Ice Cream Stick type F',
                    harga: 'Rp. 8.500'
                },
                {
                    id: 7,
                    nama: 'Freezer Uchida UFH 400C',
                    harga: 'Rp. 2.850.000'
                },
                {
                    id: 8,
                    nama: 'Freezer Uchida UFH 500C',
                    harga: 'Rp. 2.950.000'
                },
                {
                    id: 9,
                    nama: 'Freezer Uchida UFH 600C',
                    harga: 'Rp. 3.250.000'
                },
                {
                    id: 10,
                    nama: 'Freezer Uchida UFH 700C',
                    harga: 'Rp. 5.250.000'
                },
                {
                    id: 11,
                    nama: 'Freezer Uchida UFH 800C',
                    harga: 'Rp. 6.000.000'
                },
                {
                    id: 12,
                    nama: 'Freezer Uchida UFH 900C',
                    harga: 'Rp. 6.250.000'
                }
            ],
            sorted: 0,
            sortedB: 0,
            rangeLow: 0,
            rangeHigh: 0,
            keyword: '',
            label: '',
            value: '',
            visibleModal: null,
            loc: false,
            listLocation: [],
            dataList: [],
            locationFilter: "",
            dismiss: false,
            userCekFlag: 1,
            totalColumn: Dimensions.get('window').width / 140,
            splash: ['EM2', 'OT2', 'NT2', 'PS2', 'PM2'],
            financialType: '',
            financialTypeCode: '',
            backPressed: 0,
            clickcount: 0,
            loadingSkeleton: true,
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    };

    handleBackButtonClick() {
        return true;
    };

    filterButton(){
        this.setState({ visibleModal: 1 });
    }
    
    handleFilterA(){
        this.setState({ visibleModal: 3 });
    }
    handleFilterB(){
        this.setState({ visibleModal: 4 });
    }

    sortButton(){
        this.setState({ visibleModal: 2 });
    }

    handleSearchButton() {
        this.props.navigation.navigate('Home');
    }

    exit = () => {
        this.setState({ visibleModal: false });
    };

    sorter(isi) {
        if (this.state.sorted == isi) {
            this.setState({ sorted: 0 });
        } else {
            this.setState({ sorted: isi });
        }
    };

    sorterB(isi) {
        if (this.state.sortedB == isi) {
            this.setState({ sortedB: 0 });
        } else {
            this.setState({ sortedB: isi });
        }
    };


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={{ backgroundColor:"#fff", flexDirection:'row'}}>
                            <View style={{ flex: 0, backgroundColor:"#6d358c", height: Utils.wp(40), width: Utils.wp(40), marginLeft: Utils.wp(20), marginTop: Utils.wp(10), marginBottom: Utils.wp(10), borderRadius: 10}}>
                                <Text style={{color:'#fff', textAlign: 'center', top: Utils.wp(13), fontWeight: 'bold', fontSize: Utils.fixedFontSize(10)}}>LOGO</Text>
                            </View>
                            <SearchBar placeHolder='Search Unit' value={this.state.keyword}
                                inputContainerStyle={styles.inputContainerStyle} containerStyle={styles.containerStyle} />
                            <Image style={styles.logoCart} source={require('../../assets/icons/iconCart.png')}/>
                            <Image style={styles.logoNotification} source={require('../../assets/icons/iconNotificationNonActive.png')}/>
                        </View>

                        <View style={{flexDirection:'row'}}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.buttonSearch}
                                    onPress={() => { this.filterButton() }}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginTop: Utils.wp(15), marginRight: Utils.wp(5)}}>Filter</Text>
                                        <Image style={styles.imageSortHeader} source={require('../../assets/icons/iconShortByBold.png')} />
                                    </View>
                                </TouchableOpacity>
                            <View style={styles.lineStyle1}/>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={styles.buttonSearch}
                                onPress={() => { this.sortButton() }}>
                                <View style={{flexDirection:'row'}}>
                                        <Text style={{marginTop: Utils.wp(15), marginRight: Utils.wp(5)}}>Urutkan</Text>
                                        <Image style={styles.imageSortHeader} source={require('../../assets/icons/iconShortByBold.png')} />
                                    </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.flatlistBox}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                                <FlatList
                                    data={this.state.listProduk}
                                    renderItem={({ item }) => (
                                        <View style={styles.paddingRight}>
                                            <TouchableHighlight underlayColor="transparent">
                                                <Card style={styles.containerDash} noShadow={true}>
                                                    <Text style={{color: '#cacaca', fontSize: Utils.fixedFontSize(16)}}/><Text style={{color: '#cacaca', fontSize: Utils.fixedFontSize(16)}}/>
                                                    <Text style={styles.textUnits}>Foto</Text>
                                                    <Text style={styles.textUnits}>Produk</Text>
                                                </Card>
                                            </TouchableHighlight>
                                            <Text style={{width: Utils.hp(108), marginLeft: Utils.wp(20), fontSize: Utils.fixedFontSize(10)}}>{item.nama}</Text>
                                            <Text style={{width: Utils.hp(108), marginLeft: Utils.wp(20), fontSize: Utils.fixedFontSize(10), color: '#6d358c', fontWeight: 'bold'}}>Rp. {item.harga}</Text>
                                            <TouchableOpacity
                                                activeOpacity={0.9}
                                                style={styles.buttonBeli}>
                                                <Text style={[styles.textButton]}>Beli</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                    numColumns={2}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </ScrollView>
                        </View>

                        <Modal isVisible={this.state.visibleModal === 1} style={styles.bottomModal} onBackdropPress={() => this.exit()} onBackButtonPress={() => this.exit()}>
                            <ModalFilter sorted={this.state.sorted} sortedB={this.state.sortedB} sorter={(isi) => { this.sorter(isi) }}
                                rangeLow={this.state.rangeLow} rangeHigh={this.state.rangeHigh}
                                sorterB={(isi) => { this.sorterB(isi) }} exit={() => { this.exit() }} 
                                handleFilterA={() => { this.handleFilterA() }} handleFilterB={() => { this.handleFilterB() }} />
                        </Modal>
                        <Modal isVisible={this.state.visibleModal === 3} style={styles.bottomModal} onBackdropPress={() => this.exit()} onBackButtonPress={() => this.exit()}>
                            <ModalKategoriFilterA filterButton={() => { this.filterButton() }}/>
                        </Modal>

                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    };
    
};

export default(SearchScreen);