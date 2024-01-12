import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
export default function BusinessListItemCate({ business, booking }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.push('BusinessDetails', { business: business })}
      style={styles.cointnier}>
      <Image source={{ uri: business?.images[0]?.url }}
        style={styles.imagestyle}

      />
      <View style={styles.subcointanier}>
        <Text style={{ fontFamily: "outfit", color: Colors.GARY, fontSize: 15 }}>{business?.contactPerson}</Text>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 19, }} >{business?.name}</Text>
        {!booking?.id ? <Text style={{ fontFamily: "outfit", color: Colors.GARY, fontSize: 16 }}><Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} style={{ marginRight: 10 }} />{business?.address}</Text>
          :
          <Text
            style={[
              { padding: 5, fontSize: 14, alignSelf: 'flex-start', borderRadius: 5 },
              booking?.bookingStatus === "Completed" ? { backgroundColor: '#08a613', color: Colors.WHITE } : booking?.bookingStatus === "InProgress" ? { backgroundColor: '#f5bc00', color: Colors.WHITE  } :
                booking?.bookingStatus === "Canceled" ? { backgroundColor: '#ff1300',color:Colors.WHITE } : { backgroundColor: Colors.PRIMARY_LIGHT, color: Colors.PRIMARY }
            ]}
          >
            {booking.bookingStatus}</Text>
        }
        {booking?.id ?
          <Text style={{ fontFamily: 'outfit', fontSize: 16, color: Colors.GRAY }}>
            <AntDesign name="calendar" size={24} color="gray"
              style={{ marginRight: 10, }} />
            {booking.date} at {booking.time}
          </Text>
          : null}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cointnier: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10


  },
  subcointanier: {
    display: "flex",
    gap: 8


  },
  imagestyle: {
    width: 100,
    height: 100,
    borderRadius: 15,

  }
})