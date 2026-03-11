import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);

useEffect(()=>{
loadUser();
},[]);

const loadUser = async ()=>{
const storedUser = await AsyncStorage.getItem("user");

if(storedUser){
setUser(JSON.parse(storedUser));
}

setLoading(false);
};

const signup = async(name,email,password)=>{

const newUser = {name,email,password};

await AsyncStorage.setItem("user",JSON.stringify(newUser));

setUser(newUser);
};

const login = async(email,password)=>{

const storedUser = await AsyncStorage.getItem("user");

if(!storedUser){
return "User not found";
}

const parsedUser = JSON.parse(storedUser);
if(parsedUser.email === email && parsedUser.password === password){
setUser(parsedUser);
return null;
}

return "Incorrect credentials";
};

const logout = ()=>{
setUser(null);
};

return(
<AuthContext.Provider value={{user,loading,login,signup,logout}}>
{children}
</AuthContext.Provider>
);

};