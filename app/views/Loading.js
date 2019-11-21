import React from 'react';
import { Button, View, Text } from 'react-native';

const backgroundColor = '#ccc'

class MyScreen extends React.Component {
    static navigationOptions = {
        title: '首屏',
    };
    
    render() {
        const { navigate } = this.props.navigation;
        return (
          <View
            style={{
              position: 'relative',
              height: '100%',
              paddingVertical: 45,
              backgroundColor,
            }}>
            <View
              style={{
                position: 'absolute',
                bottom: 30,
                right: 10,
                fontSize: 10,
                width: 60,
              }}>
              <Button
                // color="transparent"
                title="跳过"
                style={{
                    // color:'#000'
                    padding: 0,
                }}
                onPress={() => navigate('Tab', {name: 'lyx'})}
              />
            </View>

            <Text>首屏!</Text>
          </View>
        );
    }
}

export default MyScreen;
