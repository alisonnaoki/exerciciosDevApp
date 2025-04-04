import { StyleSheet, Text, View, FlatList } from 'react-native'
import{Card, Avatar} from 'react-native-paper'
import React from 'react'

export default function Jogador(props) {
    const {nome, numero, imagem} =props
  return (
    <Card.Title
        style= {{margin:10, padding: 30}}
        title = {nome}
        subtitle = {numero}
        left={(props) => <Avatar.Image  {...props} source={{uri: imagem}} />}
    />
  )
}

const styles = StyleSheet.create({})