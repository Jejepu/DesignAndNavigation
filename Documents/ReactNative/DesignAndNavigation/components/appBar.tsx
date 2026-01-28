import React from 'react';
import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function CustomNavigationBar(props: NativeStackHeaderProps) {
  const { navigation, route, options, back } = props;
    
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
        {route.name !== 'Second' ? (
          <Appbar.Action 
            icon="arrow-right"
            onPress={() => navigation.navigate('Second')}/>
        ) : null}
    </Appbar.Header>
  )
}