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
            <View style={{height: '100%'}}>
                <WebView
                    style={{
                        // flex: 1,
                        height: 700,
                        backgroundColor: 'red',
                    }}
                    source={{uri: 'https://lovely-man.github.io/rqm/love.html'}}
                />
            </View>
        );
    }
}

export default HomeScreen;
