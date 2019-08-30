import React, {useState} from 'react';
import {Text, View, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from "../Stylesheets/styles";
import {Audio} from 'expo-av'

export default () => {
    const handlePress = async () => {
        try {
            console.warn('cc');
            await Audio.setIsEnabledAsync(true);

            const soundObject = new Audio.Sound();
            await soundObject.loadAsync(require('../../assets/hihat.mp3'));
            await soundObject.playAsync();

        } catch (error) {
            console.warn(error);
        }

    };

    return (
        <TouchableHighlight style={styles.buttons.btn} onPress={handlePress} underlayColor="#D44848">
            <Text style={[styles.text.whiteBold, styles.text.large, styles.text.center]}>Start</Text>
        </TouchableHighlight>
    );
};