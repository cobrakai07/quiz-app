import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const initialCards = [
  { id: 1, title: 'Top Card', description: 'Tap to remove this card.' },
  { id: 2, title: 'Middle Card', description: 'Tap to remove this card.' },
  { id: 3, title: 'Bottom Card', description: 'Tap to remove this card.' },
  { id: 4, title: 'Bottom Card last', description: 'Tap to remove this card.' },
];

const screenWidth = Dimensions.get('window').width-40;

const CardStack = () => {
  const [cards, setCards] = useState(initialCards);

  const removeTopCard = () => {
    setCards(prev => prev.slice(1));
  };

  return (
    <View style={styles.container}>
      {cards.slice(0, 3).map((card, index) => {
        const topOffset = index * 12;
        const width = screenWidth * (1 - index * 0.1); // 100%, 90%, 80%
        const zIndex = cards.length - index;

        return (
          <TouchableOpacity
            key={card.id}
            onPress={removeTopCard}
            activeOpacity={0.8}
            style={[
              styles.card,
              {
                top: topOffset,
                width,
                zIndex,
                height:120
              },
            ]}
          >
            <View className='flex flex-row justify-between'>
            <FontAwesome size={28} name="tasks" color={"black"} />
            <Text style={styles.title}>Revise Javascript</Text>
            
            {/* <Text className='bg-cyan-300 p-2 rounded-xl text-white text-semibold'>Completed</Text> */}
            <FontAwesome size={28} name="check-circle" color={"black"} />
            </View>
           
           <View className='flex flex-row justify-between mt-4'>
            <View>
            <Text style={styles.description}>Studied 7 days ago</Text>
            <Text style={styles.description}>Progress 20%</Text>
            </View>
            <View className='flex justify-center items-center'>
            <FontAwesome size={28} name="times-circle" color={"black"} />
            </View>
           </View>
            
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
   
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});

export default CardStack;
