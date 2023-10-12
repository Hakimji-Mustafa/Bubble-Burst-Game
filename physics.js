import Matter from 'matter-js';

const Physics = (entities, {touches, time, dispatch}) => {
  const Bubble1 = entities.Bubble;
  const Bubble2 = entities.Bubble2;
  const Bubble3 = entities.Bubble3;

  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      const objectX = Bubble1.body.position.x;
      const objectY = Bubble1.body.position.y;

      const objectRight = Bubble1.body.position.x + 40;
      const objectBottom = Bubble1.body.position.y + 40;

      const object2X = Bubble2.body.position.x;
      const object2Y = Bubble2.body.position.y;

      const object2Right = Bubble2.body.position.x + 40;
      const object2Bottom = Bubble2.body.position.y + 40;

      console.log('t.event.locationX --> ', t.event.locationX);
      console.log('object2X --> ', object2X);

      console.log('t.event.locationY --> ', t.event.locationY);
      console.log('object2Y --> ', object2Y);
      console.log('object2Right --> ', object2Right);
      console.log('object2Bottom --> ', object2Bottom);

      // console.log('Bubble  --> ', t.event.locationX <= objectX);
      // console.log('Bubble  --> ', t.event.locationX <= objectY);
      // console.log('Bubble  --> ', t.event.locationX <= objectRight);
      // console.log('Bubble  --> ', t.event.locationY <= objectBottom);

      if (
        t.event.locationX <= object2X &&
        t.event.locationX <= object2Right &&
        t.event.locationY <= object2Y - 200 &&
        t.event.locationY <= object2Bottom
      ) {
        console.log('Touched the box------------------------------');
        entities.Bubble3.color === 'yellow'
          ? (entities.Bubble2.color = 'orange')
          : (entities.Bubble2.color = 'yellow');
        console.log('Entities --> ', entities.Bubble);
      } else {
        // console.log('You missed it ');
      }

      // if (
      //   t.event.locationX <= objectX &&
      //   t.event.locationX <= objectRight &&
      //   t.event.locationY <= objectY - 200 &&
      //   t.event.locationY <= objectBottom
      // ) {
      //   Bubble1.color === 'red'
      //     ? (Bubble1.color = 'yellow')
      //     : (Bubble1.color = 'red');
      //   // console.log('Entities --> ', entities.Bubble);
      // } else {
      //   // console.log('You missed it ');
      // }
    });

  let engine = entities.physics.engine;

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
