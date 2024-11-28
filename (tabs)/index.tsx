import React from "react";
import {View, ScrollView} from 'react-native';
// import SampleComponent from './samplecomponent';
// import StylingReactNativeComponent from './stylingreactnativecomponent';
import MateriFlexBox from "./materiflexbox";

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;