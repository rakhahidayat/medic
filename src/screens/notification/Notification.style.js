import { StyleSheet, Dimensions } from 'react-native';
import * as Utils from '../../style/Utils';

const dimensionsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
    fontSize: Utils.fixedFontSize(12),
  },
  logo: {
    width: Utils.wp(150),
    height: dimensionsHeight,
    resizeMode: 'contain',
    position: 'absolute',
  },
  backgroundLogo: {
    width: Dimensions.get('window').width,
    height: dimensionsHeight,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: -1
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  buttonContainerRegister: {
    alignItems: 'flex-start',
    flex: 1,
  },
  logInButton: {
    flex: 0,
    height: Utils.wp(37),
    paddingLeft: Utils.wp(100),
    paddingRight: Utils.wp(100),
    marginBottom: Utils.wp(30),
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#2a2a2a',
    fontSize: Utils.fixedFontSize(12),
    textAlign: 'center',
    fontFamily: 'SFUIText-Bold',
    fontWeight: 'bold',
  },
  textButtonRegister: {
    color: '#2a2a2a',
    fontSize: Utils.fixedFontSize(12),
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Medium',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex: 1,
  },
  logoCart: {
    width: Utils.wp(40),
    height: Utils.wp(40),
    marginTop: Utils.wp(20),
    marginBottom: Utils.wp(30),
  },
  logoBack: {
    width: Utils.wp(25),
    height: Utils.wp(25),
    marginBottom: Utils.wp(40),
  },
  logoNext: {
    width: Utils.wp(40),
    height: Utils.wp(40),
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoOuter: {
    width: Utils.wp(60),
    height: Utils.wp(60),
    backgroundColor: '#7f8090',
    borderRadius: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: Utils.wp(40)
  },
  logoImage: {
    alignSelf: 'center',
    width: Utils.wp(30),
    height: Utils.wp(30),
  },
  logoText: {
    color: '#212121',
    fontSize: Utils.fixedFontSize(25),
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'SFUIText-Regular',
    marginTop: Utils.wp(20),
    marginLeft: Utils.wp(20)
  },
  logoText2: {
    color: '#212121',
    fontSize: Utils.fixedFontSize(18),
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'SFUIText-Regular',
  },
  logoContent: {
    color: '#7f8090',
    fontSize: Utils.fixedFontSize(14),
    textAlign: 'left',
    fontFamily: 'SFUIText-Regular',
    marginTop: Utils.wp(20)
  },
  containerMain: {
    flex: 1,
    margin: Utils.wp(20),
  },
  bottomView: {
    width: '100%',
    height: Utils.wp(50),
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  textField: {
    marginTop: Utils.wp(40),
    height: Utils.wp(20),
    color: '#7f8090',
    borderColor: '#7f8090',
  },
  paddingRight: {
    flex: 2,
    paddingRight: Utils.pd(0.3),
    paddingBottom: Utils.wp(5),
    flexDirection: 'column'
  },
  flatlistBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: Utils.wp(5),
    borderRadius: 10
  },
});

export default styles;
