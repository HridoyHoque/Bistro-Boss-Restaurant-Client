import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item => item.category === "popular" )
                 setMenu(popularMenu)
        })
    },[])
    return (
        <div className="mb-10">
           <SectionTitle
           subHeading="Popular Items"
           heading="FROM OUR MENU"
           ></SectionTitle> 
           <div className="grid md:grid-cols-2 gap-4">
            {
                menu.map(item => <MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)
            }
           </div>
        </div>
    );
};

export default PopularMenu;