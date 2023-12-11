import {Particles} from 'react-tsparticles'
import React, {useCallback} from 'react'
import { loadSlim } from "tsparticles-slim";

export default function TsBg(){
    //Init
    const tsparticlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, [])
    
    const particlesLoaded = useCallback(async () => {

    }, [])

    return (
        <Particles id="tsBg" className='absolute right-0 bottom-0 top-0 left-0' init={tsparticlesInit} loaded={particlesLoaded} options={{
            fullScreen:{
                enable: false,
            },
            background: {
                color: {
                    value: '',
                }
            },
            fps_limit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode:'repulse'
                    },
                    resize: true,
                },
                modes:{
                    push:{
                        quantity: 100
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    }
                }
            },
            particles: {
                color:{
                    value: '#ffffff'
                },
                links: {
                    color: "#ffffff",
                    distance: 120,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: false,
        }} />
    )
}