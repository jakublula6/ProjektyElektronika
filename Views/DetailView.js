import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'

const DetailView = (props) => {
    return (
        <View>
            {/* props.title w header*/}
            <Text>Author: {props.author}</Text>
            <Text>Year of creation: {props.year}</Text>
            <Text onPress ={()=> Linking.openUrl(props.description)}
            style ={styles.linkText}>
                File with description
            </Text>
            {props.files ===false? 
                null:
                <Text onPress ={()=> Linking.openUrl(props.files)}
                style ={styles.linkText}>
                    Other files for downloading:
                </Text>
            }
        </View>
    )
}

export default DetailView

const styles = StyleSheet.create({
    linkText:{
        color:"#332233"
    }
})
