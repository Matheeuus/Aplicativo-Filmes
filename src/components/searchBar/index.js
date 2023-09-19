import React from "react";
import {TextInput, View, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import style from "./style";

export default function SearchBar(){
    return(

        <View style = {style.containerSearch}>
            <FontAwesome name="search" size={24} color="black" />
            <TextInput 
                placeholder="Digite o filme desejado"
                style = {style.inputSearch}
            />
        </View>

    )
}