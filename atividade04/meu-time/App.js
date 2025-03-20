import { StatusBar } from 'expo-status-bar';
import React from "react";
import {Button,Image,StyleSheet,Text,View,ScrollView,} from "react-native";

export default function App() {
  function alerta(){
    alert('Gooollll porraaa!!')
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={require('./images/bordao.jpg')}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text style={styles.tituloTime}>Leicester City</Text>
      <Text style={styles.textoTime}>Fundação: 1884 (141 anos) como Leicester Fosse</Text>
      <Text style={styles.subtitulo}>Estádio: King Power Stadium</Text>
      <Image
        source={require('./images/estadio.jpg')}
        style={{
          width: 400,
          height: 200,
        }}
      />
      <Text style={styles.textoTime}>Capacidade: 32,261 pessoas</Text>
      <Text style={styles.subtitulo}>Localização: Leicester, East Midlands, Inglaterra</Text>
      <Image
        source={require('./images/local.jpg')}
        style={{
          width: 400,
          height: 200,
        }}
      />
      <Text style={styles.subtitulo}>Treinador(a)	Ruud van Nistelrooy</Text>
      <Image
        source={require('./images/van.jpg')}
        style={{
          width: 400,
          height: 200,
        }}
      />
      <Text style={styles.subtitulo}>ARTILHEIRO: Jamie Vardy</Text>
      <Image
        source={require('./images/vardy.jpg')}
        style={{
          width: 400,
          height: 200,
        }}
      />
      <Button title='Chute' onPress={alerta}/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  tituloTime:{
    fontSize: 30,
    fontWeight: 900,
    color: 'blue',
  },
  textoTime:{
    fontSize: 15,
    alignItems: 'center',
    color: 'black',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 500,
    color: 'dark-blue',
  }
});
