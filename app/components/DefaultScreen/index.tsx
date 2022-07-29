import { SignOut } from 'phosphor-react-native';
import { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { UserContext } from '../../contexts/userContext';
import { auth } from '../../firebase-config';

import { styles } from './styles';

type DefaultScreenType = {
  children: React.ReactNode,
  dontShowSignout?: boolean
}

export function DefaultScreen({ children, dontShowSignout }: DefaultScreenType) {
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      {
        !dontShowSignout && user &&
        <TouchableOpacity style={styles.signOutButton} onPress={() => auth.signOut()}>
          <SignOut weight='bold'/>
        </TouchableOpacity>
      }
      {children}
    </View>
  );
}