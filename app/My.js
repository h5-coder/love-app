import React from 'react';
import { Button ,View,Text} from 'react-native';

class MyScreen extends React.Component {
    static navigationOptions = {
        title: 'My',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    flexDirection: "row",
                    height: 100,
                    padding: 45,
                }}
            >
                <Button
                    title="Go to Tab"
                    onPress={() => navigate('Tab', { name: 'lyx' })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => navigate('Home', { name: 'lyx' })}
                />
                <Text>Hello World!</Text>
            </View>


        );
    }
}

export default MyScreen;