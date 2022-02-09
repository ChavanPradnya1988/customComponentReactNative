import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function RadioButton({data}) {
    const [current, setCurrent] = useState("");
   

    const styles = StyleSheet.create({
    checkBoxSelected :  {
        backgroundColor: "rgb(64, 64, 64)",
        borderWidth: 1,
        padding:10,
        margin:5,
        borderRadius:50,
        height: 10,
        width: 10,
    },
    checkBox:  {
        
        borderWidth: 1,
        padding:10,
        margin:5,
        borderRadius:50,
        height: 10,
        width: 10
    }
    
})
    return (
        
            <View>
            { data.map((item) => {
          
                return (
                    <TouchableOpacity onPress={()=>setCurrent(item.value)} style={{flexDirection:"row"}} key={item.id}>
                        <View style={current === item.value ? styles.checkBoxSelected : styles.checkBox}>
            
                           </View>
                        <View>
                            <Text>
                             {item.value}
                           </Text>
                        </View>
                         
                    </TouchableOpacity>
                 )
            })
            }
        </View>
       
     
    );
   
}

