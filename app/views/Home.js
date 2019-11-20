import React from 'react';
import { Button } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '首页',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to My"
                onPress={() => navigate('My', { name: 'lyx' })}
            />
        );
    }
}

export default HomeScreen;
