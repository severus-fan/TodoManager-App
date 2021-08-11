import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import { getHeaderTitle } from '@react-navigation/elements';

// import CalendarScreen from './screens/calendar'
// import TodoScreen from './screens/todo'
// import SettingsScreen from './screens/settings'

export const TodolistTabs = createBottomTabNavigator({
    Calendar: { screen: CalendarScreen },
    Todo: { screen: TodoScreen },
    Settings: { screen: SettingsScreen },
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case "Calendar":
                        iconName = focused
                            ? 'calendar'
                            : 'calendar-outline';
                        break;
                    case "Todo":
                        iconName = focused
                            ? 'todo'
                            : 'todo-outline';
                        break;
                    case "Settings":
                        iconName = focused ? 'settings' : 'settings-outline';
                }

                if (routeName === 'All') {
                    iconName = `ios-list-box${focused ? '' : '-outline'}`
                } else if (routeName === 'Completed') {
                    iconName = `ios-flag${focused ? '' : '-outline'}`
                } else if (routeName === 'Incomplete') {
                    iconName = `ios-create${focused ? '' : '-outline'}`
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />

            }
        }),
        tabBarOptions: {
            activeTintColor: '#FF4081',
            inactiveTintColor: '#455A64',
            labelStyle: {
                fontSize: 13,
            },
            style: {
                backgroundColor: '#fff',
            }
        },
    })


function CalendarScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}
function TodoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

// const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    // tabBarShowLabel:false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case "Calendar":
                                iconName = focused ? 'calendar' : 'calendar-outline';
                                break;
                            case "Todo":
                                iconName = focused ? 'list' : 'list-outline';
                                break;
                            case "Settings":
                                iconName = focused ? 'settings' : 'settings-outline';
                                break;
                        }
                        return <Ionicons name={iconName} size={30} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Calendar" component={CalendarScreen} />
                <Tab.Screen name="Todo" component={TodoScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}