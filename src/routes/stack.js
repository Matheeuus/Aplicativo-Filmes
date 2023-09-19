import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

export default function Routes(){
    
    const Stack = createStackNavigator();
    
    return(
  
            <Stack.Navigator initialRouteName='home'>

                <Stack.Screen
                    name="home" 
                    component={Home}
                    options={{
                        title: 'Início',
                        headerShown: false
                    }
                }
                />
                <Stack.Screen
                    name="details"
                    component={Details}
                    options={{
                        headerTransparent: true,
                        headerTitle: '',
                        headerBackImage: ()=>(
                            <View style={{
                                borderRadius: '50%',
                                backgroundColor: 'rgba(20,20,20,0.5)',
                                width: '4vh',
                                height: '4vh',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <AntDesign name="left" size={'1.5em'} color="#fff" />
                            </View>
                        )
                    }}
                />
            
            </Stack.Navigator>
    
    )
}