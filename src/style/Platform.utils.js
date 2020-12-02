import { Platform, Dimensions } from 'react-native';
import Constants from './Constants.platform';

export const isAndroid = () => Platform.OS === Constants.PLATFORM.ANDROID;
export const isIOS = () => Platform.OS === Constants.PLATFORM.IOS;
export const isNative = () => Platform.OS === Constants.PLATFORM.ANDROID || Platform.OS === Constants.PLATFORM.IOS;
export const isWeb = () => Platform.OS === Constants.PLATFORM.WEB;
export const isMobileWeb = () => isWeb() && Dimensions.get('window').width <= 480;
export const isIpad = () => isIOS() && Platform.isPad;
export const isIphoneX = () => {
  const { height, width } = Dimensions.get('window');
  let ratio = height / width;
  if (width > height) {
    ratio = width / height;
  }
  return isIOS() && ratio >= 2.0;
};

export const isAndroidTablet = () => {
  const { height, width } = Dimensions.get('window');
  let ratio = height / width;
  if (width > height) {
    ratio = width / height;
  }
  return isAndroid() && ratio <= 1.6;
};

export const isTablet = () => isIpad() || isAndroidTablet();
export const iPhoneXStyle = (style) => (isIphoneX() ? style : {});
export const iPadStyle = (style) => (isIpad() ? style : {});
export const tabletStyle = (style) => (isTablet() ? style : {});
export const getAccessibilityLabel = (accessibilityLabel) => (isIOS() ? {} : { accessibilityLabel });

export default {
  isAndroid,
  isIOS,
  isNative,
  isWeb,
  isMobileWeb,
  isIphoneX,
  isAndroidTablet,
  isTablet,
  iPhoneXStyle,
  iPadStyle,
  tabletStyle,
};
