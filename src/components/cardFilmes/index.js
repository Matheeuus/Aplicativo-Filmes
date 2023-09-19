import React from "react";
import style from "./style";
import {Image, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Card(filme){

    const Navigation = useNavigation();

    return(

        <TouchableOpacity style = {style.containerFilmes}
            onPress={()=> Navigation.navigate('details',{titulo:filme.nome, nota:filme.nota, imagem:filme.imagem})}
        >

            <Image style = {style.imagemFilmes} source = {{uri:`https://image.tmdb.org/t/p/original/${filme.imagem}`}} />
            <Text style = {style.tituloFilmes} >{filme.nome}</Text>
            <Text style = {style.notaFilmes} >{filme.nota}</Text>

        </TouchableOpacity>

    );
}