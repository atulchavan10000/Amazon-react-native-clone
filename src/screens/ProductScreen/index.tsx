import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0]: null);
    const [quantity, setQuantity] = useState(1);
    
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            {/** Image carousal */}

            {/** Option Selector */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}>
                {product.options.map(option => (
                    <Picker.Item label={option} value={option}/>
                ))}
                
            </Picker>

            {/** Price */}
            <Text style={styles.price}>
                from ${product.price}
                {product.oldPrice && (
                    <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
                )}
            </Text>

            {/** Description */}
            <Text style={styles.description}>{product.description}</Text>

            {/** Quantity Selector */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
            
            
            {/** Button */}
            <Button 
                text={'Add To Cart'} 
                onPress={()=>{
                    console.warn('Add to cart')
                }}
            />
            <Button 
                text={'Buy Now'} 
                onPress={()=>{
                    console.warn('Buy Now')
                }}
            />
        </View>
    );
};


export default ProductScreen
