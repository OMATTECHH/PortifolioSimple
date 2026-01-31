import React from 'react'
import RotatingText from '../Common/RotatingText'
const UsedText = () => {

    return (
        <>
            <div className='flex gap-2 ml-16 mt-3'>
                <h1 className='text-4xl font-extrabold text-white '>Mateus</h1>
                <RotatingText
                    texts={["Python", "FastApi", "IA", "Tailwind", "Figma", "UI", 'UX', "Docker", "Git", "GitHub", "React","NodeJs", "JavaScript", "HTML", "CSS"   ]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-purple-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold text-2xl"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </div>
        </>
    )
}

export default UsedText
