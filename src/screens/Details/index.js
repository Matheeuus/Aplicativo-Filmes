import React from 'react'
import { View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import style from './style';
import Stars from 'react-native-stars'
import { FontAwesome } from '@expo/vector-icons';

export default function Details(){

    const route = useRoute();
    const data = {descricao:route.params.descricao, titulo:route.params.titulo, nota:parseFloat(route.params.nota), imagem:route.params.imagem}

    return(
        <View style={style.container}>
            <Image style={style.img} source={{uri:`https://image.tmdb.org/t/p/original/${data.imagem}`}} />
            <Text style={style.title}>{data.titulo}</Text>
            <Text style={style.descricao}>{data.descricao}</Text>
           
            <Stars
                default={data.nota}
                count={10}
                half={true}
                //starSize={[style.fullStar.size, style.fullStar.size]}
                disabled={true}
                fullStar={<FontAwesome name="star" size={25} color={'#FFD700'} />}
                emptyStar={<FontAwesome name="star-o" size={25} color={'#fff'} />}
                halfStar={<FontAwesome name="star-half-empty" size={25} color={'orange'} />}
            />
        </View>
    )
}