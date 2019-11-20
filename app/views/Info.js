import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { boy, girl } from '../config/config.js';

console.log(boy, girl);

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#d6d7da',
    },
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '资料',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.list}>
                    <Text>{boy.sex}</Text>
                    <Text>{girl.sex}</Text>
                </View>
                <View style={styles.list}>
                    <Text>{boy.name}</Text>
                    <Text>{girl.name}</Text>
                </View>
            </View>
        );
    }
}

export default HomeScreen;
