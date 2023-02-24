import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigation } from './auth/AuthNavigation';
import { PrivateNavigation } from './private/PrivateNavigation';
import { ThemeContext } from '../context/theme/ThemeContext';

export type RootStackNavigation = {
    AuthNavigation: undefined,
    PrivateNavigator: undefined;
}

const Stack = createNativeStackNavigator<RootStackNavigation>();

export function RootNavigation() {

    const {theme} = useContext(ThemeContext)

    return (
        <NavigationContainer
        theme={theme}
        >

            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >

                <Stack.Screen
                    name="AuthNavigation"
                    component={AuthNavigation}
                />

                <Stack.Screen
                    name="PrivateNavigator"
                    component={PrivateNavigation}
                />


            </Stack.Navigator>

        </NavigationContainer>
    );
}