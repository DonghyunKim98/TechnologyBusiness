import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import WebView from 'react-native-webview';

import { RootStackParamList } from '../root.navigator';

type WebViewScreenProps = {};

export type WebViewScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'WebViewScreen'
>;

export type WebViewScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'WebViewScreen'
>;

export const WebViewScreen = ({}: WebViewScreenProps) => {
  const {
    params: { url },
  } = useRoute<WebViewScreenNavigationRouteProps>();

  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
};
