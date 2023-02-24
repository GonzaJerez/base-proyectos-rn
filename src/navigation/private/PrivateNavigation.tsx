import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens/HomeScreen';

export type AuthStackNavigation = {
    HomeScreen: undefined
}

const Stack = createNativeStackNavigator<AuthStackNavigation>();

export function PrivateNavigation() {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />

        </Stack.Navigator>
    );
}