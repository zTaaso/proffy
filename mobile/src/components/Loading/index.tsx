import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';

const Loading: React.FC<ActivityIndicatorProps> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator color="#fff" {...props} />
    </View>
  );
};

export default Loading;
