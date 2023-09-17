
export default function AccordionItem({ item,num, isOpen, onOpen }) {
    
    const handleIsOpen = (id) => {
        onOpen(id === isOpen ? null : id)
    }
    return (
        <div className="w-80 bg-gray-100 shadow-sm rounded-sm px-4 py-3 mb-5">
            <div className={`flex justify-between ${isOpen===item.id ? 'border-t-4 border-t-purple-400':''} ` }>
                <span>{num}</span>
                <h1 className="text-lg font-bold ml-2">{item.title}</h1>
                <span onClick={()=>handleIsOpen(item.id)} className="text-xl cursor-pointer">{isOpen === item.id ? '-' : '+'}</span>
            </div>
            {isOpen===item.id && <p className="text-sm text-gray-500 ml-4">{item.content}</p>}

        </div>
    )
}