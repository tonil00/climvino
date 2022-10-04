import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Homepage } from '../screens/main/Homepage';

export function MainNavigator() {
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
            initialRouteName="Home"
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
                            outputRange: [0, 1],
                            extrapolate: 'clamp'
                        }),
                    },
                }),
            }}
        >
            <Stack.Screen name="Home" component={Homepage} />
        </Stack.Navigator>
    );
}