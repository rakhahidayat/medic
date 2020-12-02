import { StyleSheet, Dimensions } from 'react-native';
import * as Utils from '../../style/Utils';
import colors from '../../style/colors';

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    width: Utils.wp(20),
    height: Utils.wp(20),
    resizeMode: 'contain',
  },
  margin: {
    paddingTop: Utils.wp(25)
  },
  marginBottom: {
    paddingBottom: Utils.wp(25)
  },
  text: {
    textAlign: 'center',
    color: '#7F8090',
    fontSize: Utils.fixedFontSize(12),
  },
  textActive: {
    textAlign: 'center',
    color: '#fa323f',
    fontWeight: 'bold',
    fontSize: Utils.fixedFontSize(12),
  },
  badgeIcon: {
    bottom: Utils.wp(30),
    left: Utils.wp(10),
    fontSize: Utils.fixedFontSize(12),
    position: 'absolute',
  },
});

export default styles;
