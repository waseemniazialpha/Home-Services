import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'


export default function Home() {

    return (
        <View>
            <Header />
            <View style={{padding:20}}>
                <Slider />
            </View>
            <View style={{paddingHorizontal:20}}>
                <Categories />
            </View>
            <View style={{paddingHorizontal:20}}>
                <BusinessList />
            </View>
        </View>
    )
}