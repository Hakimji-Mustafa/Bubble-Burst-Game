import Matter from 'matter-js';

const Physics2 = (entities, {touches, time, dispatch}) => {
  const Bubble1 = entities.Bubble;
  const Bubble2 = entities.Bubble2;
  const Bubble3 = entities.Bubble3;

  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      const objectX = Bubble3.body.position.x;
      const objectY = Bubble3.body.position.y;

      const objectRight = Bubble3.body.position.x + 40;
      const objectBottom = Bubble3.body.position.y + 40;

      console.log('Bubble  --> ', t.event.locationX <= objectX);
      console.log('Bubble  --> ', t.event.locationX <= objectY);
      console.log('Bubble  --> ', t.event.locationX <= objectRight);
      console.log('Bubble  --> ', t.event.locationY <= objectBottom);

      if (
        t.event.locationX <= objectX &&
        t.event.locationX <= objectRight &&
        t.event.locationY <= objectY - 200 &&
        t.event.locationY <= objectBottom
      ) {
        console.log('Touched the box2 -------');
        entities.Bubble3.color === 'yellow'
          ? (entities.Bubble2.color = 'orange')
          : (entities.Bubble2.color = 'yellow');
        console.log('Entities --> ', entities.Bubble3.color);
      } else {
        console.log('You missed it ');
      }
    });

  let engine = entities.physics.engine;

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics2;
