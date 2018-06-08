import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class SingleConduct extends Component {
  constructor() {
    super();
    this.title = React.createRef();
    this.description = React.createRef();
    this.state = {
      isVisible: false,
      animatedHeight: new Animated.Value(),
      minHeight: 0,
      maxHeight: 0
    };
  }

  // component did mount needs a setTimeout so the function runs async to when the component actually mounts, if function is put inside height always renders as 0 because it doesnt actually exist yet
  componentDidMount() {
    setTimeout(this.measureComponents.bind(this));
  }

  measureComponents() {
    this.title.current.measure((ox, oy, width, height) => {
      if (height > this.state.minHeight) {
        this.state.animatedHeight.setValue(height + 10);
        this.setState({ minHeight: height + 10 });
      }
    });

    this.description.current.measure((ox, oy, width, height) => {
      if (height > this.state.minHeight) {
        this.setState({ maxHeight: height });
      }
    });
  }

  // a lot of this animation code was inspired from:
  // https://moduscreate.com/blog/expanding-and-collapsing-elements-using-animations-in-react-native/

  toggle() {
    // Step 1 - set inital and final height values based on if component is currently visible
    const finalValue = this.state.isVisible
      ? this.state.minHeight
      : this.state.maxHeight + this.state.minHeight;

    this.setState({
      isVisible: !this.state.isVisible // Step 2 - switch components visibility
    });

    Animated.spring(
      // Step 3 - use the spring animation on animtedHeight in state, and move it to the final height value (either closed or open)
      this.state.animatedHeight,
      {
        toValue: finalValue
      }
    ).start(); // Step 4 - start the animation!
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.singleConduct,
          {
            height: this.state.animatedHeight
          }
        ]}
        key={this.props.index}
      >
        <Text
          style={styles.conductTitle}
          onPress={this.toggle.bind(this)}
          ref={this.title}
        >
          {this.state.isVisible
            ? '-'
            : '+'}{' '}
          {this.props.title}
        </Text>
        <View>
          <Text style={styles.description} ref={this.description}>
            {this.props.description}
          </Text>
        </View>
      </Animated.View>
    );
  }
}

SingleConduct.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default SingleConduct;
