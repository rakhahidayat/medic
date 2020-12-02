import React, { Component } from 'react';
import { CheckBox, Text, View, TouchableOpacity, Image, ScrollView, StatusBar, KeyboardAvoidingView } from 'react-native';
import styles from './Login.style';
// import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';
// import { connect } from 'react-redux';
import * as Utils from './../../style/Utils';
// import { firstnameChanged, lastnameChanged, contactChanged, emailChanged, customerChanged, registerUser, dismissRegister } from '../../../redux/screenActions/register/action';
// import ProgressBar from 'react-native-progress/Bar';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastname: '',
            contactNumber: '',
            email: '',
            email2: '',
            username: '',
            password: '',
            passwordConfirm: '',
            emailError: false,
            contactError: false,
            customerCode: '',
            visibleModal: null,
            isVerified: false,
            isSelected: false, 
        };
    };
    componentWillUnmount() {
        this._navListener.remove();
    };

    _onFirstnameChange(text) {
        // this.props.firstnameChanged(text);
    };

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            if( Platform.OS === 'android' ) StatusBar.setBackgroundColor('#FFF');
          });
        // this.props.firstnameChanged('');
        // this.props.lastnameChanged('');
        // this.props.contactChanged('');
        // this.props.customerChanged('');
        // this.props.emailChanged('');
        // this.props.dismissRegister();
    };

    _onLastnameChange(text) {
        // this.props.lastnameChanged(text);
    };

    _onContactChange(text) {
        // this.props.contactChanged(text);
        const regexp = /^\+?\d+$/
        if (regexp.test(text) == false) {
            this.setState({ contactError: true })
        } else {
            this.setState({ contactError: false })
        }
        return regexp.test(text);
    };

    _onEmailChange(text) {
        // this.props.emailChanged(text);
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexp.test(text) == false) {
            this.setState({ emailError: true })
        }
        else {
            this.setState({ emailError: false })
        }
        return regexp.test(text);
    };

    _onCustomerChange(text) {
        // this.props.customerChanged(text);
    };

    // _isDisabled() {
    //     this.props.firstname === '' || this.props.lastname === '' || this.props.contactNumber === '' || this.props.email === '' || this.props.customerCode === ''
    // };

    // _register() {
    //     const { firstname, lastname, contactNumber, email, customerCode } = this.props;
    //     const username = this.props.email;
    //     this.props.navigation.navigate('CaptchaScreen', { username, firstname, lastname, contactNumber, email, customerCode });
    // };

    handleLoginButton() {
        this.props.navigation.navigate('Home');
    }

    _back() {
        this.props.navigation.navigate('Landing')
    };

    handleRegisterButton() {
        this.props.navigation.navigate('RegisterScreen');
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.containerTop} behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <View style={styles.container}>
                <View style={{flexDirection:'row', flex: 0}}>
                    <View style={{flex: 0}}>
                        <TouchableOpacity onPress={this._back.bind(this)}>
                            {/* <Image style={styles.imageBack} source={require('../../../assets/icons/buttonBack.png')} /> */}
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.contain2}>
                    <View stle={styles.paddingProgress}>
                        <ProgressBar 
                            progress={0.3}
                            borderRadius={10}
                            height={Utils.wp(5)}
                            width={Utils.wp(180)}
                            color='#ffd500'
                            unfilledColor='#f1f1f1' 
                            borderColor='#ffffff'
                        />
                    </View>
                    </View> */}
                </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ backgroundColor:"#6d358c", height: Utils.wp(150), width: Utils.wp(150), marginBottom: Utils.wp(20), marginTop: Utils.wp(10), borderRadius: 20, alignSelf: 'center'}}>
                            <Text style={{color:'#fff', textAlign: 'center', top: Utils.wp(50), fontWeight: 'bold', fontSize: Utils.fixedFontSize(40)}}>LOGO</Text>
                        </View>
                        <View style={{backgroundColor: '#fff', padding: Utils.wp(15)}}>
                            <Text style={styles.logoTextLogin}>LOGIN KE AKUN KAMU</Text>
                            <View style={styles.lineStyle} />
                            {/* <TextField
                                    fontSize={Utils.fixedFontSize(14)}
                                    labelPadding={10}
                                    baseColor='#bfbfbf'
                                    type='email'
                                    label='Email'
                                    value={this.state.email}
                                    keyboardType='email-address'
                                    error={this.state.emailError == true && this.state.email != '' ? 'Please enter a valid email' : ''}
                                    onChangeText={(this._onEmailChange.bind(this))}
                                /> */}
                                <PasswordInputText
                                    baseColor='#bfbfbf'
                                    fontSize={Utils.fixedFontSize(14)}
                                    labelPadding={10}
                                    label='Password'
                                    value={this.state.password}
                                />
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.forgetButton}
                                    onPress={() => { this.handleRegisterButton() }}>
                                    <Text style={[styles.textForgot]}>Lupa Password Kamu ?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.buttonLogin}
                                    onPress={() => { this.handleLoginButton() }}>
                                    <Text style={[styles.textButton]}>Login</Text>
                                </TouchableOpacity>
                        </View>
                        {/* onChangeText={this._onPasswordChange.bind(this)}  */}
                        {/* <TextField
                            fontSize={Utils.fixedFontSize(14)}
                            labelPadding={10}
                            baseColor='#bfbfbf'
                            title='Please ask your application admin for Code of Company'
                            label='Enter Customer Code'
                            value={this.props.customerCode}
                            onChangeText={(this._onCustomerChange.bind(this))}
                        /> */}

                        {/* <View>
                            <TouchableOpacity activeOpacity={0.9} 
                                disabled={!((this.props.firstname && this.props.lastname && this.props.contactNumber && this.props.email && this.props.customerCode) && this.state.emailError == false && this.state.contactError == false)}
                                onPress={this._register.bind(this)}>
                                <Text style={this.props.firstname == '' || this.props.lastname == '' || this.props.contactNumber == ''
                                    || this.props.email == '' || this.props.customerCode == '' || this.state.emailError == true || this.state.contactError == true ? styles.buttonTextDisable : styles.buttonTextLogin}>Next</Text>
                            </TouchableOpacity>
                        </View> */}
                        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                            <Text style={styles.textRegist}>Belum punya akun?</Text>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={styles.logInButton}
                                onPress={() => { this.handleRegisterButton() }}>
                                <Text style={[styles.textDaftar]}>Daftar Sekarang</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    };
};

// const mapStateToProps = ({ registerReducerAuth }) => {
//     const { username, firstname, lastname, contactNumber, email, customerCode, error, success, loading } = registerReducerAuth;
//     return { username, firstname, lastname, contactNumber, email, customerCode, error, success, loading };
// };

// export default connect(mapStateToProps, { firstnameChanged, lastnameChanged, contactChanged, emailChanged, customerChanged, registerUser, dismissRegister })(RegisterScreen);

export default (LoginScreen);