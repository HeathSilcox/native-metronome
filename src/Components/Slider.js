import React, {useState} from 'react';
import {Text, View, Slider} from 'react-native';
import SliderText from "./SliderText";
import {useDispatch, useSelector} from "react-redux";
import {setBPM} from "../Actions/actions";


export default () => {
    const currentBPM = useSelector(state => state.currentBPM);
    const dispatch = useDispatch();

    const test = (input) => {
        dispatch(setBPM(input));
    };

    return (
        <View>
            <SliderText value={currentBPM}/>
            <Slider
                style={{width: '100%', height: 90}}
                minimumValue={50}
                maximumValue={220}
                minimumTrackTintColor="#222222"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={test}
            />
        </View>
    );
};