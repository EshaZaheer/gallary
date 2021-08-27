import React from 'react';
import { View, Text,  TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary} from 'react-native-image-picker';

let options = {
  title: 'Select Image',
  mediaType:'photo',
  maxHeight:100,
  maxWidth:100
};
const App = ()=>{
  return(
    <View style={{backgroundColor:'pink', justifyContent:'center', alignItems:"center", flex:1}}>
    

      <Text style={{color:"blue"}}>
          Welcome
      </Text>
      <TouchableOpacity
      onPress={()=> launchCamera(options, (response)=>{
        console.log('Response = ', response);})}
      style={{backgroundColor:'purple', alignItems:"center", marginTop:20}}>
        <Text>
          Open Camera
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> launchImageLibrary(options, (response)=>{
        console.log('Response = ', response);
      })}
      style={{backgroundColor:'blue', alignItems:"center",  margineTop:200}}>
        <Text >
          Open gallery
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default App;