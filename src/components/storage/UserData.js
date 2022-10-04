import AsyncStorage from '@react-native-async-storage/async-storage';

//Stores User Data as String
export const setUserData = async (name, value) => {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
}

//Returns User Data as Object
export const getUserData = async (name) => {
    try {
        const value = await AsyncStorage.getItem(name)
        if (value !== null) {
            return JSON.parse(value)
        } else {
            //console.log("\u001b[1;34mThe value of: " + name + " is not defined.")
        }
    } catch (e) {
        console.log(e);
    }
}