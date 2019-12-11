import React from 'react';
import {Button, View, Text, SectionList} from 'react-native';

class TestScreen extends React.Component {
  static navigationOptions = {
    title: '测试',
    };
    click() {
        console.log(this.props.navigation);
        this.props.navigation.openDrawer()
    }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View
            style={{
                flexDirection: 'column',
                height: 200,
                paddingVertical: 45,
            }}>
            <View style={{width: '100%'}}>
                <SectionList
                    renderItem={({item, index, section}) => (
                        <Text key={index}>{item}</Text>
                    )}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                    )}
                    sections={[
                        {title: 'Title1', data: ['item1', 'lyx']},
                        {title: 'Title2', data: ['item3', 'item4']},
                        {title: 'Title3', data: ['item5', 'item6']},
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
            <Button
                title="首屏"
                onPress={() => navigate('Loading', {name: 'lyx'})}
            />
            <Button
                title="Go to Tab"
                onPress={() => navigate('Tab', {name: 'lyx'})}
            />
            <Button
                title="首页"
                onPress={() => navigate('Home', {name: 'lyx'})}
            />
            <Button
                title="关于"
                onPress={() => navigate('About', {name: 'lyx'})}
            />
            <Button
                title="我的"
                onPress={() => navigate('My', {name: 'lyx'})}
            />
            <Button
                title="我的"
                onPress={this.click()}
            />
        </View>
    );
  }
}

export default TestScreen;
