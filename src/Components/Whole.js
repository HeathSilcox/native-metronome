import React from 'react';
import {Text, View} from 'react-native';
import Slider from "./Slider";
import StartButton from "./StartButton";


export default () => {

    return (
        <View style={{flex: 1, width: '100%'}}>
            <View style={{flex: 3, justifyContent: 'center'}}>
                <Slider/>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <StartButton/>
            </View>
        </View>
    );
};