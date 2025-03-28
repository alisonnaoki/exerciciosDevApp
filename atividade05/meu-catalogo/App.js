import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Filmes from './components/Filmes';
import Series from './components/Series';

export default function App() {
  const listaFilmes=[
    {
      nome: "Shrek",
      ano: "2016",
      diretor: "DreamWorks",
      tipo: "comédia",
      capa: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/54/04/20150812.jpg'
    },
    {
      nome: "Psicose",
      ano: 1960,
      diretor: "Alfred Hitchcock",
      tipo: "Terror",
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aez9zB1nH9pNLeWERHEnlT0nRCNvhzq0Vw&s'
    },
    {
      nome: "O Beijo da Mulher Aranha",
      ano: 1985,
      diretor: "Hector Babenco",
      tipo: "Drama",
      capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg'
    },
    {
      nome: "Poltergeist- O Fenômeno",
      ano: 1982,
      diretor: "Tobe Hooper",
      tipo: "Terror",
      capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Poltergeist_%281982%29_-_poster.png/200px-Poltergeist_%281982%29_-_poster.png'
    }
  ];
  const listaSeries = [
    {
      nome: "Buffy, a Caça-Vampiros",
      ano: 1997,
      diretor: "Joss Whedon",
      temporadas: 7,
      capa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buffy_the_vampire_slayer.svg/250px-Buffy_the_vampire_slayer.svg.png'
    },
    {
      nome: "Desperate Housewives",
      ano: 2004,
      diretor: "Marc Cherry",
      temporadas: 8,
      capa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Desperate_Housewives_Logo.svg/250px-Desperate_Housewives_Logo.svg.png'
    },
    {
      nome: "Sons of Anarchy",
      ano: 2008,
      diretor: "Kurt Sutter",
      temporadas: 7,
      capa: 'https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg'
    }
  ];
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.tituloFilme}>Filmes</Text>
      {
        listaFilmes.map(
          filme=> {return(
              <Filmes
                nome={filme.nome}
                ano={filme.ano}
                diretor={filme.diretor}
                tipo={filme.tipo}
                capa={filme.capa}  
              />
            )
          }
        )
      }
      <Text style={styles.tituloSerie}>Series</Text>
      {
        listaSeries.map(
          serie=> {return(
              <Series
                nome={serie.nome}
                ano={serie.ano}
                diretor={serie.diretor}
                temporadas={serie.temporadas}
                capa={serie.capa}
              />
            )
          }
        )
      }  
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 30,
  },
   texto:{
    fontSize: 20,
    fontWeight: 600,
    color: 'white'
   },
   tituloFilme:{
    fontSize: 30,
    fontWeight: 900,
    color:'pink',
    textAlign: 'center'
   },
   tituloSerie:{
    fontSize: 30,
    fontWeight: 900,
    color:'orange',
    textAlign: 'center'
   }
});
