//  ****引入以下三个******
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//其他按需导入
import React from 'react';

// 页面
import loading from './Loading';
import home from './Home'
import my from './My'
import inof from './Info'
import about from './About';

// 底部导航栏
const BottomContainer = createBottomTabNavigator(
  {
    HomeTab: {
      screen: home,
      navigationOptions: {
        // tabBarLabel: '首页',
      },
    },
    Info: {
      screen: inof,
      navigationOptions: {
        // tabBarLabel: '我的',
      },
    },
    about: {
      screen: about,
      navigationOptions: {
        // tabBarLabel: '关于',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      let headerTitle = routeName;
      return {
        headerTitle,
      };
    },
    tabBarOptions: {
      activeTintColor: '#3DA8F5',
      inactiveTintColor: '#808080',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#FFFFFF',
        borderColor: 'white',
      },
    },
  },
);

//将底部导航栏和其他页面组合在一起
const MainNavigator = createStackNavigator({
    Loading: {
        screen: loading,
        navigationOptions: {
            header: null
        }
    },
    Tab: {
        screen: BottomContainer,
        navigationOptions: {
            header: null
        }
    },
    Home: { screen: home },
    My: { screen: my },
}, {
    // 设置 stack navigator 的默认页面， 必须是路由配置中的某一个。
    initialRouteName: 'Loading',
});

const App = createAppContainer(MainNavigator);

export default App;
