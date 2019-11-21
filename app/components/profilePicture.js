
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { boy, girl } from '../config/config.js';

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

class ProfilePicture extends React.Component {
    // static navigationOptions = {
    //     title: '资料',
    // };
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={{
                flexDirection:'row',
                justifyContent:"center"
            }}>
                <Image
                    style={{
                        width:100,
                        height:100,   
                    }}
                    source={require('../images/profile-picture.jpeg')}
                />
            </View>
        );
    }
}

export default ProfilePicture;
