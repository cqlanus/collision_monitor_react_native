import React, {Component} from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

import Photo from '../Photo';
import TaxonButton from '../TaxonButton';
import ObservedByBar from '../ObservedByBar';
import ButtonsBar from '../ButtonsBar';
import MapView from 'react-native-maps';

class ObservationPage extends Component {
  constructor() {
    super();
  }

  render() {
    const species = this.props.navigation.state.params;
    console.log(this.props);
    return (
      <ScrollView style={styles.scroll}>
        <ObservedByBar username={'cqlanus'} observedOn={'Sep 16, 2017'} />
        <Photo src={{uri: 'https://www.fillmurray.com/800/300'}}/>
        <TaxonButton taxon={species}/>
        <ButtonsBar />
        <View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 41.8781,
              longitude: -87.6298,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

ObservationPage.propTypes = {
  navigation: PropTypes.object,
};

export default ObservationPage;