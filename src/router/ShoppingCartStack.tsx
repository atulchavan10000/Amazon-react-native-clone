import React from 'react'
import { createStackNavigator }from '@react-navigation/stack';
import AddressScreen from '../screens/AddressScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
const Stack = createStackNavigator();

const ShoppingCartStack = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen 
                    component={ShoppingCartScreen} 
                    name="ShoppingCartScreen"
                    options={{title: "Shopping Cart"}}
                />
                <Stack.Screen 
                    component={AddressScreen} 
                    name="Address"
                    options={{title: "Address"}}     
                />
            </Stack.Navigator>
    );
};

export default ShoppingCartStack;