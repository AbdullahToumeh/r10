import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

class SingleConduct extends Component {
  render() {
    return (
      <Animated.View
        style={[
          styles.singleConduct,
          {
            height: this.state.animatedHeight
          }
        ]}
        key={index}
      >
        <Text
          style={styles.conductTitle}
          onPress={() => this.toggle(index).bind(this)}
          onLayout={this._setMinHeight.bind(this)}
        >
          {this.state.isVisible && this.state.currentIndex === index
            ? '-'
            : '+'}{' '}
          {title}
        </Text>
        <View onLayout={this._setMaxHeight.bind(this)}>
          <Text>{description}</Text>
        </View>
        {/* {this.state.isVisible && this.state.currentIndex === index ? (
                  <Text id={'conduct' + index}>{description}</Text>
                ) : (
                  <View></View>
                )} */}
      </Animated.View>
    );
  }
}

export default SingleConduct;
