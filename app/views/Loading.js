import React from 'react';
import { Button, View, Text } from 'react-native';

const backgroundColor = '#ccc';

class MyScreen extends React.Component {
    timerID = null;

    constructor(props) {
        super(props);
        this.state = {
            num: 5,
        };
    }

    static navigationOptions = {
        title: '首屏',
    };

    componentDidMount() {
        console.log('num=', this.state.num);
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }
    tick() {
        let {num} = this.state;
        console.log('tick num=', this.state.num);
        if (--num) {
            this.setState({
                num,
            });
        } else {
            // TODO
            clearInterval(this.timerID);
            this.goToTab();
        }
    }

    goToTab() {
        const {navigate} = this.props.navigation;
        return navigate('HomeTab', {name: 'lyx'});
    }

    render() {
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
                        title={'跳过' + this.state.num}
                        style={{
                            // color:'#000'
                            padding: 0,
                        }}
                        onPress={()=>this.goToTab()}
                    />
                </View>

                <Text>首屏!</Text>
            </View>
        );
    }
}

export default MyScreen;
