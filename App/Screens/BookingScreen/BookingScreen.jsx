import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from '../HomeScreen/BusinessListItem'
import BusinessListItemCate from '../BusinessListByCategory/BusinessListItemCate'

export default function BookingScreen() {
  const [bookings, setbookings] = useState([])
  const [loading, setloading] = useState(false)
  const {user}= useUser();
  useEffect(() => {
    user&&getUserBookings();
  }, [user])
  
  const getUserBookings = ()=>{
    setloading(true)
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
      setbookings(resp.bookings)
      setloading(false)
    })
  }
  return (
    <View style={{padding:20}}>
      <Text style={{fontFamily:'outfit-medium',fontSize:26,}}>My Bookings</Text>

      <View>
        <FlatList
        data={bookings}
        onRefresh={()=>getUserBookings()}
        refreshing={loading}
        renderItem={({item,index})=>(
          <BusinessListItemCate business={item?.businessList} booking={item}/>
        )}
        />
      </View>
    </View>
  )
}