import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

import {boy, girl} from '../config/config.js';
import ProfilePicture from '../components/profilePicture';

console.log(boy, girl);

const calcAge = birth => {
    return new Date().getFullYear() - birth.slice(0, 4) + '岁';
};

boy.age = calcAge(boy.birth);
girl.age = calcAge(girl.birth);

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

const keyList = ['name', 'sex', 'birth', 'age'];

const list = keyList.map(item => {
    return (
        <View style={styles.list}>
            <Text>{boy[item]}</Text>
            <Text>{girl[item]}</Text>
        </View>
    );
});
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '资料',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View
                style={{
                    paddingTop: 35,
                }}>
                <ProfilePicture />
                {list}
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
