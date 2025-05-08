import { StyleSheet, Image, Text} from 'react-native'
import{Card} from 'react-native-paper'
import React from 'react'

export default function TimeFla(props) {
    const {nome, estadio,mascote, escudo, cores, fundacao} =props
  return (
    <Card style={{margin: 10}}>
        <Card.Title title={nome} subtitle={fundacao} />
        <Card.Content>
            <Text>estadio: {estadio}</Text>
            <Text>Mascote: {mascote}</Text>
            {cores.map((cor, index) => (
          <Text key={index} style={styles.colorItem}>*{cor}</Text>
        ))}
            <Image source={{uri: escudo}} style={{width: 300, height: 300}} />
        </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({

})