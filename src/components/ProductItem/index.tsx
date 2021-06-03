import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

interface ProductItemProps{
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number
    }
}
const ProductItem = ({item} : ProductItemProps) => {
    const navigation = useNavigation();

    const onPress =()=>{
        navigation.navigate('ProductDetails');
    }
    return (
        <Pressable style={styles.root} onPress={onPress}>
            <Image style={styles.image} source={{uri : item.image}}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                {/* Ratings */}
                <View style={styles.ratingsContainer}>
                    { [0,0,0,0,0].map((el, index) => 
                        <FontAwesome 
                            key={`${item.id}-${index}`}
                            style={styles.star} 
                            name={index < Math.floor(item.avgRating) ? 'star' : 'star-o'} 
                            /*ToDo: add logic for half star */
                            size={18} 
                            color={"#e47911"}
                        />) 
                    }
                    <Text>{item.ratings}</Text>
                </View>
                <Text style={styles.price}>
                    from ${item.price}
                    {item.oldPrice && (
                        <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
                    )}
                </Text>
            </View>
        </Pressable>
    )
}

export default ProductItem;
