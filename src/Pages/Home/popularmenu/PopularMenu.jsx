import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import UseMenu from "../../../Hooks/UseMenu";


const PopularMenu = () => {
    const [menu] = UseMenu()
    const popularMenu = menu.filter(item => item.category === "popular" )
    
    return (
        <div className="mb-10">
           <SectionTitle
           subHeading="Popular Items"
           heading="FROM OUR MENU"
           ></SectionTitle> 
           <div className="grid md:grid-cols-2 gap-4">
            {
                popularMenu.map(item => <MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)
            }
           </div>
        </div>
    );
};

export default PopularMenu;