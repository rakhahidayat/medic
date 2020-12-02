import React from 'react';
import { SearchBar } from 'react-native-elements';
import * as utils from '../style/Utils';

const TextClear = ({ placeHolder, iconValue, onPress, inputContainerStyle, onChangeText, value, showLoading, containerStyle, onSubmitEditing, onFocus, onBlurr }) =>
    (<SearchBar
        placeholder={placeHolder}
        searchIcon={iconValue}
        onChangeText={onChangeText}
        value={value}
        onPress={onPress}
        inputStyle={{fontSize: utils.fixedFontSize(13), textAlign: 'left', marginLeft: 0}}
        inputContainerStyle={inputContainerStyle}
        containerStyle={containerStyle}
        showLoading={showLoading} lightTheme
        returnKeyType="go"
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
        onBlur={onBlurr}
        />
    );

export default TextClear;