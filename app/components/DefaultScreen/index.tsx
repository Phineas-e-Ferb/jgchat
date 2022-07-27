import { View } from 'react-native';

import { styles } from './styles';

type DefaultScreenType = {
    children: React.ReactNode
}

export function DefaultScreen({children}: DefaultScreenType) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}