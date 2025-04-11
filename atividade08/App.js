import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'


import EscudoScreen from './Screens/EscudoScreen'
import JogadorScreen from './Screens/JogadorScreen'
import TitulosScreen from './Screens/TitulosScreen'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
          name='EscudoScreen'
          component={EscudoScreen}
          options={{
            title:'Tela de Escudo',
            headerTitleAlign: 'center',
            headerTintColor: 'red',
            headerStyle:{
              backgroundColor:'black',
            },
            tabBarIcon: ({color, size}) => <Ionicons name='shield' color={color} size={size}/>
          }}

          />
          <Tab.Screen
          name='JogadorScreen'
          component={JogadorScreen}
          options={{
            title:'Tela de Jogador',
            headerTitleAlign: 'center',
            headerTintColor: 'red',
            headerStyle:{
              backgroundColor:'black',
            },
            tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size}/>
          }}
          />

          <Tab.Screen
          name='TitulosScreen'
          component={TitulosScreen}
          options={{
            title:'Tela de Titulos',
            headerTitleAlign: 'center',
            headerTintColor: 'red',
            headerStyle:{
              backgroundColor:'black',
            },
            tabBarIcon: ({color, size}) => <Ionicons name='trophy' color={color} size={size}/>
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
