import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilmes from './src/components/bannerFilmes';
import Filmes from './src/data/movies'
import Header from './src/components/header';
import SearchBar from './src/components/searchbar';
import CardFilmes from './src/components/cardFilmes';

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilmes></BannerFilmes>

      <View style={{width:"90%"}}>
      <FlatList 
       horizontal ={true}
       data = {Filmes}
       keyExtractor = {(item) => item.id} 
       renderItem = {({item}) => (

        <CardFilmes></CardFilmes>
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
