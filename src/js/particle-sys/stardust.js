export const STARDUST = {
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
    dispersionRange: 80,
    directionAngle: 0,
    width: 100,
    height: window.innerHeight
  },
  particles: {
    density: 50,
    type: "circle",
    width: {
      base: 2,
      floatingThreshold: 2
    },
    lifespan: {
      base: 80,
      floatingThreshold: 10
    },
    color: {
      from: "rgba(255,255,255,1)",
      to: "rgba(255,255,255,0.8)"
    },
    opacity: 1,
    speed: {
      base: 100,
      floatingThreshold: {
        x: 1,
        y: 1
      }
    },
  },
}
