import { StatusBar} from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import COLORS from "../constants/Colors";
import GenreCard from "../components/GenreCard";
import ItemSeparator from "../components/ItemSeparator";



/* definindo a lista de gêneros dos filmes */
const Genres = ["Todos", "Ação", "Comédia", "Romance", "Horror", "Sci-Fi"]

/* definindo a barra de notificação - cores no arquivo Colors. styles pode ser dark, light ect */
const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>    
            <StatusBar style="auto" translucent={false} backgroundColor={COLORS.BASIC_BACKGROUND}/> 
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}> EM CARTAZ</Text>
                <Text style={styles.headerSubTitle}> VER TODOS</Text>
            </View>
            <View style={styles.genrelistContainer}> 
                <FlatList data= {Genres} 
                horizontal 
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item} 
                ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
                ListHeaderComponent={() => <ItemSeparator width={20}/>}
                ListFooterComponent={() => <ItemSeparator width={20}/>}
                renderItem={({item}) => <GenreCard />}
                />
            </View>
        </ScrollView>
        
    );
};

/* STYLE */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.EXTRA_LIGHT_GRAY,  /* definindo a cor de fundo */
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

    },
    headerSubTitle: {
        fontSize: 13,
        color: COLORS.ACTIVE,

    },
    genrelistContainer: {
        paddingVertical: 10,
    }

});

export default HomeScreen;