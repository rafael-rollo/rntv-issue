import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from 'react-native';

import {TabView, SceneMap} from 'react-native-tab-view';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const FirstRoute = () => (
  <View style={styles.route}>
    <Text>First route</Text>
  </View>
);

const SecondRoute = () => (
  <View style={styles.route}>
    <Text>Second route</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function App(): JSX.Element {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
  route: {
    flex: 1,
    backgroundColor: Colors.lighter,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
