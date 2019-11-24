import React from 'react';
import { View, Text} from 'react-native';

class MyScreen extends React.Component {
    static navigationOptions = {
        title: '关于',
    };
    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View
                style={{
                    flexDirection: 'column',
                    height: 'auto',
                    paddingVertical: 45,
                }}>
                <Text
                    style={{
                        padding: 5,
                        textAlign: 'center',
                        fontSize: 12,
                        color: '#ccc',
                    }}>
                    Author：liangyanxiangde@163.com
                </Text>
            </View>
        );
    }
}

export default MyScreen;
