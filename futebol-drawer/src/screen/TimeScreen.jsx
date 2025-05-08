import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper';

import TimeFla from '../../components/TimeFla';

export default function TimeScreen() {
    const time = { 
        nome: "Flamengo", 
        escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg", fundacao: "15 de novembro de 1895", 
        estadio: "Maracanã", 
        mascote: "Urubu", 
        cores: ["Vermelho", "Preto"] 
        }; 
        
  return (
    <PaperProvider>
        <View style={styles.container}>
            <Text style={styles.title}>Time</Text>
            <TimeFla
            nome={time.nome}
            fundacao={time.fundacao}
            estadio={time.estadio}
            mascote={time.mascote}
            escudo={time.escudo}
            cores={time.cores}
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