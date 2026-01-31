import React from 'react'
import FloatingLines from './FloatingLines';


const UsedFloating = () => {
    return (
        <>
            <div className='metaballs'>
                <FloatingLines
                    enabledWaves={["middle", "bottom", "top"]}
                    // Array - specify line count per wave; Number - same count for all waves
                    lineCount={8}
                    // Array - specify line distance per wave; Number - same distance for all waves
                    lineDistance={100}
                    bendRadius={8}
                    bendStrength={-1}
                    interactive={true}
                    parallax={true}
                />
            </div>
        </>
    )
}

export default UsedFloating
