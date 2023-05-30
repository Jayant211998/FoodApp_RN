import React from 'react';
import { Text , View, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation}) =>{
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}> 
            <Text style={styles.titleStyles}>{title}</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={(result) => result.id} 
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ResultsShow', {id: item.id})}
                        >
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    titleStyles: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);