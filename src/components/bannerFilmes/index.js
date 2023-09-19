import React from "react";
import { Image, Text } from "react-native";
import style from "./style";

export default function BannerFilmes(){
    
    const imagem = Math.floor(Math.random() * 10 +1);
    
    return(

       <>

            <Text style = {style.textoBanner}>Em Cartaz</Text>
            <Image style = {style.imagemBanner} source = {require(`../../img/movies/${imagem}.jpg`)} />

       </> 

    );
}