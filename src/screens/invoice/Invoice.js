import React, { Component } from 'react';
import styles from './Invoice.style';
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
    Linking,
    TextInput,
} from 'react-native';
import { Card, CardItem, Left, Body, } from 'native-base';
import * as Utils from '../../style/Utils';
import SearchBar from '../../components/SearchBar';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';

console.disableYellowBox = true;
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.014;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class InvoiceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOrder: [
                {
                    name: 'Vaksin',
                    image:require('../../assets/icons/vaksin.png')
                },
                {
                    name: 'Rapid Test',
                    image:require('../../assets/icons/corona.png'),
                },
                {
                    name: 'PCR',
                    image:require('../../assets/icons/testing.png')
                },
                {
                    name: 'Ambulance',
                    image:require('../../assets/icons/ambulanceIcon.png')
                },
                {
                    name: 'MCU',
                    image:require('../../assets/icons/check-up.png')
                }
            ],
            listVaksin: [
                {
                    id: 0,
                    title: 'Vaksin A',
                    cost: 'Rp. 100.000'
                },
                {
                    id: 1,
                    title: 'Vaksin B',
                    cost: 'Rp. 150.000'
                },
                {
                    id: 2,
                    title: 'Vaksin C',
                    cost: 'Rp. 175.000'
                },
                {
                    id: 3,
                    title: 'Vaksin D',
                    cost: 'Rp. 250.000'
                },
            ],
            listRapid: [
                {
                    id: 0,
                    title: 'Rapid A',
                    cost: 'Rp. 85.000'
                },
                {
                    id: 1,
                    title: 'Rapid B',
                    cost: 'Rp. 160.000'
                },
                {
                    id: 2,
                    title: 'Rapid C',
                    cost: 'Rp. 225.000'
                },
                {
                    id: 3,
                    title: 'Rapid D',
                    cost: 'Rp. 275.000'
                },
            ],
            listPCR: [
                {
                    id: 0,
                    title: 'PCR A',
                    cost: 'Rp. 350.000'
                },
                {
                    id: 1,
                    title: 'PCR B',
                    cost: 'Rp. 460.000'
                },
                {
                    id: 2,
                    title: 'PCR C',
                    cost: 'Rp. 525.000'
                },
                {
                    id: 3,
                    title: 'PCR D',
                    cost: 'Rp. 775.000'
                },
            ],
            listAmbulance: [
                {
                    id: 0,
                    title: 'Ambulance A',
                    cost: 'Rp. 250.000'
                },
                {
                    id: 1,
                    title: 'Ambulance B',
                    cost: 'Rp. 500.000'
                },
                {
                    id: 2,
                    title: 'Ambulance C',
                    cost: 'Rp. 1.000.000'
                },
                {
                    id: 3,
                    title: 'Ambulane D',
                    cost: 'Rp. 2.000.000'
                },
            ],
            listMCU: [
                {
                    id: 0,
                    title: 'MCU A',
                    cost: 'Rp. 550.000'
                },
                {
                    id: 1,
                    title: 'MCU B',
                    cost: 'Rp. 850.000'
                },
                {
                    id: 2,
                    title: 'MCU C',
                    cost: 'Rp. 1.400.000'
                },
                {
                    id: 3,
                    title: 'MCU D',
                    cost: 'Rp. 1.850.000'
                },
            ],
            itemVaksin: 'Order Vaksin',
            tempItemVaksin: '',
            tempIdVaksin: 9,
            idVaksin: 9,

            itemRapid: 'Order Rapid',
            tempItemRapid: '',
            tempIdRapid: 9,
            idRapid: 9,

            itemPCR: 'Order PCR',
            tempItemPCR: '',
            tempIdPCR: 9,
            idPCR: 9,

            itemAmbulance: 'Order Ambulance',
            tempItemAmbulance: '',
            IdAmbulance: 9,
            tempIdAmbulance: 9,

            itemMCU: 'Order MCU',
            tempItemMCU: '',
            tempIdMCU: 9,
            idMCU: 9,

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
            order: '',
            dateVaksin: '',
            dateRapid: '',
            datePCR: '',
            dateAmbulance: '',
            dateMCU: '',
            opsi: 0,
            language: 'java',
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

    componentDidMount(){
        this.props.navigation.navigate('Invoice');
    }

    _onOrderChange(text) {
        this.setState({ order: text});
    };

    _onDateChange(text) {
        this.setState({ date: text})
    };

    openMenu(){
        this.setState({ visible: true })
    }

    closeMenu(){
        this.setState({ visible: false })
    }

    _getOptionList() {
        return this.OPTIONLIST;
      }
     
      _canada(province) {
     
        this.setState({
          ...this.state,
          canada: province
        });
      }

    renderBiaya(){
        if(this.state.tempIdVaksin !== 9){
            return(
                <Text style={{ fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(10) }}>Harga : {this.state.listVaksin[this.state.tempIdVaksin].cost}</Text>
            )
        }
        if(this.state.tempIdRapid !== 9){
            return(
                <Text style={{ fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(10) }}>Harga : {this.state.listRapid[this.state.tempIdRapid].cost}</Text>
            )
        }
        if(this.state.tempIdPCR !== 9){
            return(
                <Text style={{ fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(10) }}>Harga : {this.state.listPCR[this.state.tempIdPCR].cost}</Text>
            )
        }
        if(this.state.tempIdAmbulance !== 9){
            return(
                <Text style={{ fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(10) }}>Harga : {this.state.listAmbulance[this.state.tempIdAmbulance].cost}</Text>
            )
        }
        if(this.state.tempIdMCU !== 9){
            return(
                <Text style={{ fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(10) }}>Harga : {this.state.listMCU[this.state.tempIdMCU].cost}</Text>
            )
        }
    }

    _renderVaksin(){
        return(
            <View style={{ margin: Utils.wp(10) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1, fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(20) }}>Order Vaksin</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this._opsi(0)}>
                        <Text style={{ flex: 1, alignItems: 'flex-end', fontWeight: 'bold', }}>X</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({ visibleModal: 2 })}>
                    <Text style={{ fontSize: Utils.fixedFontSize(14), borderWidth: 1, borderRadius: 10, marginTop: Utils.wp(10), paddingLeft: Utils.wp(10), paddingTop: Utils.wp(10), paddingBottom: Utils.wp(10) }}>{this.state.itemVaksin}</Text>
                </TouchableOpacity>
                {this.renderBiaya()}
                    <DatePicker
                        onOpenModal
                        style={{ width: 250, marginTop: 20 }}
                        date={this.state.dateVaksin}
                        mode="date"
                        placeholder="Select date"
                        format="dddd, DD MMM YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 15
                            },
                            dateInput: {
                                marginLeft: 50,
                                borderWidth: 0
                            }
                        }}
                        onDateChange={(date) => { this.setState({ dateVaksin: date }) }}
                    />
            </View>
        )
    }

    _renderRapid(){
        return(
            <View style={{ margin: Utils.wp(10) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1, fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(20) }}>Order Rapid Test</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this._opsi(0)}>
                        <Text style={{ flex: 1, alignItems: 'flex-end', fontWeight: 'bold', }}>X</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({ visibleModal: 3 })}>
                    <Text style={{ fontSize: Utils.fixedFontSize(14), borderWidth: 1, borderRadius: 10, marginTop: Utils.wp(10), paddingLeft: Utils.wp(10), paddingTop: Utils.wp(10), paddingBottom: Utils.wp(10) }}>{this.state.itemRapid}</Text>
                </TouchableOpacity>
                {this.renderBiaya()}
                <DatePicker
                        onOpenModal
                        style={{ width: 250, marginTop: 20 }}
                        date={this.state.dateRapid}
                        mode="date"
                        placeholder="Select date"
                        format="dddd, DD MMM YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 15
                            },
                            dateInput: {
                                marginLeft: 50,
                                borderWidth: 0
                            }
                        }}
                        onDateChange={(date) => { this.setState({ dateRapid: date }) }}
                    />
            </View>
        )
    }

    _renderPCR(){
        return(
            <View style={{ margin: Utils.wp(10) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1, fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(20) }}>Order PCR</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this._opsi(0)}>
                        <Text style={{ flex: 1, alignItems: 'flex-end', fontWeight: 'bold', }}>X</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({ visibleModal: 4 })}>
                    <Text style={{ fontSize: Utils.fixedFontSize(14), borderWidth: 1, borderRadius: 10, marginTop: Utils.wp(10), paddingLeft: Utils.wp(10), paddingTop: Utils.wp(10), paddingBottom: Utils.wp(10) }}>{this.state.itemPCR}</Text>
                </TouchableOpacity>
                {this.renderBiaya()}
                <DatePicker
                        onOpenModal
                        style={{ width: 250, marginTop: 20 }}
                        date={this.state.datePCR}
                        mode="date"
                        placeholder="Pilih Jadwal"
                        format="dddd, DD MMM YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 15
                            },
                            dateInput: {
                                marginLeft: 50,
                                borderWidth: 0
                            }
                        }}
                        onDateChange={(date) => { this.setState({ datePCR: date }) }}
                    />
            </View>
        )
    }

    _renderAmbulance(){
        return(
            <View style={{ margin: Utils.wp(10) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1, fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(20) }}>Order Ambulance</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this._opsi(0)}>
                        <Text style={{ flex: 1, alignItems: 'flex-end', fontWeight: 'bold', }}>X</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({ visibleModal: 5 })}>
                    <Text style={{ fontSize: Utils.fixedFontSize(14), borderWidth: 1, borderRadius: 10, marginTop: Utils.wp(10), paddingLeft: Utils.wp(10), paddingTop: Utils.wp(10), paddingBottom: Utils.wp(10) }}>{this.state.itemAmbulance}</Text>
                </TouchableOpacity>
                {this.renderBiaya()}
                <DatePicker
                        onOpenModal
                        style={{ width: 250, marginTop: 20 }}
                        date={this.state.dateAmbulance}
                        mode="date"
                        placeholder="Pilih Jadwal"
                        format="dddd, DD MMM YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 15
                            },
                            dateInput: {
                                marginLeft: 50,
                                borderWidth: 0
                            }
                        }}
                        onDateChange={(date) => { this.setState({ dateAmbulance: date }) }}
                    />
            </View>
        )
    }

    _renderMCU(){
        return(
            <View style={{ margin: Utils.wp(10) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1, fontSize: Utils.fixedFontSize(20), fontWeight: 'bold', marginBottom: Utils.wp(10), marginTop: Utils.wp(20) }}>Order Medical Check Up</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this._opsi(0)}>
                        <Text style={{ flex: 1, alignItems: 'flex-end', fontWeight: 'bold', }}>X</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({ visibleModal: 6 })}>
                    <Text style={{ fontSize: Utils.fixedFontSize(14), borderWidth: 1, borderRadius: 10, marginTop: Utils.wp(10), paddingLeft: Utils.wp(10), paddingTop: Utils.wp(10), paddingBottom: Utils.wp(10) }}>{this.state.itemMCU}</Text>
                </TouchableOpacity>
                {this.renderBiaya()}
                <DatePicker
                        onOpenModal
                        style={{ width: 250, marginTop: 20 }}
                        date={this.state.dateMCU}
                        mode="date"
                        placeholder="Pilih Jadwal"
                        format="dddd, DD MMM YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 15
                            },
                            dateInput: {
                                marginLeft: 50,
                                borderWidth: 0
                            }
                        }}
                        onDateChange={(date) => { this.setState({ dateMCU: date }) }}
                    />
            </View>
        )
    }

    _renderWelcome(){
        return(
            <View>
                <Text style={{color: '#212121',fontSize: Utils.fixedFontSize(25),fontWeight: 'bold',textAlign: 'left',fontFamily: 'SFUIText-Regular',marginTop: Utils.wp(20),marginLeft: Utils.wp(10)}}>Silahkan Pilih Layanan</Text>
            </View>
        )
    }

    _renderApply(){
        return(
            <TouchableOpacity style={this.state.tempIdVaksin !== 9 || this.state.tempIdRapid !== 9 || this.state.tempIdPCR !== 9 || this.state.tempIdAmbulance !== 9 || this.state.tempIdMCU !== 9 ? styles.buttonApplyYesKosong : styles.buttonApplyYes} onPress={() => this.applyDaftar(this.state.order, this.state.dateVaksin, this.state.dateRapid, this.state.dateAmbulance)} >
                <Text style={styles.textApply}>{this.state.opsi === 1 || this.state.opsi === 2 || this.state.opsi === 3 || this.state.opsi === 5 ? 'DAFTAR' : this.state.opsi === 4 ? 'PICK UP' : null}</Text>
            </TouchableOpacity>
        )
    }

    applyDaftar(order, date){
        if(this.state.opsi === 1){
            this.setState({ order: '', dateVaksin: '', visibleModal: 1 })
        // this.onRefresh();
        } else if(this.state.opsi === 2){
            this.setState({ order: '', dateRapid: '', visibleModal: 1 })
        } else if(this.state.opsi === 3){
            this.setState({ order: '', datePcr: '', visibleModal: 1 })
        } else if(this.state.opsi === 4){
            this.setState({ order: '', dateAmbulance: '', visibleModal: 1 })
        } else if(this.state.opsi === 5){
            this.setState({ order: '', dateMcu: '', visibleModal: 1 })
        }
        
    }

    _opsi(name){
        if(name === 'Vaksin'){
            this.setState({ opsi: 1 })
            this.state.listOrder[0].image = require('../../assets/icons/vaksin1.png')
            this.state.listOrder[1].image = require('../../assets/icons/corona.png')
            this.state.listOrder[2].image = require('../../assets/icons/testing.png')
            this.state.listOrder[3].image = require('../../assets/icons/ambulanceIcon.png')
            this.state.listOrder[4].image = require('../../assets/icons/check-up.png')
        } else if(name === 'Rapid Test'){
            this.setState({ opsi: 2 })
            this.state.listOrder[0].image = require('../../assets/icons/vaksin.png')
            this.state.listOrder[1].image = require('../../assets/icons/corona1.png')
            this.state.listOrder[2].image = require('../../assets/icons/testing.png')
            this.state.listOrder[3].image = require('../../assets/icons/ambulanceIcon.png')
            this.state.listOrder[4].image = require('../../assets/icons/check-up.png')
        } else if(name === 'PCR'){
            this.setState({ opsi: 3 })
            this.state.listOrder[0].image = require('../../assets/icons/vaksin.png')
            this.state.listOrder[1].image = require('../../assets/icons/corona.png')
            this.state.listOrder[2].image = require('../../assets/icons/testing1.png')
            this.state.listOrder[3].image = require('../../assets/icons/ambulanceIcon.png')
            this.state.listOrder[4].image = require('../../assets/icons/check-up.png')
        } else if(name === 'Ambulance'){
            this.setState({ opsi: 4 })
            this.state.listOrder[0].image = require('../../assets/icons/vaksin.png')
            this.state.listOrder[1].image = require('../../assets/icons/corona.png')
            this.state.listOrder[2].image = require('../../assets/icons/testing.png')
            this.state.listOrder[3].image = require('../../assets/icons/ambulanceIcon1.png')
            this.state.listOrder[4].image = require('../../assets/icons/check-up.png')
        } else if(name === 'MCU'){
            this.setState({ opsi: 5 })
            this.state.listOrder[0].image = require('../../assets/icons/vaksin.png')
            this.state.listOrder[1].image = require('../../assets/icons/corona.png')
            this.state.listOrder[2].image = require('../../assets/icons/testing.png')
            this.state.listOrder[3].image = require('../../assets/icons/ambulanceIcon.png')
            this.state.listOrder[4].image = require('../../assets/icons/check-up1.png')
        } else {
            this.setState({ opsi: 0 })
            this.state.listOrder[0].image = require('../../assets/icons/vaksin.png')
            this.state.listOrder[1].image = require('../../assets/icons/corona.png')
            this.state.listOrder[2].image = require('../../assets/icons/testing.png')
            this.state.listOrder[3].image = require('../../assets/icons/ambulanceIcon.png')
            this.state.listOrder[4].image = require('../../assets/icons/check-up.png')
        }
    }

    exit = () =>{
        this.setState({visibleModal : false, itemVaksin: 'Order Vaksin', itemRapid: 'Order Rapid', itemPCR: 'Order PCR', itemAmbulance: 'Order Ambulance', itemMCU: 'Order MCU',
        tempItemVaksin: '', tempIdVaksin: 9, tempItemRapid: '', tempIdRapid: 9,
        tempItemPCR: '', tempIdPCR: 9, tempItemAmbulance: '', tempIdAmbulance: 9,
        tempItemMCU: '', tempIdMCU: 9
    })
    }

    notifPage() {
        this.props.navigation.navigate('Notification');
    };

    historyPage(){
        this.props.navigation.navigate('History');
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ borderRadius: 10, margin: Utils.wp(5), backgroundColor: "#fa323f", flexDirection: 'row', justifyContent: 'flex-end', paddingRight: Utils.wp(10), paddingBottom: Utils.wp(10) }}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => this.notifPage()}>
                            <Image style={styles.logoCart} source={require('../../assets/icons/bell.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => this.historyPage()}>
                            <Image style={styles.logoCart} source={require('../../assets/icons/transaction.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    </View>

                    <View style={styles.flatlistBox}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <FlatList
                                data={this.state.listOrder}
                                renderItem={({ item }) => (
                                    <View style={{ alignItems: 'center', paddingBottom: Utils.wp(20) }}>
                                        <View style={styles.paddingRight}>
                                            <TouchableOpacity activeOpacity={0.9} onPress={() => this._opsi(item.name)}
                                            >
                                                <Image style={styles.logoFeature} source = {item.image} />
                                            </TouchableOpacity>
                                            <Text style={{ fontSize: Utils.fixedFontSize(12), color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
                                        </View>
                                        {/* <View style={styles.paddingRight}>
                                            <Text style={{ marginRight: '40%', fontSize: Utils.fixedFontSize(12), color: '#7f8090' }}>IN - 005 / 12-112-2018</Text>
                                            <Text style={{ marginLeft: Utils.wp(20), fontSize: Utils.fixedFontSize(12), color: '#00c918', fontWeight: 'bold', textAlign: 'right' }}>Paid</Text>
                                        </View> */}
                                    </View>
                                )}
                                numColumns={4}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </ScrollView>
                    </View>

                    {this.state.opsi === 1 ? this._renderVaksin() : this.state.opsi === 2 ? this._renderRapid() : this.state.opsi === 3 ? this._renderPCR() : this.state.opsi === 4 ? this._renderAmbulance() : this.state.opsi === 5 ? this._renderMCU() : this._renderWelcome()}
                    {this.state.opsi !== 0 ? this._renderApply() : null}

                    <Modal isVisible={this.state.visibleModal === 1} style={styles.bottomModal} onBackdropPress={() => this.exit()} onBackButtonPress={()=>this.exit()} avoidKeyboard hasBackdrop propagateSwipe>
                        <SafeAreaView style={styles.modalPopup}>
                            <View style={styles.headerModelContainer}>
                                <View style={styles.headerBack}>
                                    <TouchableOpacity onPress={() => this.exit()}>
                                        <Image style={styles.logoCloseModal} source={require('../../assets/icons/iconCloseCircle.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.headerSort}>
                                    <Text style={styles.textSort}>Order Sukses</Text>
                                </View>
                            </View>
                            <Image style={{width: Utils.wp(80),height: Utils.wp(80), marginBottom: Utils.wp(25)}} 
                            source = {require('../../assets/icons/CentangHijau.png')} />
                            <Text style={{fontSize: Utils.fixedFontSize(18),fontFamily: 'SFUIDisplay-Bold',}}>Menunggu Konfirmasi</Text>
                        </SafeAreaView>
                    </Modal>

                    <Modal isVisible={this.state.visibleModal === 2} style={styles.bottomModal} onBackdropPress={() => this.exit()} onBackButtonPress={()=>this.exit()} avoidKeyboard hasBackdrop propagateSwipe>
                        <SafeAreaView style={styles.modalPopup}>
                            <View style={styles.headerModelContainer}>
                                <View style={styles.headerBack}>
                                    <TouchableOpacity onPress={() => this.exit()}>
                                        <Image style={styles.logoCloseModal} source={require('../../assets/icons/iconCloseCircle.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.headerSort}>
                                    <Text style={styles.textSort}>Pilih Vaksin</Text>
                                </View>
                            </View>
                            <FlatList
                                data={this.state.listVaksin}
                                renderItem={({ item }) => (
                                    <View style={{ alignItems: 'center', paddingBottom: Utils.wp(20) }}>
                                        <View style={styles.paddingRight}>
                                            <TouchableOpacity onPress={() => this.setState({ tempItemVaksin: item.title, tempIdVaksin: item.id })}>
                                                <Text style={this.state.tempItemVaksin === item.title ? styles.textListActive : styles.textList}>{item.title}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                                numColumns={1}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            <TouchableOpacity style={styles.buttonApplyYes2} onPress={() => this.setState({ itemVaksin: this.state.tempItemVaksin, idVaksin: this.state.tempItemVaksin, visibleModal: false })} >
                                <Text style={styles.textApply}>OK</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </Modal>

                    <Modal isVisible={this.state.visibleModal === 3} style={styles.bottomModal} onBackdropPress={() => this.exit()} onBackButtonPress={()=>this.exit()} avoidKeyboard hasBackdrop propagateSwipe>
                        <SafeAreaView style={styles.modalPopup}>
                            <View style={styles.headerModelContainer}>
                                <View style={styles.headerBack}>
                                    <TouchableOpacity onPress={() => this.exit()}>
                                        <Image style={styles.logoCloseModal} source={require('../../assets/icons/iconCloseCircle.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.headerSort}>
                                    <Text style={styles.textSort}>Pilih Rapid Test</Text>
                                </View>
                            </View>
                            <FlatList
                                data={this.state.listRapid}
                                renderItem={({ item }) => (
                                    <View style={{ alignItems: 'center', paddingBottom: Utils.wp(20) }}>
                                        <View style={styles.paddingRight}>
                                            <TouchableOpacity onPress={() => this.setState({ tempItemRapid: item.title, tempIdRapid: item.id })}>
                                                <Text style={this.state.tempItemRapid === item.title ? styles.textListActive : styles.textList}>{item.title}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                                numColumns={1}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            <TouchableOpacity style={styles.buttonApplyYes2} onPress={() => this.setState({ itemRapid: this.state.tempItemRapid, idRapid: this.state.tempItemRapid, visibleModal: false })} >
                                <Text style={styles.textApply}>OK</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </Modal>

                    <Modal isVisible={this.state.visibleModal === 4} style={styles.bottomModal} onBackdropPress={() => this.exit()} onBackButtonPress={()=>this.exit()} avoidKeyboard hasBackdrop propagateSwipe>
                        <SafeAreaView style={styles.modalPopup}>
                            <View style={styles.headerModelContainer}>
                                <View style={styles.headerBack}>
                                    <TouchableOpacity onPress={() => this.exit()}>
                                        <Image style={styles.logoCloseModal} source={require('../../assets/icons/iconCloseCircle.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.headerSort}>
                                    <Text style={styles.textSort}>Pilih PCR</Text>
                                </View>
                            </View>
                            <FlatList
                                data={this.state.listPCR}
                                renderItem={({ item }) => (
                                    <View style={{ alignItems: 'center', paddingBottom: Utils.wp(20) }}>
                                        <View style={styles.paddingRight}>
                                            <TouchableOpacity onPress={() => this.setState({ tempItemPCR: item.title, tempIdPCR: item.id })}>
                                                <Text style={this.state.tempItemPCR === item.title ? styles.textListActive : styles.textList}>{item.title}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                                numColumns={1}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            <TouchableOpacity style={styles.buttonApplyYes2} onPress={() => this.setState({ itemPCR: this.state.tempItemPCR, idPCR: this.state.tempItemPCR, visibleModal: false })} >
                                <Text style={styles.textApply}>OK</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </Modal>

                    <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal} onBackdropPress={() => this.exit()} onBackButtonPress={()=>this.exit()} avoidKeyboard hasBackdrop propagateSwipe>
                        <SafeAreaView style={styles.modalPopup}>
                            <View style={styles.headerModelContainer}>
                                <View style={styles.headerBack}>
                                    <TouchableOpacity onPress={() => this.exit()}>
                                        <Image style={styles.logoCloseModal} source={require('../../assets/icons/iconCloseCircle.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.headerSort}>
                                    <Text style={styles.textSort}>Pilih Ambulance</Text>
                                </View>
                            </View>
                            <FlatList
                                data={this.state.listAmbulance}
                                renderItem={({ item }) => (
                                    <View style={{ alignItems: 'center', paddingBottom: Utils.wp(20) }}>
                                        <View style={styles.paddingRight}>
                                            <TouchableOpacity onPress={() => this.setState({ tempItemAmbulance: item.title, tempIdAmbulance: item.id })}>
                                                <Text style={this.state.tempItemAmbulance === item.title ? styles.textListActive : styles.textList}>{item.title}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                                numColumns={1}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            <TouchableOpacity style={styles.buttonApplyYes2} onPress={() => this.setState({ itemAmbulance: this.state.tempItemAmbulance, IdAmbulance: this.state.tempItemAmbulance, visibleModal: false })} >
                                <Text style={styles.textApply}>OK</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </Modal>

                    <Modal isVisible={this.state.visibleModal === 6} style={styles.bottomModal} onBackdropPress={() => this.exit()} onBackButtonPress={()=>this.exit()} avoidKeyboard hasBackdrop propagateSwipe>
                        <SafeAreaView style={styles.modalPopup}>
                            <View style={styles.headerModelContainer}>
                                <View style={styles.headerBack}>
                                    <TouchableOpacity onPress={() => this.exit()}>
                                        <Image style={styles.logoCloseModal} source={require('../../assets/icons/iconCloseCircle.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.headerSort}>
                                    <Text style={styles.textSort}>Pilih MCU</Text>
                                </View>
                            </View>
                            <FlatList
                                data={this.state.listMCU}
                                renderItem={({ item }) => (
                                    <View style={{ alignItems: 'center', paddingBottom: Utils.wp(20) }}>
                                        <View style={styles.paddingRight}>
                                            <TouchableOpacity onPress={() => this.setState({ tempItemMCU: item.title, tempIdMCU: item.id })}>
                                                <Text style={this.state.tempItemMCU=== item.title ? styles.textListActive : styles.textList}>{item.title}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                                numColumns={1}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            <TouchableOpacity style={styles.buttonApplyYes2} onPress={() => this.setState({ itemMCU: this.state.tempItemMCU, idMCU: this.state.tempItemMCU, visibleModal: false })} >
                                <Text style={styles.textApply}>OK</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </Modal>

                </ScrollView>
                {/* <View style={styles.bottomView}>
                    <TouchableOpacity activeOpacity={0.9}>
                        <Image style={styles.logoNext} source={require('../../assets/icons/add.png')} />
                    </TouchableOpacity>
                </View> */}
            </View>
        );
    };
    }

    export default(InvoiceScreen);