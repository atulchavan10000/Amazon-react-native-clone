import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, Image, useWindowDimensions } from 'react-native';


const ImageCarousal = ({images} : {images: [string]}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;
    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <Image 
                        style={[styles.image, {width: windowWidth -40}]} 
                        source={{uri: item}}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'end'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={({ viewableItems }) => {
                    console.log(viewableItems);
                }}
            />
            <View style={styles.dots}>
                {images.map((image, index) =>(
                    <View 
                        style={[
                            styles.dot, 
                            {
                                backgroundColor: index==activeIndex ? '#c9c9c9' : '#ededed'
                            }
                        ]}
                    />
                ))}
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    root:{

    },
    image:{
        margin: 10,
        height: 250,
        resizeMode: 'contain'
    },
    dot:{
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5
    },
    dots:{
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default ImageCarousal;
