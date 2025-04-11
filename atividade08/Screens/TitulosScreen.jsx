import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper';

import Titulos from '../components/Titulos'

export default function TitulosScreen() {
  const titulos = [
    {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
    },
    {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
    },
    {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
    },
    {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
    },
    ];
  return (
    <PaperProvider>
        <View style={styles.container}>
            <Text style={styles.title}>Títulos</Text>
            <FlatList
            data={titulos}
            renderItem={({ item }) => 
            <Titulos 
            nome={item.nome}
            anos={item.anos}
            />}
            />

        </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center', 
  },
  title: {
      fontSize: 30,
      marginBottom: 20,
  }
  
})