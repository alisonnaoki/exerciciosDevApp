import { StyleSheet, Text } from 'react-native'
import{Card, Avatar} from 'react-native-paper'
import React from 'react'

export default function Jogadores(props) {
    const {nome, numero, posicao, idade, imagem} =props
  return (
    <Card style={{margin: 10}}>
        <Card.Title title={nome}/>
        <Card.Content>
            <Text>Número: {numero}</Text>
            <Text>Posição: {posicao}</Text>
            <Text>Idade: {idade}</Text>
            <Avatar.Image source={{uri: imagem}} size={300} />
        </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({})