import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const ListItem = (props) => {
    return (
        <View style = {styles.item}>
            <Text style = {styles.caption}>Tytuł:</Text>
            <Text style = {styles.info}>{props.title}</Text>
            <Text style = {styles.caption}>Autor:</Text>
            <Text style = {styles.info}>{props.author}</Text>
            <Text style = {styles.caption}>Rok utworzenia:</Text>
            <Text style = {styles.info}>{props.year}</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        padding: 10,
        marginVertical:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12,
        elevation: 19,
        borderRadius: 5
    },
    img:{
        flex:1
    },
    caption:{
        fontSize:16
    },
    info:{
        marginLeft:25,
        fontSize:20,
        fontStyle:'italic'
    }
})
