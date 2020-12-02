import { Dimensions, PixelRatio } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import Moment from 'moment';

const displayHeight = Dimensions.get('window').height;
const displayWidth = Dimensions.get('window').width;

// Get Responsive Hight DP
export const wp = (px) => {
  let resized = 0;
  if (displayHeight == 568) { // iPhone SE
    resized = (px * 100 / 645);
  } else if (displayHeight >= 400 && displayHeight < 600) {
    resized = (px * 100 / 550);
  } else if (displayHeight >= 600 && displayHeight < 700) {
    resized = (px * 100 / 630);
  } else if (displayHeight >= 700 && displayHeight < 800 && displayWidth > 400) {
    resized = (px * 100 / 675);
  } else if (displayHeight >= 700 && displayHeight < 800) {
    resized = (px * 100 / 750);
  } else if (displayHeight >= 800 && displayHeight < 850 && displayWidth < 400) { // iPhone X
    resized = (px * 100 / 775);
  } else if (Platform.OS === 'ios' && displayHeight >= 800 && displayHeight < 1000 && displayWidth < 450) {
    resized = (px * 100 / 800);
  } else if (displayHeight >= 800 && displayHeight < 1000 && displayWidth < 450) {
    resized = (px * 100 / 760);
  } else if (displayHeight >= 800 && displayHeight < 900) {
    resized = (px * 100 / 600);
  } else if (displayHeight >= 900 && displayHeight < 1000) {
    resized = (px * 100 / 750);
  } else if (Platform.OS === 'ios' && displayHeight >= 1000 && displayHeight < 1200 && displayWidth > 800 && displayWidth <= 840) { // iPad Pro (11 inch)
    resized = (px * 100 / 700);
  } else if (displayHeight >= 1000 && displayHeight < 1200) {
    resized = (px * 100 / 665);
  } else if (displayHeight >= 1200 && displayHeight < 1300) {
    resized = (px * 100 / 830);
  } else if (displayHeight >= 1300) { //iPad Pro 12.9 inch
    resized = (px * 100 / 700);
  }
  return heightPercentageToDP(resized);
};

export const mergedWidth = (px) => {
  var resized = (px * 100 / 375)
  return widthPercentageToDP(resized) 
}

export const mergedFontSize = (size) => {
  var responsiveSize = size / PixelRatio.getFontScale();
  var resized = mergedWidth(responsiveSize);
  return resized;
};

// Get Responsive Width HP= window
export const hp = (px) => {
  let resized = 0;
  if (Platform.OS === 'ios' && displayWidth <= 400) { //iPhone 5s, 6
    resized = (px * 100 / 400);
  } else if (displayWidth <= 400) {
    resized = (px * 100 / 370);
  } else if (Platform.OS === 'ios' && displayWidth <= 420) {
    resized = (px * 100 / 400);
  } else if (displayWidth >= 400 && displayWidth < 700) {
    resized = (px * 100 / 375);
  } else if (displayWidth >= 700 && displayWidth < 800) {
    resized = (px * 100 / 650);
  } else if (displayWidth >= 800) {
    resized = (px * 100 / 650);
  }
  return widthPercentageToDP(resized);
};
export const width = () => {
  let resized = 0;
  resized = displayWidth;
  return resized;
};

export const height = () => {
  let resized = 0;
  resized = displayHeight;
  return resized;
};

// Padding Right Home Screen
export const pd = (px) => {
  let resized = 0;
  if (displayWidth <= 400) {
    resized = '0%';
  } else if (displayWidth >= 400 && displayWidth <= 699) {
    resized = '1.5%';
  } else {
    resized = '1.5%';
  }
  return widthPercentageToDP(resized);
};

export const dw = (px) => {
  let resized = 0;
  if (displayWidth <= 400) {
    resized = displayWidth / px;
  } else if (displayWidth >= 400 && displayWidth <= 699) {
    resized = displayWidth / px;
  } else {
    resized = displayWidth / px / 2;
  }
  return widthtPercentageToDP(resized);
};

export const hw = (px) => {
  let resized = 0;
  if (displayHeight <= 400) {
    resized = displayHeight * 2 / px;
  } else if (displayHeight >= 400 && displayHeight <= 720) {
    resized = displayHeight / px;
  } else {
    resized = displayHeight / px / 2;
  }
  return heightPercentageToDP(resized);
};

export const logoTab = (px) => {
  let resized = 0;
  resized = displayWidth / px;
  return resized;
};

export const fontOrderScreen = (px) => {
  let resized = 0;
  if (displayWidth <= 399) {
    resized = displayWidth * 1.5 / px;
  } else if (displayWidth >= 400 && displayWidth <= 699) {
    resized = displayWidth * 2 / px;
  } else {
    resized = displayWidth / px;
  }
  return resized;
};

export const sizeImageCsv = () => {
  let resized = 0;
  if (displayWidth <= 399) {
    resized = wp(25);
  } else if (displayWidth >= 400 && Dimensions.get('window'.width <= 699)) {
    resized = wp(35);
  } else {
    resized = wp(50);
  }
  return resized;
};

// Get Responsive Fixed Font
export const fixedFontSize = (size) => {
  const responsiveSize = size / PixelRatio.getFontScale();
  const resized = wp(responsiveSize);
  return resized;
};
export const fixedFontSizeHp = (size) => {
  const responsiveSize = size / PixelRatio.getFontScale();
  const resized = wp(responsiveSize);
  return resized;
};

export const formatAmount = (item) => {
  if (item > 999) {
    const data = item / 1000;
    return (data).toFixed(1);
  }
  return item;
};

export const formatCurrency = (price) => {
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

export const formatPercentage = (item) => {
  return (item).toFixed(0);
};

export const calculatePercentageHome = (count, totalCount) => {
  if (count === 0) {
    var totalCountValue = 0;
    return totalCountValue;
  } 
    const data = new Number(count);
    const nilai = new Number(totalCount);
    return nilai !== 0 ? data * 100 / nilai : 0;
  
};
export const calculatePercentageHomeTest = (count, totalCount) => {
  if (isNaN(parseFloat(count)) === true) {
    var countValue = 0;
    var totalCountValue = 0;
    return totalCountValue !== 0 ? countValue / totalCountValue : 0;
  } if (count === 0 || totalCount === 0) {
    var countValue = 0;
    var totalCountValue = 0;
    return totalCountValue;
  } 
    var countValue = new Number(count);
    var totalCountValue = new Number(totalCount);
    return totalCountValue !== 0 ? countValue / totalCountValue : 0;
  
};

export const calculatePercentage = (item) => {
  if (item > 0) {
    const data = item / 1;
    return (data).toFixed(2);
  }
  return item;
};
export const calculatePercentageRounded = (item) => {
  if (item > 0) {
    const data = item / 1;
    return (data).toFixed(0);
  }
  return item;
};
export const getDateMonth = (date) => {
  if (date != null) {
    return Moment(date).format('DD MMM YYYY');
  }
  return '';
};
export const getDate = (date) => {
  if (date != null) {
    return Moment(date).format('DD MMMM YYYY');
  }
  return '';
};
export const getDateTime = (date) => {
  if (date != null) {
    return Moment(date).format('HH:MM');
  }
  return '';
};
export const getDateSMR = (date) => {
  if (date != null) {
    return Moment(date).format('DD-MM-YYYY');
  }
  return '';
};
export const getDateMonthSMR = (date) => {
  if (date != null) {
    return Moment(date).format('DD MMM YY');
  }
  return '';
};
export const getMarginTop = (value) => {
  if (value === null) value = 1;
  if (value === '') value = 1;
  if (value === -1) value = 1;
  if (value === 0) value = 1;
  return (value <= 24) ? (1 + ((12 - value) / 24 * 12.5)) : (value / 2);
};
export const getHeight = (value) => {
  if (value === null) value = 1;
  if (value === '') value = 1;
  if (value === -1) value = 1;
  if (value === 0) value = 1;
  return (value > 24) ? (value / 24 * 12.5) : displayHeight > 1000 ? (value * 4) : (value * 2.5);
};

export const ValidationCharacteristic = (obj, type) => {
  let find = -1;
  for (let i = 0; i < obj.length; i += 1) {
    if (obj[i].type === type) {
      find = i;
    }
  }
  if (find === -1) {
    return {
      value: null,
      name: null,
    };
  }
  return obj[find];
};
export const ValidationName = (group, name) => {
  if (group === undefined) {
    return {
      value: null,
      name: null,
    };
  }
  let findName = -1;
  for (let j = 0; j < group.length; j += 1) {
    if (group[j].name === name) {
      findName = j;
    }
  }
  if (findName === -1) {
    return {
      value: null,
      name: null,
    };
  }
  return group[findName];
};
