import React from 'react';
import {Button, View, Text, SectionList} from 'react-native';

class TestScreen extends React.Component {
  static navigationOptions = {
    title: '测试',
  };
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
                title="Go to 首屏"
                onPress={() => navigate('Loading', {name: 'lyx'})}
            />
            <Button
                title="Go to Tab"
                onPress={() => navigate('Tab', {name: 'lyx'})}
            />
            <Button
                title="Go to Home"
                onPress={() => navigate('Home', {name: 'lyx'})}
            />
        </View>
    );
  }
}

export default TestScreen;
