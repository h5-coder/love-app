import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview';

import { boy, girl } from '../config/config.js';
import ProfilePicture from '../components/profilePicture'

console.log(boy, girl);

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
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
            <View
                style={{
                    paddingTop: 35,
                }}>
                <ProfilePicture />
                <View style={styles.list}>
                    <Text>{boy.name}</Text>
                    <Text>{girl.name}</Text>
                </View>
                <View style={styles.list}>
                    <Text>{boy.sex}</Text>
                    <Text>{girl.sex}</Text>
                </View>
                <View style={styles.list}>
                    <Text>{boy.birth}</Text>
                    <Text>{girl.birth}</Text>
                </View>
                <WebView
                    scrollEnabled={false}
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'red',
                    }}
                    source={{uri: 'https://www.baidu.com'}}
                />
            </View>
        );
    }
}

export default HomeScreen;
