import React from 'react';
import { Button, View } from 'react-native';
import {WebView} from 'react-native-webview';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '首页',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View styly={{height: 200}}>
                <WebView
                    style={{
                        flex: 1,
                        width: 100,
                        height: 100,
                        backgroundColor: 'red',
                    }}
                    source={{uri: 'https://facebook.github.io/react-native/'}}
                />
                <Button
                    title="Go to My"
                    onPress={() => navigate('My', {name: 'lyx'})}
                />
            </View>
        );
    }
}

export default HomeScreen;
