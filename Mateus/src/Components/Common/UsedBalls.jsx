import React from 'react'
import MetaBalls from './MetaBalls';

const UsedBalls = () => {
    return (
        <>
            <MetaBalls
                color="#ffffff"
                cursorBallColor="#ffffff"
                cursorBallSize={2}
                ballCount={15}
                animationSize={30}
                enableMouseInteraction
                enableTransparency={true}
                hoverSmoothness={0.15}
                clumpFactor={1}
                speed={0.3}
            />
        </>
    )
}

export default UsedBalls
