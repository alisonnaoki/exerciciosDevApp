import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { PaperProvider, Card, Title } from 'react-native-paper';



export default function EscudoScreen() {
  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    };
  return (
    <PaperProvider>
      <View style={styles.container}>
      <Text style={styles.title}>Escudo</Text>
      <Card>
        <Card.Content>
          <Title>{time.nome}</Title>
          <Image source={{uri: time.escudo}} style={styles.escudo} />
        </Card.Content>
      </Card>
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
  },
  escudo: {
    width: 300,
    height: 300,
  }
  
})