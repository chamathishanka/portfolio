import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3dCard'
import { TypewriterEffectSmooth } from './ui/typewriterEffect';

const words = [

    {
        text: "Blogs",
        className: "text-3xl md:text-6xl",
    },

];

function blogs() {
    return (
        <div className="flex flex-col items-center justify-center space-y-5 mt-20">
            <div className="flex-col">
                <TypewriterEffectSmooth words={words} />
            </div>

            <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 gap-10 mt-0">
                <CardContainer containerClassName="max-w-4xl">
                    <CardBody className="bg-gradient-to-br from-cyan-500 via-transparent to-gray-800 p-10 rounded-lg shadow-lg">
                        <CardItem
                            className="text-center text-4xl font-bold text-white"
                            translateZ={50}
                        >
                            3D Card in Hero Section
                        </CardItem>
                        <CardItem
                            className="mt-4 text-center text-lg text-gray-400"
                            translateZ={30}
                        >
                            This is a 3D card component used within a hero section.
                        </CardItem>
                    </CardBody>
                </CardContainer>

                <CardContainer containerClassName="max-w-4xl">
                    <CardBody className="bg-gradient-to-br from-cyan-500 via-transparent to-gray-800 p-10 rounded-lg shadow-lg">
                        <CardItem
                            className="text-center text-3xl md:text-4xl font-bold text-white"
                            translateZ={50}
                        >
                            3D Card in Hero Section
                        </CardItem>
                        <CardItem
                            className="mt-4 text-center text-lg text-gray-400"
                            translateZ={30}
                        >
                            This is a 3D card component used within a hero section.
                        </CardItem>
                    </CardBody>
                </CardContainer>

            </div>
        </div>

    )
}

export default blogs
