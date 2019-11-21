
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { boy, girl } from '../config/config.js';

console.log(boy, girl);

const styles = StyleSheet.create({
    list: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#d6d7da',
    },
    main: {
        // transform: 'rotate(45deg)',
        margin: 100,
    }
});

class ProfilePicture extends React.Component {
    // static navigationOptions = {
    //     title: '资料',
    // };
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={{
                paddingBottom: 20,
                flexDirection: 'row',
                justifyContent: "center"
            }}>
                <View style={styles.main} >
                    {/* <View style={} ></View>
                    <View style={} ></View>
                    <View style={} ></View> */}
                </View>

                <Image
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    source={require('../images/profile-picture.jpeg')}
                />
            </View>
        );
    }
}

export default ProfilePicture;
