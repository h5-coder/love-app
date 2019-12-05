
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { boy, girl } from '../config/config.js';

console.log(boy, girl);

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    main: {
        transform: [{rotate: '45deg'}],
        margin: 100,
        backgroundColor: 'red',
    },
    img: {
        width: 200,
        height: 200,
        borderRadius:100,
        borderColor:'red',
        borderWidth:2
    },
});

class ProfilePicture extends React.Component {
    // static navigationOptions = {
    //     title: '资料',
    // };
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {/* <View style={styles.main} > */}
                {/* <View style={} ></View>
                    <View style={} ></View>
                    <View style={} ></View> */}
                {/* </View> */}

                <Image
                    style={styles.img}
                    source={require('../images/profile-picture.jpeg')}
                />
            </View>
        );
    }
}

export default ProfilePicture;
