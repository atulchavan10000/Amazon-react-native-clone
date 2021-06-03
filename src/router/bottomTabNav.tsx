import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator }from '@react-navigation/bottom-tabs';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
            <Tab.Navigator tabBarOptions={{showLabel: false, inactiveTintColor: '#ffdb7d', activeTintColor: '#e47911'}}>
                <Tab.Screen 
                    component={HomeStack} 
                    name="home"
                    options={{
                        tabBarIcon:({color}) => (
                            <Entypo name="home" color={color} size={25}/>
                        ),
                    }} 

                />
                <Tab.Screen     
                    component={HomeScreen} 
                    name="profile"
                    options={{
                        tabBarIcon:({color}) => (
                            <Entypo name="user" color={color} size={25}/>
                        ),
                    }} 
                />
                <Tab.Screen 
                    component={ShoppingCartScreen} 
                    name="shoppingCart"
                    options={{
                        tabBarIcon:({color}) => (
                            <Entypo name="shopping-cart" color={color} size={25}/>
                        ),
                    }} 
                />
                <Tab.Screen 
                    component={HomeScreen} 
                    name="more"
                    options={{
                        tabBarIcon:({color}) => (
                            <Entypo name="menu" color={color} size={25}/>
                        ),
                    }} 
                />
            </Tab.Navigator>
    );
};

export default BottomTabNav;