import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import styles from "./src/Stylesheets/styles";
import Whole from "./src/Components/Whole";
import {Provider} from 'react-redux';
import store from "./src/store";

export default () => {
    return (
        <Provider store={store}>
            <View style={styles.global.container}>
                <StatusBar hidden={true}/>
                <Whole/>
            </View>
        </Provider>
    );
};