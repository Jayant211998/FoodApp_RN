import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

export default function ResultsShowScreen({navigation}){

    const [results, setResults] = useState(null);
    const id = navigation.getParam('id');

    const getResults = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResults(response.data);
    }

    useEffect(()=>{
        getResults(id);
    },[]);

    
    if(!results){
        return null;
    }

    return(
        <View style={styles.background}>
            <Text style={styles.titleStyles}>{results.name}</Text>
            <FlatList 
                data={results.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image source={{uri: item}} style={styles.image}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        marginLeft: 15
    },
    titleStyles: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 10
    },
    image:{
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom: 10
    }
})