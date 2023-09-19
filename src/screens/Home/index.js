import { StyleSheet, Text, View, FlatList } from 'react-native';
import style from '../../components/header/style';

import Header from '../../components/header/index';
import Search from '../../components/searchBar/index';
import BannerFilmes from '../../components/bannerFilmes/index';
import Card from '../../components/cardFilmes';

import filmes from '../../data/movies';
import series from '../../data/series';
import titulo from '../../components/bannerFilmes/style';

import React,{useState,useEffect} from 'react';



export default function App() {


  document.title = 'topFilmes';

  const [movies,setMovies] = useState([])

  useEffect (()=>{

    async function getMovies(){

      try{
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f6340c95d135213c8cfba6b649e91cf2&language=pt-BR")
      const data = await response.json();
      console.log(data.results)
      setMovies(data.results)
    }
    catch(error){
      console.error("DEU RUIM!!!!!!",error)
    }
    }

    getMovies();
 
  },[])

  document.title = 'topFilmes';

  const [series,setSeries] = useState([])

  useEffect (()=>{

    async function getSeries(){

      try{
      const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=f6340c95d135213c8cfba6b649e91cf2&language=pt-BR")
      const data = await response.json();
      console.log(data.results)
      setSeries(data.results)
    }
    catch(error){
      console.error("DEU RUIM!!!!!!",error)
    }
    }

    getSeries();
 
  },[])



  return (
    <View style={style.container}>
      
      <Header/>
      <Search/>
      <BannerFilmes/>

      <Text style={titulo.textoBanner}>Filme</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {movies}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
            nome = {item.title}
            nota = {item.vote_average}
            imagem = {item.poster_path}
            descricao = {item.overview}
            
            />

          )}
        
        />
      </View>  

      <Text style={titulo.textoBanner}>Séries</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {series}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
              nome = {item.original_name}
              nota = {item.vote_average}
              imagem = {item.poster_path}
              descricao = {item.overview}
            
            />

          )}
        
        />
      </View>  

    </View>
  );
}
