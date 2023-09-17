import { useState } from 'react'
import AccordionItem from "./accordionItem"
const accordionItems = [
    {
        id: 1,
        title: "What is React",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        id: 2,
        title: "How does React work",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        id: 3,
        title: "How do you use React",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    }
]

export default function Accordions() {
    const [currOpen, setCurrOpen] = useState(null)
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            {
                accordionItems.map((item, index) => (
                    <AccordionItem isOpen={currOpen} onOpen={setCurrOpen} item={item} num={`${index < 10 ? `0${index+1}` : index+1}`} key={index} />
                ))
            }
        </div>
    )
}