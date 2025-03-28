import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Series(props) {
  const { nome, ano, diretor, temporadas, capa } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome da Série: {nome}</Text>
      <Text style={styles.texto}>Ano de Lançamento: {ano}</Text>
      <Text style={styles.texto}>Diretor: {diretor}</Text>
      <Text style={styles.texto}>Número de Temporadas: {temporadas}</Text>
      <Image
        source={{
          uri: capa
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f8f8f8',
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 8,
    },
    capa: {
      width: 250,
      height: 350,
      borderRadius: 10,
      marginBottom: 15,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    texto: {
      fontSize: 18,
      color: '#666',
      marginVertical: 5,
    },
  });