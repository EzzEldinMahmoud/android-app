import React from 'react';
import {View , Image , StyleSheet,Text} from 'react-native';


const styles = StyleSheet.create({
container:{
    alignItems:'center',
    padding:20,
    flexDirection:'column',

},
textcontainer:{

    paddingTop:10,
    textAlign:'center',

},
globologo:{
    height:100,
    width:150,
},
title:{
    fontFamily:'Ubuntu-Regular',
},
subtitle:{
    paddingTop:5,
    fontFamily:'Ubuntu-Regular',
},
content:{
    fontWeight:300,
    fontFamily:'Ubuntu-Light',
},


});

const Home =(props)=>{

return(

// JSX HERE

<View    style={{flexDirection:'column'}}>
<Image
style={styles.globologo}
source={require('C:\Users\ezz\Desktop\project\here.png')}
/>
<Text style={styles.title}>WElcome</Text>
<Text style={styles.subtitle}>{props.username}</Text>
<View   style={styles.textcontainer} >
<Text style={styles.content}>{introText}</Text>
</View>
</View>
);
}
const introText = `Quid ad utilitatem tantae pecuniae? Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Eodem modo is enim tibi nemo dabit, quod, expetendum sit, id esse laudabile. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur?`;
export default Home;
