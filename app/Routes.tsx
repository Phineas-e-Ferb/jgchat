import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from "react";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import UserChatList from "./screens/UserChatList";
import Chat from "./screens/Chat";
import { UserContext } from './contexts/userContext';

export type RootStackParamList = {
    Home: undefined;
    SignUp: undefined;
    SignIn: undefined;
    UserChatList: undefined;
    Chat: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();


const Routes = () => {
    const { user } = useContext(UserContext);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!user ?
                    <>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SignUp"
                            component={SignUp}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SignIn"
                            component={SignIn}
                            options={{ headerShown: false }}
                        />
                    </> :
                    <>
                        <Stack.Screen
                            name="UserChatList"
                            component={UserChatList}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Chat"
                            component={Chat}
                            options={{ headerShown: false }}
                        />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Routes