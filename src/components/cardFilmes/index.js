import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import styles from './style';

export default function CardFilmes(){
    return(
        <TouchableOpacity style ={styles.containerFilmes}>
            <Image style = {styles.imagemFilmes} source = {require('../../Img/1.jpg')}/>
            <Text style = {styles.tituloFilmes}> Adão Negro </Text>
            <Text style = { styles.notaFilmes}> 8,8 </Text>

        </TouchableOpacity>
    );
}