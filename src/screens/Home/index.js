import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilmes from '../../components/bannerFilmes';
import Filmes from '../../data/movies'
import Series from '../../data/series'
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import CardFilmes from '../../components/cardFilmes';
import CardSeries from '../../components/cardSeries';
import titulo from '../../components/bannerFilmes/style'

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilmes></BannerFilmes>

     <Text style ={titulo.textBanner}>Filmes</Text> 


      <View style={{width:"90%"}}>
      <FlatList 
       horizontal ={true}
       data = {Filmes}
       keyExtractor = {(item) => item.id} 
       renderItem = {({item}) => (
      

        <CardFilmes 

      
        titulo = {item.nome}
        nota = {item.nota}
        imagem = {item.imagem}

        >
        </CardFilmes>

       )}
      />

      </View>
      <Text style ={titulo.textBanner}>Series</Text>

      <View style={{width: '90%'}}>
        
        <FlatList 
        horizontal ={true}
        data = {Series}
        keyExtractor = {(item) => item.id} 
        renderItem = {({item}) => (

          <CardSeries 
          titulo = {item.nome}
          nota = {item.nota}
          imagem = {item.imagem}

          >
          </CardSeries>

        )}
        />
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center"
    
    
  },
});
