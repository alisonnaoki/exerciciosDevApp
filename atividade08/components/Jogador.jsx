import { StyleSheet, Text, View, FlatList } from 'react-native'
import{Card, Avatar} from 'react-native-paper'
import React from 'react'

export default function Jogador(props) {
    const {nome, numero, imagem} =props
  return (
    <Card style={{margin: 10}}>
        <Card.Title title={nome} subtitle={numero} />
        <Card.Content>
            <Avatar.Image source={{uri: imagem}} size={300} />
        </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({})