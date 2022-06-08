import React from 'react'
import { View, StyleSheet, Text,Image } from 'react-native'
import { getPoster } from '../services/MovieService';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const CastCard = ({originalName, image, characterName}) => {
    return ( 
    <View style={styles.container}>
        <Image source={{uri: getPoster(image)}} resizeMode="cover" style={styles.image}/>
        
        <Text style={styles.originalName} numberOfLines={2}>{originalName}</Text>
        <Text style={styles.characterName} numberOfLines={2}>{characterName}</Text>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 20,
    
    },
    image:{
        height: 120,
        width: 80,
        borderRadius: 10,
    },
    originalName:{
        width:80,
        color: Colors.BLACK,
        fontFamily: Fonts.BOLD,
        fontSize: 12,
    },
    characterName:{
        width:80,
        color: Colors.LIGHT_GRAY,
        fontFamily: Fonts.BOLD,
        fontSize: 10,
    },
});
export default CastCard;