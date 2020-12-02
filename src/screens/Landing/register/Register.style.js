import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../style/colors';
import * as Utils from '../../../style/Utils';

const styles = StyleSheet.create({
  containerTop: {
    paddingTop: Utils.wp(20),
    paddingLeft: Utils.wp(10),
    paddingRight: Utils.wp(10),
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#e8e8e8'
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  textPassword: {
    fontSize: Utils.fixedFontSize(12),
  },
  inputBox: {
    height: Utils.hp(50),
    backgroundColor: 'rgba(255,255,255, 0.8)',
    marginBottom: Utils.wp(15),
    borderRadius: Utils.wp(3),
    fontSize: Utils.fixedFontSize(2),
  },
  errorText: {
    fontSize: Utils.fixedFontSize(15),
    fontFamily: 'SFUIDisplay-Thin',
    color: 'red',
  },
  textInput: {
    marginLeft: Utils.wp(10),
    height: Utils.wp(40),
    fontSize: Utils.fixedFontSize(15),
  },
  modalContent: {
    backgroundColor: 'white',
    padding: Utils.wp(22),
    width: Utils.wp(375),
    marginTop: Utils.wp(100),
    paddingTop: Utils.wp(100),
    borderRadius: Utils.wp(4),
    borderColor: 'rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    top: Utils.wp(90),
  },
  modalSuccess: {
    backgroundColor: 'white',
    padding: Utils.wp(22),
    width: Utils.wp(375),
    marginBottom: Utils.wp(30),
    borderRadius: Utils.wp(4),
    position: 'absolute',
    top: Utils.wp(90),
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalClose: {
    backgroundColor: 'white',
    borderRadius: Utils.wp(4),
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: Utils.wp(500),
    marginTop: Utils.wp(100),
  },
  bottomModal: {
    justifyContent: 'flex-end',
    width: Utils.wp(375),
    margin: 0,

  },
  successModal: {
    width: Utils.wp(375),
    margin: 0,
  },
  container: {
    flex: 1,
    marginLeft: Utils.wp(10),
    marginRight: Utils.wp(10),
  },

  imageBack: {
    width: Utils.wp(25),
    resizeMode: 'contain',
  },
  buttonRegister: {
    flex: 0,
    height: Utils.wp(37),
    marginBottom: Utils.wp(5),
    borderRadius: 20,
    backgroundColor: '#6d358c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: Utils.fixedFontSize(12),
    textAlign: 'center',
    fontFamily: 'SFUIText-Bold',
    fontWeight: 'bold',
  },
  button: {
    width: Utils.wp(160),
    height: Utils.wp(45),
    backgroundColor: colors.yellow,
    borderRadius: Utils.wp(4),
    marginVertical: Utils.wp(10),
    paddingVertical: Utils.wp(13),
    marginTop: Utils.wp(20),
  },
  buttonDisable: {
    width: Utils.wp(160),
    height: Utils.wp(40),
    backgroundColor: colors.yellowDisable,
    borderRadius: Utils.wp(4),
    marginVertical: Utils.wp(8),
    paddingVertical: Utils.wp(10),
    marginTop: Utils.wp(20),
  },

  buttonTextDisable: {
    fontSize: Utils.fixedFontSize(18),
    padding: Utils.wp(12),
    color: '#bfbfbf',
    textAlign: 'right',
    fontFamily: 'SFUIDisplay-Medium',
  },
  buttonText: {
    fontSize: Utils.fixedFontSize(14),
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Medium',
  },
  buttonTextLogin: {
    fontSize: Utils.fixedFontSize(18),
    padding: Utils.wp(12),
    color: colors.yellow,
    textAlign: 'right',
    fontFamily: 'SFUIDisplay-Medium',
  },
  signupTextCont: {
    paddingVertical: Utils.wp(24),
    flexDirection: 'row',
  },

  signupText: {
    color: '#212121',
    fontSize: Utils.fixedFontSize(16),
  },

  forgotButtonClose: {
    fontSize: Utils.fixedFontSize(13),
    fontFamily: 'SFUIDisplay-Thin',
  },

  forgotButton: {
    color: colors.yellowText,
    fontSize: Utils.fixedFontSize(12),
    fontFamily: 'SFUIDisplay-Thin',
  },

  forgotButtonSend: {
    marginTop: Utils.wp(2),
    color: colors.yellow,
    fontSize: Utils.fixedFontSize(16),
    fontFamily: 'SFUIDisplay-Thin',
    alignSelf: 'flex-end',
  },
  textLogin: {
    marginTop: Utils.wp(5),
    color: '#212121',
    fontWeight: 'bold',
    fontSize: Utils.fixedFontSize(16),
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Medium',
  },
  textLogin2: {
    marginTop: Utils.wp(5),
    color: '#4a9d8c',
    fontWeight: 'bold',
    fontSize: Utils.fixedFontSize(16),
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Medium',
    textDecorationLine: 'underline'
  },
  logoTextLogin: {
    color: '#212121',
    fontWeight: 'bold',
    fontSize: Utils.fixedFontSize(20),
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Medium',
  },
  logoText: {
    marginTop: Utils.wp(20),
    color: '#212121',
    fontSize: Utils.fixedFontSize(20),
    textAlign: 'left',
    paddingVertical: 2,
    fontFamily: 'SFUIDisplay-Bold',
  },
  logoTextEmail: {
    marginTop: Utils.wp(20),
    color: '#212121',
    fontSize: Utils.fixedFontSize(18),
    textAlign: 'left',
    paddingVertical: Utils.wp(2),
    fontFamily: 'SFUIDisplay-Thin',
  },
  logoTextForgot: {
    marginTop: Utils.wp(20),
    color: '#212121',
    fontSize: Utils.fixedFontSize(25),
    fontWeight: 'bold',
    textAlign: 'left',
    paddingVertical: Utils.wp(2),
    fontFamily: 'SFUIDisplay-Medium',
  },
  logoSuccess: {
    marginTop: Utils.wp(20),
    color: '#212121',
    fontSize: Utils.fixedFontSize(18),
    paddingVertical: Utils.wp(2),
    fontFamily: 'SFUIDisplay-Thin',
    paddingBottom: Utils.wp(400),
  },

  logoLog: {
    color: '#212121',
    fontSize: Utils.fixedFontSize(24),
    textAlign: 'left',
    fontWeight: 'bold',
  },
  paddingProgress: {
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.yellow,
    marginTop: Utils.wp(20),
  },
  contain2: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  lineStyle: {
    borderBottomColor: '#ebe8e8',
    borderBottomWidth: 2,
    width: Dimensions.get('window').width,
    marginTop: Utils.wp(10),
    marginLeft: Utils.wp(-20),
    flex: 0,
  },
  logInButton: {
    flex: 0,
    height: Utils.wp(25),
    paddingLeft: Utils.wp(5),
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
