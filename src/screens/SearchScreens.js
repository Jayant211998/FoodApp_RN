import { useState } from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Searchbar from '../components/Searchbar';
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";

export default function SearchScreen({}){
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    return(
        <View style={styles.background}>
            <Searchbar 
                onTermChange={(newTerm) => setTerm(newTerm)} 
                term={term}
                onTermSubmit={() => searchApi(term) }    
            />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <ScrollView>
                <ResultsList results={filterResultByPrice('$')} title='Cost Effective'/>
                <ResultsList results={filterResultByPrice('$$')} title='Bit Expensive'/>
                <ResultsList results={filterResultByPrice('$$$')} title='Big Spender'/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FFFFFF",
        flex: 1
    }
})