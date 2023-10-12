import Matter from 'matter-js';
import Bubble from '../Components/Bubble';
import Bubble2 from '../Components/Bubble2';
import Bubble3 from '../Components/Bubble3';
// import Floor from '../Components/Floor';
import {Dimensions} from 'react-native';
// import Obstacle from '../Components/Obstacle';
// import {getPipeSizePosPair} from '../utils/random';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default restart => {
  let engine = Matter.Engine.create({
    enableSleeping: false,
  });

  let world = engine.world;
  world.gravity.y = 0.005;

  return {
    physics: {engine, world},
    Bubble: Bubble(world, 'white', {x: 50, y: 200}, {height: 40, width: 40}),
    Bubble2: Bubble2(world, 'blue', {x: 150, y: 200}, {height: 40, width: 40}),
    Bubble3: Bubble3(
      world,
      'yellow',
      {x: 300, y: 200},
      {height: 40, width: 40},
    ),
  };
};
