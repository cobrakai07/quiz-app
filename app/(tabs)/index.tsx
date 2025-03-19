import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Index = () => {
  return (
    <View className='bg-white h-full p-4'>
      <View className='flex flex-row justify-between'>
        <View className='flex justify-center'>
        <Text className='text-2xl'>Discover,</Text>
        <Text className='text-4xl font-semibold'>Amsterdam!</Text>
        </View>
        <View className='bg-gray-100 p-7 rounded-full flex justify-center items-center'>
        <AntDesign name="search1" size={18} color="black" />
        </View>
      </View>

      <View>
        <Text className='text-lg text-gray-500'>Top activities</Text>
        <View className='flex justify-center items-center'>
        <ImageBackground source={require('../../assets/images/canalnew.jpg')} className='h-[220px] w-full' resizeMode='cover'>
        <View className='flex flex-row justify-between p-4'>
          <View className='bg-red-100 p-1 rounded-xl'>
            <Text className='text-red-400'>Central</Text>
          </View>
          <View className='bg-gray-400/65 p-1 rounded-xl'>
            <Text className='text-white'>4.1</Text>
          </View>
        </View>
        <View className='flex flex-row justify-end p-3'>
        <View className='bg-black p-2 w-20 rounded-xl'>
        <Text className='text-white text-center'>o</Text>
          <Text className='text-white text-center'>Closest</Text>
          <Text className='text-white text-center'>7:35pm</Text>
        </View>
        </View>
       
        <Text className='text-white text-3xl font-semibold p-2 drop-shadow-2xl'>Taking a boat tour through Canals</Text>
        </ImageBackground>
        </View>
        
      </View>
    </View>
  )
}

export default Index


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Swiper from 'react-native-deck-swiper';

// const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];

// const CardSwiper = () => {
//   return (
//     <View style={styles.container}>
//       <Swiper
//         cards={cards}
//         renderCard={(card, index) => {
//           // Apply custom styles to stacked cards
//           const isTopCard = index === 0; // Top card is the first one in the stack
//           const cardStyle = isTopCard
//             ? styles.topCard
//             : { ...styles.stackedCard, right: (cards.length - index - 1) * 10 }; // Offset stacked cards to the right

//           return (
//             <View style={[styles.card, cardStyle]}>
//               <Text style={styles.text}>{card}</Text>
//             </View>
//           );
//         }}
//         onSwiped={() => console.log('Card swiped')}
//         onSwipedLeft={() => console.log('Card swiped left')}
//         onSwipedRight={() => console.log('Card swiped right')}
//         cardIndex={0}
//         backgroundColor={'transparent'}
//         stackSize={cards.length}
//         stackSeparation={10} // Adjust the separation between stacked cards
//         stackScale={5} // Scale down the stacked cards
//         stackAnimationFriction={10}
//         stackAnimationTension={10}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     width: 300,
//     height: 400,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   topCard: {
//     // No additional styles for the top card
//   },
//   stackedCard: {
//     position: 'absolute',
//     opacity: 0.8, // Adjust opacity for stacked cards
//     transform: [{ scale: 0.9 }], // Scale down stacked cards
//   },
//   text: {
//     fontSize: 24,
//   },
// });

// export default CardSwiper;