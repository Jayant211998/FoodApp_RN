import React from 'react';
import { Text , View, StyleSheet, Image} from 'react-native';

export default function ResultsDetail({result}){
    return (
        <View style={styles.container}> 
            <Image style={styles.imageStyles} source={{uri: result.image_url}}/>
            <Text style={styles.titleStyles}>{result.name}</Text>
            <Text style={styles.reviewStyles}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    titleStyles: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyles:{
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom: 5
    },
    reviewStyles:{
        fontSize: 15,

    }
});