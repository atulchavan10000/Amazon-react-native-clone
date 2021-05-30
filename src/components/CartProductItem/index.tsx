import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';

interface CartProductItemProps{
   cartItem: {
        id: string;
        quantity: number;
        option?: string;
        item: {
            id: string;
            title: string;
            image: string;
            avgRating: number;
            ratings: number;
            price: number;
            oldPrice?: number
        };
    };
}
const CartProductItem = ({cartItem} : CartProductItemProps) => {
    const {quantity: quantityProp, item} = cartItem;
    const [quantity, setQuanity] = useState(quantityProp);
    
    return (
       <View style={styles.root}>
            <View style={styles.row}>
                <Image style={styles.image} source={{uri : cartItem.item.image}}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{cartItem.item.title}</Text>
                    {/* Ratings */}
                    <View style={styles.ratingsContainer}>
                        { [0,0,0,0,0].map((el, index) => 
                            <FontAwesome 
                                key={`${cartItem.id}-${index}`}
                                style={styles.star} 
                                name={index < Math.floor(cartItem.item.avgRating) ? 'star' : 'star-o'} 
                                /*ToDo: add logic for half star */
                                size={18} 
                                color={"#e47911"}
                            />) 
                        }
                        <Text>{cartItem.item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>
                        from ${cartItem.item.price}
                        {cartItem.item.oldPrice && (
                            <Text style={styles.oldPrice}> ${cartItem.item.oldPrice}</Text>
                        )}
                    </Text>
                </View>
            </View>
            <View style={styles.quantityContainer}>
                <QuantitySelector quantity={quantity} setQuantity={setQuanity}/>
            </View>

        </View>
    )
}

export default CartProductItem;
