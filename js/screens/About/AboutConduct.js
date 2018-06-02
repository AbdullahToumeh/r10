import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Text, ScrollView, View, Animated, Easing } from 'react-native';

import LoadingWheel from '../../components/LoadingWheel';
import SingleConduct from './SingleConduct';

import styles from './styles.js';

const conductQuery = gql`
  {
    allConducts {
      description
      title
      id
    }
  }
`;

class AboutConduct extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      currentIndex: -1,
      animatedHeight: new Animated.Value(27.5)
    };
  }

  showAnimatedContent() {
    Animated.timing(this.state.animatedHeight, {
      toValue: 1,
      duration: 300,
      easing: Easing.elastic(0.5)
    });
  }

  showContent(index) {
    if (index === this.state.currentIndex) {
      this.setState({ isVisible: !this.state.isVisible, currentIndex: index });
    } else {
      this.setState({ isVisible: true, currentIndex: index });
    }
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    console.log('minimum height is: ', event.nativeEvent.layout.height - 10);
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  // a lot of this animation code was inspired from:
  // https://moduscreate.com/blog/expanding-and-collapsing-elements-using-animations-in-react-native/

  toggle(index) {
    //Step 1
    let initialValue = this.state.isVisible
      ? this.state.maxHeight + this.state.minHeight
      : this.state.minHeight;
    let finalValue = this.state.isVisible
      ? this.state.minHeight
      : this.state.maxHeight + this.state.minHeight;

    this.setState({
      isVisible: !this.state.isVisible,
      currentIndex: index //Step 2
    });

    this.state.animatedHeight.setValue(initialValue); //Step 3
    Animated.spring(
      //Step 4
      this.state.animatedHeight,
      {
        toValue: finalValue
      }
    ).start(); //Step 5
  }

  render() {
    const height = this.state.animatedHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 'auto']
    });
    console.log(this.state);
    return (
      <View style={styles.conductContent}>
        <Query query={conductQuery}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingWheel />;
            if (error) return <Text>Error </Text>;

            return data.allConducts.map(({ description, title }, index) => (
              <SingleConduct
                description={description}
                title={title}
                index={index}
              />
            ));
          }}
        </Query>
      </View>
    );
  }
}

export default AboutConduct;
