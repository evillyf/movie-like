import { StatusBar} from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Image} from "react-native";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";
import GenreCard from "../components/GenreCard";
import MovieCard from "../components/MovieCard";
import ItemSeparator from "../components/ItemSeparator";
import { getNowPlayingMovies } from "../services/MovieService";
import { SafeAreaView } from "react-native";

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


    useEffect(() => {
        getNowPlayingMovies().then(movieResponse => 
            setNowPlayingMovies(movieResponse.data)
        );
    },[]);



    return (
        <ScrollView contentContainerStyle={styles.container}>    
            <StatusBar style="auto" translucent={false} backgroundColor={COLORS.ACTIVE}/>   
            

                <Image
                style={styles.headerimage}
                source={require('../images/cinema1.png')}
            />                   
       
            
            <View style={styles.headerContainer}> 
            </View>

            <View style={styles.genrelistContainer}> 
                <FlatList 
                    data= {Genres} 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item} 
                    ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
                    ListHeaderComponent={() => <ItemSeparator width={20}/>}
                    ListFooterComponent={() => <ItemSeparator width={20}/>}
                    renderItem={({ item }) => (
                        <GenreCard
                            genreName={item}
                            active={item === activeGenre ? true : false}
                            onPress={setActiveGenre}
                        />
                    )}
                />   
            </View>
            <View>
                <FlatList
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
                        />
                    )}
                />
            </View>   
            <View style={styles.headerContainer}>
                <Text style={{...styles.headerTitle, paddingHorizontal: 13,}}>Em breve</Text>
                <Text style={{...styles.headerSubTitle, paddingVertical: 41, paddingHorizontal:13}}>VER TODOS</Text>              
            </View>       
        </ScrollView>
        
                

                
        
    );
};









/* STYLE */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.EXTRA_LIGHT_GRAY,  /* definindo a cor de fundo. COLORS.EXTRA_LIGHT_GRAY ou WHITE ou COLORS.DARK_GRAY*/
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    headerTitle: {
        fontSize: 23,
        fontFamily: "Ultra",
        color: COLORS.BLACK,




    },
    headerSubTitle: {
        width:100,
        height: 100,

    },
    genrelistContainer: {
        paddingVertical: 10,
        
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
        height: 110,
        width: 390,
    }


});

export default HomeScreen;