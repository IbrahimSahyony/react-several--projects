import MenuItem from "./menu-item";

export default function MenuList ({list = []}){

    return(
        <ul className="menu-item-container">
        {
            
            list && list.length?
             list.map(itemlist=> <MenuItem item={itemlist}/>)
            :null
        }
        </ul>
        
    )
}