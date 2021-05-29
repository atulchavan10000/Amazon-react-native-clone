import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

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
       return (
        <View style={styles.root}>
            <Image style={styles.image} source={{uri : item.image}}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                {/* Ratings */}
                <View style={styles.ratingsContainer}>
                    { [0,0,0,0,0].map((el, index) => 
                        <FontAwesome 
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
        </View>
    )
}

export default ProductItem;
