import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const AddTask = () => {
  return (
    <View className="h-screen bg-black flex justify-start">
          <View className="h-[91%] bg-white rounded-b-3xl">
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ padding: 10 }}
            ></ScrollView>
          </View>
        </View>
  )
}

export default AddTask