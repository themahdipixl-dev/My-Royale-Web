// * components/MaterialCommunityIcons.js — local web-safe Material Community Icons
import createIconSet from '@expo/vector-icons/createIconSet';
import glyphMap from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';

const MaterialCommunityIcons = createIconSet(
  glyphMap,
  'material-community',
  require('../assets/fonts/MaterialCommunityIcons.ttf')
);

export default MaterialCommunityIcons;
