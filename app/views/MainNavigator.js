//  ****引入以下三个******
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from "react-native-vector-icons/Ionicons";

//其他按需导入
import React from 'react';

// 页面
import loading from './Loading';
import home from './Home'
import my from './My'
import info from './Info'
import about from './About';
import test from './Test'


// 底部导航栏
const BottomContainer = createBottomTabNavigator(
    {
        HomeTab: {
            screen: home,
            navigationOptions: {
                // tabBarLabel: '首页',
                tabBarIcon: ({ focused }) => {
                    return (
                        <Icon
                            name="ios-add"
                            size={30}
                            color="blue"
                            backgroundColor="#ccc"
                        />
                    );
                },
            },
        },
        Info: {
            screen: info,
            navigationOptions: {
                // tabBarLabel: '我的',
            },
        },
        About: {
            screen: about,
            navigationOptions: {
                // tabBarLabel: '关于',
            },
        },
        Test: {
            screen: test,
            navigationOptions: {
                tabBarLabel: '测试',
            },
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            let headerTitle = routeName;
            return {
                headerTitle,
            };
        },
        tabBarOptions: {
            showIcon: true,
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

//this.props.navigation.openDrawer();//打开抽屉
//this.props.navigation.closeDrawer();//关闭抽屉
const DrawerNavigator = createDrawerNavigator(
    {
        About: {
            screen: about,
            navigationOptions: {
                // tabBarLabel: '关于',
            },
        },
    },
    {
        order: ['About',], //routeNames数组，用于定义抽屉项目的顺序。
        drawerLockMode: 'locked-open',//设置是否响应手势
        //'unlocked'   可以通过手势和代码 打开关闭抽屉
        //'locked-closed' 抽屉关闭状态  不能通过手势打开  只能通过代码实现
        //'locked-open'  抽屉打开状态  不能通过手势关闭  只能通过代码实现


        drawerWidth: 250, //抽屉的宽度或返回的功能。
        drawerPosition: 'left', //选项是left或right。默认是left位置。
        useNativeAnimations: false, //启用原生动画。默认是true。
        drawerBackgroundColor: 'pink', //使用抽屉背景获取某种颜色。默认是white。

        //用于呈现抽屉内容的组件，例如导航项。收到navigation抽屉的道具。默认为DrawerItems
        //用于自定义
        //contentComponent: '',


        //配置抽屉内容  items相关
        contentOptions: {
            // items: [OtherScreen],//可以修改或覆盖路由数组  不知道干嘛用的
            // activeItemKey: 'AppInfo', //识别活动路线的关键  也不知道干嘛用的

            activeTintColor: 'white', //活动标签的标签和图标颜色
            activeBackgroundColor: 'blue', //活动标签的背景颜色
            inactiveTintColor: 'black', //非活动标签的标签和图标颜色
            inactiveBackgroundColor: 'red', //非活动标签的背景颜色

            // //按下项目时要调用的函数 不知道是否使用错误 一直没反应
            //github上面有答案 在自定义视图的时候 会有用
            // onItemPress(route) {
            //     console.log('onItemPress'+route);
            // },


            // itemsContainerStyle: '', //内容部分的样式对象
            // itemStyle: '', //单个项目的样式对象，可以包含图标和 / 或标签
            // labelStyle: '', //Text当标签是字符串时，样式对象在内容部分内覆盖样式
            // activeLabelStyle: '', //Text当标签是字符串（与之合并labelStyle）时，样式对象覆盖活动标签的样式
            // inactiveLabelStyle: '', //Text当标签是字符串（与之合并labelStyle）时，样式对象覆盖非活动标签的样式
            // iconContainerStyle: '', //样式对象以覆盖View图标容器样式。
        },
    }
);

//将底部导航栏和其他页面组合在一起
const MainNavigator = createStackNavigator(
    {
        Loading: {
            screen: loading,
            navigationOptions: {
                header: null,
            },
        },
        Tab: {
            screen: BottomContainer,
            navigationOptions: {
                header: null,
            },
        },
        Home: {screen: home},
        My: {screen: my},
        Drawer: {
            screen: DrawerNavigator,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        // 设置 stack navigator 的默认页面， 必须是路由配置中的某一个。
        initialRouteName: 'Loading',
    },
);

const App = createAppContainer(MainNavigator);

export default App;
