
export const ILLUSION = {
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
    enableMouseAndGuestureControl: false,
    dispersionRange: 30,
    directionAngle: 0,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  particles: {
    density: 5,
    type: "circle",
    width: {
      base: 20,
      floatingThreshold: 8
    },
    lifespan: {
      base: 100,
      floatingThreshold: 30
    },
    color: {
      from: "rgba(130, 155, 155,1)",
      to: "rgba(255, 0, 0,0.75)"
    },
    opacity: 0.75,
    speed: {
      base: 50,
      floatingThreshold: {
        x: 0,
        y: 0
      }
    },
  },
}