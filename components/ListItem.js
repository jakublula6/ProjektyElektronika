import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Theme from '../Theme'

const ListItem = (props) => {
    return (
        <View style = {styles.item}>
            <Text>{props.title}</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    item:{
        backgroundColor:Theme.primary,
    }
})
