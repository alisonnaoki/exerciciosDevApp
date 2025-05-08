import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import TimeScreen from '../screen/TimeScreen'
import TitulosScreen from '../screen/TitulosScreen'
import JogadoresScreen from '../screen/JogadoresScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

        <Drawer.Screen 
            name='Time' 
            component={TimeScreen} 
            options={{
                title: "Time",
                drawerIcon: ({color, size}) => <Ionicons name='shield' color={color} size={size}/>
            }}
        />
        <Drawer.Screen 
            name='Titulos'
            component={TitulosScreen}
            options={{
                title: "Titulos",
                drawerIcon: ({color, size}) => <Ionicons name='trophy' color={color} size={size}/>
            }}
            />
        <Drawer.Screen 
            name='Jogadores' 
            component={JogadoresScreen} 
            options={{
                title: "Jogadores",
                drawerIcon: ({color, size}) => <Ionicons name='person' color={color} size={size}/>
            }}
            />

    </Drawer.Navigator>
  )
}
    