import React from 'react';
import { Button ,View,Text} from 'react-native';

class MyScreen extends React.Component {
    static navigationOptions = {
        title: '首屏',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    flexDirection: "row",
                    height: '100%',
                    padding: 45,
                    backgroundColor:'#ccc',
                }}
            >
                <Button
                    color="aliceblue"
                    title="跳过"
                    style={{
                        fontSize:10
                    }}
                    onPress={() => navigate('Tab', { name: 'lyx' })}
                />
                <Text>首屏!</Text>
            </View>


        );
    }
}

export default MyScreen;