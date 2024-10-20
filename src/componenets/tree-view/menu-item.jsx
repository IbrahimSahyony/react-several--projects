import MenuList from "./menu-list";

export default function MenuItem({item}){

    return(
        <div>
        <li><p>{item.label}</p></li>
        {
             
             <MenuList list={item.children}/>
            
        }
        </div>
    )
}