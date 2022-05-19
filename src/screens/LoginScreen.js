import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState} from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import {auth } from '../../firebase';
import { useNavigation } from '@react-navigation/core';
import { StatusBar} from "expo-status-bar";
import COLORS from '../constants/Colors';


const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("home")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Cadastrado com:',user.email);
        })
        .catch(error => alert(error.message))
    }


    const handleLogin = () => {
        auth 
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log ('Logado com:', user.email);
        })
        .catch(error => alert(error.message))
    }





  return (
    
    <ImageBackground
    source={require('../images/back-movie.jpg')} resizeMode="cover" style={styles.image}
    >   
    <StatusBar style="auto" translucent={false} backgroundColor={COLORS.ACTIVE}/> 

    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    enabled={false}
    style={styles.container}
    >
      <View style={styles.inputContainer}>



          <TextInput
        placeholder="E-mail"
        returnKeyType="next"
        onSubmitEditing={() => { this.secondTextInput.focus(); }}
        blurOnSubmit={false}         
        value= {email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
          />
        <TextInput
            ref={(input) => { this.secondTextInput = input; }}
            placeholder="Senha"          
            value={password}
            onChangeText={text => setPassword(text) }
            style={styles.input}
            secureTextEntry
        />          
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
              onPress={handleLogin}
              style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Cadastre-se</Text>
          </TouchableOpacity>      
            
      </View>

    </KeyboardAvoidingView>
    </ImageBackground>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,


    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },
    button: {
        backgroundColor: Colors.ACTIVE,
        width: 200,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: Colors.ACTIVE,
        borderWidth: 2,

    },
    buttonOutlineText: {
        color: Colors.ACTIVE,
        fontWeight: '700',
        fontSize: 16,

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,

    },
    image: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        
    }

})