import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Filmes(props) {
  const { nome, ano, diretor, tipo, capa } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: capa
        }}
        style={styles.capa}
      />
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.texto}>Ano de Lançamento: <Text style={styles.info}>{ano}</Text></Text>
      <Text style={styles.texto}>Diretor: <Text style={styles.info}>{diretor}</Text></Text>
      <Text style={styles.texto}>Gênero: <Text style={styles.info}>{tipo}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
    maxWidth: 350, // To limit the width of the content on larger screens
  },
  capa: {
    width: 250,
    height: 375,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 15,
  },
  texto: {
    fontSize: 18,
    color: '#555555',
    textAlign: 'center',
    marginVertical: 5,
  },
  info: {
    fontWeight: '600',
    color: '#333333',
  },
});
