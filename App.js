import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './components/ListItem';
import Footer from './components/Footer';

//Import tymczasowej bazy danych
import Data from './Data.json';

export default function App() {
  const itemList = Data.map(project =>{
    <ListItem title = {project.title} author = {project.author} year = {project.year}/>
  })
  return (
    <View style={styles.container}>
      {/*   
          Header 
          List toolbar (search field), sort by select
      */}
      <View style = {styles.listContainer}>
        {itemList}
      </View>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer:{
    padding:'5%',
    backgroundColor:'#fff'
    //shadow
  }
});
