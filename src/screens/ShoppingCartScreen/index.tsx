import React from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import Button from '../../components/Button';

const ShoppingCartScreen = () => {
    const totalPrice = products.reduce(
        (summedPrice, product) => (
            summedPrice + product.item.price * product.quantity
        ), 
    0);
    return (
        <View style={styles.page}>
            <View>
                <Text style={{fontSize: 18}} >
                    Subtotal ({products.length} items): {' '}
                    <Text style={{color: '#e47911', fontWeight:'bold'}}>${totalPrice.toFixed(2)}</Text>
                </Text>
                <Button 
                    text="Proceed to checkout" 
                    onPress={() => console.warn('go to checkout')}
                    containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b702'}}
                />

            </View>
           <FlatList
                data = {products}
                renderItem={({item}) => <CartProductItem cartItem={item}/>}
                keyExtractor={({id}) => id}
                showsVerticalScrollIndicator={false}
           />
        </View>
    );
};

const styles = StyleSheet.create({
    page:{
        padding:10
    }
});

export default ShoppingCartScreen;