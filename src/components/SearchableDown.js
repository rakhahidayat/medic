import React, { useState, useEffect, useCallback } from "react";
import { Text, Keyboard, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, View } from "react-native";
import debounce from 'lodash/debounce';
import { ActivityIndicator } from "react-native";

const SearchableDropdown = ({
    // Props
    //----------------------
    data,                              // data                 : FlatList data
    placeholder = "Input here...",     // placeholder          : InputText's placeholder
    placeholderTextColor = "#e8e6e6",  // placeholderTextColor : InputText's placeholderTextColor
    displayAttribute,                  // displayAttribute     : data's attribute which want to show in FlatList's renderItem
    returnAttribute,                   // returnAttribute      : data's attribute for onSelectItem's item
    keyAttribute,                      // keyAttribute         : key attribute for FlatList's keyExtractor
    onChangeText,                      // onChangeText         : do something when data change
    onSelectItem,                      // onSelectItem         : do something when item on FlatList presssed
    onClick,                           // onClick              : do something onClick this component
    value,                             // value                : component's default value
    onChangeTextCallDelay = 500,       // onChangeTextCallDelay: function call delay after textchange
    style = {},                        // style                : Root View's style
    inputStyle = {},                   // inputStyle           : InputText's style
    flatListStyle = {},                // flatListStyle        : FlatList's style
    listElementStyle = {},             // listElementStyle     : FlatList's Element's style 
    textStyle,                         // textStyle           : FlatList's Texts style
    loadingSearch = false
} = props) => {

    const [inputText, setInputText] = useState(value || '');
    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState(false);
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        if (inputText === '' || (data.length === 0) || selected) setShowList(false);
    });

    useEffect(() => {
        setInputText(value);
    }, [value])

    useEffect(() => {
        if (focus && data.length !== 0) setShowList(true);
    }, [data])

    const callApi = useCallback(debounce((text) => onChangeText(text), onChangeTextCallDelay), []);

    const itemPress = (item) => {
        Keyboard.dismiss();
        setSelected(true);
        setInputText(item[displayAttribute]);
        returnAttribute !== undefined ? onSelectItem(item[returnAttribute]) : onSelectItem(item);
    };

    const resetInput = () => {
        if (onClick) onClick(); //props onclick
        setFocus(true);
        setShowList(false);
        resetValue();
    };

    const resetValue = () => {
        setInputText('');
        setSelected(false);
    }

    const submitEditing = () => {
        if (inputText !== '') callApi(inputText);
        Keyboard.dismiss();
    }

    const changeText = (text) => {
        setInputText(text);
        if (text !== '') callApi(text);
    };

    const countListHeight = (dataLength) => {
        switch (dataLength) {
            case 1:
                return 37.5;
            case 2:
                return 75;
            default:
                return 112.5;
        }
    }

    const renderList = (showList, listData) => {
        if (showList) {

            const height = countListHeight(listData.length);
            return (
                <FlatList
                    keyboardShouldPersistTaps="handled"
                    data={listData}
                    style={{ height: height, ...flatListStyle }}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => itemPress(item)}
                            style={{ paddingVertical: 10, borderBottomWidth: 0.25, borderColor: '#bbb', ...listElementStyle }}
                        >
                            <Text
                                style={[{ color: 'black' }, textStyle || inputStyle]}
                            >
                                {item[displayAttribute]}
                            </Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => keyAttribute ? item[keyAttribute] : item.id}
                />
            );
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={style}
        >
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    onFocus={() => resetInput()}
                    blurOnSubmit={false}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    style={[{ flex: 1, color: 'black', borderBottomWidth: 2, borderBottomColor: "#e8e6e6" }, inputStyle]}
                    onChangeText={(text) => changeText(text)}
                    onSubmitEditing={() => submitEditing()}
                    value={inputText}
                    underlineColorAndroid={"transparent"}
                    returnKeyType="search"
                />
                {loadingSearch ? <ActivityIndicator size="small" style={{ marginLeft: 10 }} /> : null}
            </View>
            {renderList(showList, data)}
        </KeyboardAvoidingView>
    );

}

export default SearchableDropdown;
