import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import AudioList from './AudioList';

const IsFemale = () => {

    const [isfemale, setIsFemale] = useState(false)
  return (
   
    <ScrollView>
    {isfemale && (
      <>
      <ScrollView >
        <AudioList audioTitle={"Female Winter"} audioTime={"7 MINS"} />
        <AudioList audioTitle={"Female Pacing"} audioTime={"14 MINS"} />
        <AudioList audioTitle={"Female Growth"} audioTime={"3 MINS"} />
        <AudioList audioTitle={"Female Pattern"} audioTime={"9 MINS"} />
      </ScrollView>

      </>
    )}
  </ScrollView>
  )
}

export default IsFemale