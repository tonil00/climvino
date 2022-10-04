// Auth Navigation Stack and Settings
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNavigator } from './MainNav';
import { Introduction } from '../screens/intro/Introduction';
import { Register } from '../screens/intro/Register';

export const AuthNavigator = () => {
    const Stack = createStackNavigator();

    const config = {
        animation: 'spring',
        config: {
            stiffness: 2500,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };

    return (
        <Stack.Navigator
            initialRouteName={"TabMainNavigator"}
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                animationEnabled: false,
                cardOverlayEnabled: true,
                cardShadowEnabled: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
                cardStyle: { backgroundColor: 'transparent' },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        }),
                    },
                    overlayStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 0.5],
                            extrapolate: 'clamp'
                        }),
                    },
                }),
            }}
        >

            <Stack.Screen name="Introduction" component={Introduction} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Main" component={MainNavigator} options={{ animationEnabled: true }} />
        </Stack.Navigator>
    );
}