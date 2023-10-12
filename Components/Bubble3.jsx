import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Matter from 'matter-js';

const Bubble3 = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: color,
        borderStyle: 'solid',
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world, color, pos, size) => {
  const initialBubble3 = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {label: 'Bubble3'},
  );
  Matter.World.add(world, initialBubble3);
  return {
    body: initialBubble3,
    color,
    pos,
    renderer: <Bubble3 />,
  };
};

const styles = StyleSheet.create({
  birdBody: {
    borderWidth: 1,
  },
});
