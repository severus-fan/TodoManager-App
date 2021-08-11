import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Button, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import { getHeaderTitle } from '@react-navigation/elements';
import {TodoItem} from './components/TodoItem';


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
            <FlatList
                // data={todoList}
                // keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item, index }) => <TodoItem dataItem={item} key={item.id} checkTodo={(item) => this._checkTodo(item)} />}
            />
            <TouchableOpacity style={styles.addBtn} onPress={() => { alert("add") }}>
                <Ionicons name="md-add" size={38} color="#fff" />
            </TouchableOpacity>
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

const Tab = createBottomTabNavigator();

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

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    addBtn: {
        position: "relative",
        left: 130,
        bottom: 20,
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: "tomato",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }
})




// import CalendarScreen from './screens/calendar'
// import TodoScreen from './screens/todo'
// import SettingsScreen from './screens/settings'

// export const TodolistTabs = createBottomTabNavigator({
//     Calendar: { screen: CalendarScreen },
//     Todo: { screen: TodoScreen },
//     Settings: { screen: SettingsScreen },
// },
//     {
//         navigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, tintColor }) => {
//                 const { routeName } = navigation.state;
//                 let iconName;
//                 switch (routeName) {
//                     case "Calendar":
//                         iconName = focused ? 'calendar' : 'calendar-outline';
//                         break;
//                     case "Todo":
//                         iconName = focused ? 'list' : 'list-outline';
//                         break;
//                     case "Settings":
//                         iconName = focused ? 'settings' : 'settings-outline';
//                         break;
//                 }
//                 return <Ionicons name={iconName} size={25} color={tintColor} />
//             }
//         }),
//         tabBarOptions: {
//             activeTintColor: '#FF4081',
//             inactiveTintColor: '#455A64',
//             labelStyle: {
//                 fontSize: 13,
//             },
//             style: {
//                 backgroundColor: '#fff',
//             }
//         },
//     })