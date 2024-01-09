import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'
import BusinessListItem from './BusinessListItem'

export default function BusinessList() {
    const [business, setbusiness] = useState([])

    useEffect(() => {
        getBusiness();
    }, [])
    const getBusiness = () => {
        GlobalApi.GetBusiness().then(resp => {
           setbusiness(resp?.businessLists)
        })
    }
    return (
        <View style={{ marginTop: 20 }}>
            <Heading props={'Latest Business'} />
            <FlatList
                data={business}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                
                <View style={{marginRight:10,}}>
                    <BusinessListItem business={item}/> 
                </View>
            
    )}
            />
        </View>
    )
}