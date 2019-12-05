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
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#d6d7da',
    },
    blue:{
        color:'blue',
        // textAlign:'right',
        paddingHorizontal:5
    },
    pink:{
        color:'fuchsia',
        // textAlign:'left'
        paddingHorizontal:5
    }
});

const keyList = ['name', 'sex', 'age','birth',];

const list = keyList.map(item => {
    return (
        <View style={styles.list} key={item}>
            <Text style={styles.blue}>{boy[item]}</Text>
            <Text style={styles.pink}>{girl[item]}</Text>
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
            </View>
        );
    }
}

export default HomeScreen;
