import { Text, View } from "react-native";
import { Card } from '@rneui/themed';

export default function Index() {
  return (
    <View style={{ flexDirection: 'row', justifyContent:'center', padding: 10 }} >
      
    {/* Card 1 */}
    <Card containerStyle={{ width: 230, borderRadius: 10, backgroundColor:'grey' }}>
    <Card.Title>Todays Quote</Card.Title>
      <Text className="text-#030303 text-center" >Control YourSelf Not People</Text>
    </Card>
    {/* Card 2 */}
    {/* <Card containerStyle={{ width: 165, borderRadius: 10, backgroundColor:'grey'  }}>
      <Text className="text-red-600">This is the right card.</Text>
    </Card> */}
  </View>
    
  );
}
