import Mybutton from '@/Components/Mybutton';
import Button from '@/Components/Mybutton';
import { Link, useRouter } from 'expo-router';
import { View, Text } from 'react-native';


const Index = () =>{
  const router = useRouter();
  

   const onContinue = () =>{

    router.navigate('/Login')
   }

   return(
    <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
      <Mybutton title={"continue"} onPress={onContinue}/>
    
    </View>
   )
}


export default Index;