import { StatusBar} from "expo-status-bar";
import React, {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, Button, ImageBackground, ScrollView, TouchableOpacity, FlatList, Alert, Image, Switch, SafeAreaView} from "react-native";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";
import GenreCard from "../components/GenreCard";
import MovieCard from "../components/MovieCard";
import ItemSeparator from "../components/ItemSeparator";
import { getNowPlayingMovies, getUpcomingMovies, getAllGenres } from "../services/MovieService";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";
import {EventRegister} from "react-native-event-listeners";
import themeContext from "../config/themeContext";
import Colors from "../constants/Colors";




/* definindo a lista de gêneros dos filmes */
const Genres = ["Todos", "Ação", "Comédia", "Romance", "Terror", "Sci-Fi"];

/* definindo a barra de notificação - cores no arquivo Colors. styles pode ser dark, light, auto ou escolher uma cor 
                <Image
                style={styles.imagepopcorn}
                source={require('./popcorn.png')}
            /> 



*/
const HomeScreen = () => {


    const [activeGenre, setActiveGenre] = useState("Todos");
    const [nowPlayingMovies, setNowPlayingMovies] = useState({});
    const [upcomingMovies, setUpcomingMovies] = useState({});
    const [genres, setGenres] = useState([{id: 10110, name: "Todos"}]);
    

    useEffect(() => {
        getNowPlayingMovies().then((movieResponse) => 
            setNowPlayingMovies(movieResponse.data)
        );
        getUpcomingMovies().then((movieResponse) => 
            setUpcomingMovies(movieResponse.data)
        );
        getAllGenres().then((genreResponse) => 
            setGenres([...genres, ...genreResponse.data.genres])
        );

    },[]);


   const navigation = useNavigation() 

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("login")

        })
    }

    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);



    return (
        <ScrollView style={{...styles.container, backgroundColor: theme.backgroundColor}}>    
            <StatusBar style="auto" translucent={false} backgroundColor={COLORS.ACTIVE}/>   
            


            <SafeAreaView style={styles.safearea}>
            <View style={styles.switch}>
                <Switch  
                trackColor={{ false: "#E5E5E5", true: "#2A2A2A" }}
                thumbColor={mode ? "#FFD580" : "#FFD580"} 
                value={mode} 
                onValueChange={(value) => {
                    setMode(value);
                    EventRegister.emit("changeTheme", value);
                    
                    }}/>
            </View>                        

            <View>
            <TouchableOpacity style={styles.loginBtn}>
                
                    <Text 
                    style={styles.logoutText}
                    onPress={handleSignOut}>
                    Logout</Text>                  
            </TouchableOpacity>  
            </View>
            </SafeAreaView>

            <ImageBackground
                style={styles.headerimage}
                source={require('../images/pipoca_vetor.png')}
            />

            <View style={styles.cardview}>
                <View>
                    <Text style={{...styles.titulo, color: theme.color}}>
                        EM CARTAZ
                    </Text>
                    <ImageBackground
                style={styles.logo}
                source={require('../images/logo_gray.png')}
            />
                </View>
            </View> 


                       



  

            <View style={styles.headerContainer}> 
            </View>
            <View style={styles.genrelistContainer}> 
                <FlatList 
                    data= {genres} 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()} 
                    ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
                    ListHeaderComponent={() => <ItemSeparator width={20}/>}
                    ListFooterComponent={() => <ItemSeparator width={20}/>}
                    renderItem={({ item }) => (
                        <GenreCard
                            genreName={item.name}
                            active={item.name === activeGenre ? true : false}
                            onPress={setActiveGenre}
                        />
                    )}
                />   
            </View>
            <View>
                <FlatList
                    style={styles.list}
                    data={nowPlayingMovies.results}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                    ListHeaderComponent={() => <ItemSeparator width={20} />}
                    ListFooterComponent={() => <ItemSeparator width={20} />}
                    renderItem={({ item }) => (
                        <MovieCard 
                            title={item.title} 
                            language={item.original_language} 
                            voteAvarage={item.vote_avarage}
                            voteCount={item.vote_count}
                            poster={item.poster_path}
                            heartLess={false}
                            onPress ={() =>navigation.navigate("movie", {movieId: item.id})}
                        />
                    )}
                />
            </View>               
            <View style={styles.headerContainer}>
                <Text style={{...styles.headerTitle, paddingHorizontal: 13, color: theme.color}}>Em breve</Text>
                <Text style={{...styles.headerSubTitle, paddingVertical: 41, paddingHorizontal:13, color: theme.color}}>VER TODOS</Text>              
            </View> 
            <View>
            <FlatList
                    data={upcomingMovies.results}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                    ListHeaderComponent={() => <ItemSeparator width={20} />}
                    ListFooterComponent={() => <ItemSeparator width={20} />}
                    renderItem={({ item }) => (
                        <MovieCard 
                            title={item.title} 
                            language={item.original_language} 
                            voteAvarage={item.vote_avarage}
                            voteCount={item.vote_count}
                            poster={item.poster_path}
                            size={0.7}
                            onPress ={() =>navigation.navigate("movie", {movieId: item.id})}
                        />
                    )}
                />
            </View>                             
        </ScrollView>
        
        
                

                
        
    );
};









/* STYLE */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ACTIVE,   /* definindo a cor de fundo. COLORS.EXTRA_LIGHT_GRAY ou WHITE ou COLORS.DARK_GRAY.           backgroundColor: COLORS.EXTRA_LIGHT_GRAY, */

    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: -70,



    },

    headerTitle: {
        fontSize: 23,
        fontFamily: "Ultra",
        color: COLORS.BLACK,

    },
    titulo:{
        fontSize: 26,
        fontFamily: "Ultra",
        top: -90,
        left: 30,

    },
    headerSubTitle: {
        width: 100,
        height: 100,

    },
    genrelistContainer: {
        top: -45,


        
    },
    image: {
        width:80, 
        height: 80,

    },
    imagepopcorn: {
        width: 30,
        height:35,
    },
    popcordheader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerimage: {
        height: 150,
        width: 150,
        left: -44,
        top: -67,
    },

   
    loginBtn: {
      width:"80%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:-25,
      backgroundColor:COLORS.YELLOW_LIGHT,
      left: 274,
      width: 75,
      height: 23,
      top: -30,     
    },
    logoutText:{
        color: COLORS.BLACK,
        fontWeight: "bold",
    },
    switch: {
        justifyContent:"center",
        marginTop:40,
        left: 128,
        width: 75,
        height: 23,
        top: -30,

    },
    safearea:{
        width: 700,
        top:60,
        backgroundColor: COLORS.ACTIVE,
        height: 40,
        left: 0,
        top: 0,
    },
    popcorn_image:{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    logo:{
        width: 80,
        height: 80,
        right: 0,
        bottom: 0,
        top: -120,
        right: 15,
        position: "absolute",

    },
    list: {
        top: -30,
    }


});

export default HomeScreen;