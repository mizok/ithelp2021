export const TRAIL = {
  bgColor: 'black',
  space: {
    gravity: {
      x: 0,
      y: 0
    },
    wind: {
      x: 0,
      y: 0
    }
  },
  projector: {
    motionTrail: (x) => null,//  not valid if mouseControl is enabled.
    enableMouseAndGuestureControl: true,
    dispersionRange: 0,
    directionAngle: 0,
    width: 1,
    height: 1,
  },
  particles: {
    density: 10,
    type: "circle",
    width: {
      base: 50,
      floatingThreshold: 0
    },
    lifespan: {
      base: 150,
      floatingThreshold: 0
    },
    color: {
      from: "rgba(255, 0, 255,1)",
      to: "rgba(255, 255, 0,1)"
    },
    opacity: 1,
    speed: {
      base: 100,
      floatingThreshold: {
        x: 0,
        y: 0
      }
    },
  },
}