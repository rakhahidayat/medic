import { StyleSheet } from 'react-native';
import * as Utils from '../../style/Utils';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#e8e8e8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: Utils.wp(150),
    resizeMode: 'contain',
  },
});

export default styles;
