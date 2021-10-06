export const FIRE = {
  bgColor: 'black',
  space: {
    gravity: {
      x: 0,
      y: 20
    },
    wind: {
      x: 0,
      y: 0
    }
  },
  projector: {
    motionTrail: (x) => null,//  not valid if mouseControl is enabled.
    enableMouseAndGuestureControl: true,
    dispersionRange: 60,
    directionAngle: 0,
    width: 10,
    height: 10,
  },
  particles: {
    density: 50,
    type: "circle",
    width: {
      base: 20,
      floatingThreshold: 15
    },
    lifespan: {
      base: 80,
      floatingThreshold: 10
    },
    color: {
      from: "rgba(245, 192, 59,1)",
      to: "rgba(255,0,0,0.8)"
    },
    opacity: 1,
    speed: {
      base: 100,
      floatingThreshold: {
        x: 30,
        y: 0
      }
    },
  },
}