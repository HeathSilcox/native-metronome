import React from 'react';
import {Text, View} from 'react-native';
import styles from "../Stylesheets/styles";


export default (props) => (
    <View>
        <Text style={[styles.text.center, styles.text.large]}>{props.value} BPM</Text>
    </View>
);