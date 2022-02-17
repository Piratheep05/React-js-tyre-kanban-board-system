import React ,{usestate} from 'react'
import './Draggable1.css';

function Draggable1() {
    const [boards , setBoards] = usestate([
        {id:1, title:"vvv",items:[{id:1 ,title:"fffff"},{id:2 ,title:"fffff"},{id:3 ,title:"fffff"}]},
        {id:2, title:"vvv",items:[{id:1 ,title:"fffff"},{id:2 ,title:"fffff"},{id:3 ,title:"fffff"}]},
        {id:3, title:"vvv",items:[{id:1 ,title:"fffff"},{id:2 ,title:"fffff"},{id:3 ,title:"fffff"}]}
    ])
    return (
        <div className='app'>
            {boards.map(boards =>(
                <div className='board'>
                    <div className='board__title'>
                        {boards.title}
                    </div>
                    {boards.items.map(item =>(
                      <div className='item'>{item.title} </div>
                    ))}
                
            </div>
             ) )}
        </div>
    )
}

export default Draggable1
