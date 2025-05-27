import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes,headers, tabs} from '../../services';
import * as App from '../../screens/appFlow';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Wrapper from '../../components/wrapper';
import { styles } from './stye';


const AppStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function MyTabs() {
    return (  
        <Wrapper  style={styles.maintab}>
      <Tab.Navigator screenOptions={tabs.tabBarOptions}>
         <Tab.Screen   options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="home" type='antdesign' color={color} size={26} />
                    ),
                }} name="Home" component={App.Home} />
        <Tab.Screen   options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="list" type='feather' color={color} size={26} />
                    ),
                }} name="matches" component={App.UserMatches} /> 
        <Tab.Screen   options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="users" type='feather' color={color} size={26} />
                    ),
                }} name="Request" component={App.Requests} />
        {/* <Tab.Screen  name="Chat" component={App.Chat} /> */}
        <Tab.Screen   options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="face" type='materialIcon' color={color} size={26} />
                    ),
                }} name="profile" component={App.Profile} />
      </Tab.Navigator>
      </Wrapper>
    );
  }

const AppNavigation = () => {
    return (
        <AppStack.Navigator
       // screenOptions={headers.screenOptions}
        screenOptions={headers.screenOptions}
            // initialRouteName={routes.home}
        >
              <AppStack.Screen name={"routes.home"} component={MyTabs}
                // options={{
                //     tabBarIcon: ({ color }) => (
                //       <Icon name="home" type='antdesign' color={'red'} size={26} />
                //     ),
                // }}
            />
            <AppStack.Screen name={routes.home} component={App.Home}
                options={{
                   // headerShown: false,
                    //title: 'Home'
                }}
            />   
            <AppStack.Screen name={routes.requests} component={App.Requests}
                options={{
                   // headerShown: false,
                    //title: 'Home'
                }}
            />
             <AppStack.Screen name={routes.usermatches} component={App.UserMatches}
                options={{
                    //headerShown: false,
                     //title: 'Home'
                }}
            />
             {/* <AppStack.Screen name={routes.chat} component={App.Chat}
                options={{
                headerShown: false, 
                 //title: 'Home'   
                }}
            /> */}
             <AppStack.Screen name={routes.profile} component={App.Profile}
                options={{
               //     headerShown: false,
                //title: 'Home'
                }}
            />
        </AppStack.Navigator>
    )
}

export default AppNavigation

