import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Searchbar({term, onTermChange, onTermSubmit}){

    return(
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                placeholder="Search" 
                style={styles.inputStyle}
                value={term}
                onChangeText={(newText) => onTermChange(newText)}
                onEndEditing={onTermSubmit}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#D0CCCC",
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});