import { StyleSheet, Text, View, FlatList } from 'react-native'
import{ Card } from 'react-native-paper'
import React from 'react'

export default function Titulos(props) {
    const {nome, anos} =props
  return (
    <Card style={{margin: 10}}>
        <Card.Title style={{width: 300}} title={nome}/>
        <Card.Content>
            <Text>O título foi conquistados nos anos: {anos.join(', ')}</Text>
        </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({})