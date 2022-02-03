import React, {useEffect, useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView} from 'react-native';
import ListItem from '../components/ListItem';
import Theme from '../Theme';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';

//Import tymczasowej bazy danych
//import Data from '../Data.json';

export default function ListView(props) {
  
  const render = (Data) =>
  {
    props.setItemList(Data.map(project =>
      <TouchableOpacity 
      key = {project.id}
        style={{width:"100%"}}
        onPress = {()=>{
          props.setScene("Detail")
          props.setDetail(project)
        }}>
        <ListItem title = {project.title} author = {project.author} year = {project.academic_year} src = {project.files_link} />
      </TouchableOpacity>
      ))
  }
  useEffect(() => {
    if(props.isGeneral)
    {
      //props.setData(props.primaryData)
      render(props.Data)
    }  
  },[props.Data])
  //Pasek wyszukiwania
  const [searchedValue, setSearchedValue] = useState("")
  const search = () =>{
    const regex = new RegExp(searchedValue, "i")
    render(props.Data.filter(item => item.title.search(regex) != -1 || item.author.search(regex) != -1))
    props.setIsGeneral(false)
  }
  //filtr tylko projekt
  const onlyProject = () =>{
    props.setData(props.Data.filter(item => item.is_diploma === true))
    render(props.Data)
  }
  //filtr kategoria
  const category = (keyword) =>{
    keyword != "Wszystkie" ? 
    props.setData(props.primaryData.filter(item => item.category === keyword))
    : props.setData(props.primaryData)
    render(props.Data)
  }
  //filtr sortowanie
  const sortList = (condition) =>{
    
    switch (condition) {
      case 'data':
        render(props.Data.sort((a,b)=>b.academic_year - a.academic_year))
        break;
      case 'tytuł':
        render(props.Data.sort((a,b)=>(a.title > b.title) ? 1 : -1))
        break;
      case 'dyplomowe':
        onlyProject()
        break;
      case 'domyślne':
        props.setData(props.primaryData)
        render(props.Data)
        break;
      default:
        render(props.Data)
        break;
    }
  } 
  return (
    <View style={styles.container}>
      <Header title = 'Projekty Elektronika'/>
      <Toolbar search = {search} searchedValue = {searchedValue} setSearchedValue = {setSearchedValue} onlyProject = {onlyProject} category = {category} categories = {props.categories} 
      sortList = {sortList} select = {props.select} setSelect={props.setSelect} sort = {props.sort}  setSort={props.setSort}/>
      <ScrollView style = {styles.listContainer}>
        {props.itemList}
        {props.isGeneral ? 
          <TouchableOpacity onPress={()=>{props.setScene("About")}} style = {styles.footer}>
            <Text style = {styles.footerTxt}>O aplikacji</Text>
          </TouchableOpacity>
          : null}
      </ScrollView>
      {props.isGeneral ? null :
      <TouchableOpacity style = {styles.button} onPress={()=>{props.setIsGeneral(true); render(props.Data); setSearchedValue("")}}>
        <Text style = {styles.btnText}>Powrót</Text>
      </TouchableOpacity>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.background
  },
  listContainer:{
    width:'100%',
    padding:'5%',
    marginVertical: 20,
    backgroundColor:'#fff',
    marginVertical: 10,
    backgroundColor: Theme.background
  },
  button:{
    width:'90%',
    marginHorizontal:'5%',
    marginBottom:15,
    backgroundColor:'white',
    padding:20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 19,
    borderRadius: 5
  },
  btnText:{
    fontSize:18,
    textAlign:'center'
  },
  footer:{
    padding:20,
    marginBottom:25
  },
  footerTxt:{
    textAlign:'center'
  }
});
