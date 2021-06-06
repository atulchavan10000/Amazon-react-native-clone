import React from 'react'
import { createStackNavigator }from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import HomeScreen from '../screens/HomeScreen';
import { Text, View, TextInput, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

const HeaderComponent =()=>{
    return (
        <SafeAreaView style={{ backgroundColor: '#22e3dd'}}>
            <View style={{ flexDirection:'row', margin: 10, padding:5, backgroundColor:'white', alignItems: 'center' }}>
                <Feather name="search" size={25}/>
                <TextInput style={{height: 40, marginLeft: 10}} placeholder="Search...."/>
            </View>

            
        </SafeAreaView>
    )
}

const HomeStack = () => {
    return (

            <Stack.Navigator screenOptions={{
                header: ()=> <HeaderComponent/>
            }}>
                <Stack.Screen component={HomeScreen} name="HomeScreen"
                    options={{title: "Home"}}
                />
                <Stack.Screen component={ProductScreen} name="ProductDetails"/>
            </Stack.Navigator>
    );
};

export default HomeStack;