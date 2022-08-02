import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import AudioList from './AudioList';


const IsMale = () => {
    const [ismale, setIsMale] = useState(false);
  return (
    
      <ScrollView >
        {ismale && (
          <>
            <AudioList audioTitle={"Male Winter"} audioTime={"7 MINS"} />
            <AudioList audioTitle={"Male Pacing"} audioTime={"14 MINS"} />
            <AudioList audioTitle={"Male Growth"} audioTime={"3 MINS"} />
            <AudioList audioTitle={"Male Pattern"} audioTime={"9 MINS"} />
          </>
        )}
      </ScrollView>
    
  )
}

export default IsMale