import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home'
import Details from '../screens/Details'

export default function routes(){

    const stack = createStackNavigator();


    return(
        <NavigationContainer>
        
            <stack.Navigator> 

                <stack.Screen name ='home' component ={Home}/>
                <stack.Screen name ='details' component ={Details}/>

            </stack.Navigator>

        </NavigationContainer>
    );
}