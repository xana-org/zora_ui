import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Particles
        params={{
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 2000,
                    }
                },
                shape: {
                    type: 'square'
                },
                opacity: {
                  value: 0.2,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                color: {
                    value: ["#5984ff", "#00ff00"]
                },
                size: {
                    value: 60,
                    random: true
                },
                move: {
                    direction: "right",
                    out_mode: "out"
                },
                line_linked: {
                    enable: false
                }
            },
            interactivity: {
                modes: {
                    remove: {
                        particles_nb: 10
                    }
                }
            }
        }}
    />
  </div>
);
