import { StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Image} from "react-native";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";
import GenreCard from "../components/GenreCard";
import MovieCard from "../components/MovieCard";
import ItemSeparator from "../components/ItemSeparator";



/* definindo a lista de gêneros dos filmes */
const Genres = ["Todos", "Ação", "Comédia", "Romance", "Terror", "Sci-Fi"];

/* definindo a barra de notificação - cores no arquivo Colors. styles pode ser dark, light, auto ou escolher uma cor */
const HomeScreen = () => {
    const [activeGenre, setActiveGenre] = useState("Todos");


    return (
        <ScrollView contentContainerStyle={styles.container}>    
            <StatusBar style="auto" translucent={false} backgroundColor={COLORS.BASIC_BACKGROUND}/>   

            
            <View style={styles.headerContainer}> 
                <Text style={styles.headerTitle}>EM CARTAZ</Text>
                <Image
                style={styles.image}
                source={require('./logo_gray.png')}
            />
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
                    data={Genres}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                    ListHeaderComponent={() => <ItemSeparator width={20} />}
                    ListFooterComponent={() => <ItemSeparator width={20} />}
                    renderItem={({ item }) => <MovieCard />}
                                       
                
                />
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
        fontSize: 28,
        fontFamily: FONTS.BOLD,
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
        width:60, 
        height: 60,

    }



});

export default HomeScreen;