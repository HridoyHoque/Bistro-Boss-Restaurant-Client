import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'

import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/Menucategory';
import UseMenu from '../../../Hooks/UseMenu';
const Menu = () => {
    const [menu] = UseMenu()
    const salad = menu.filter(item => item.category === "salad" )
    const dessert = menu.filter(item => item.category === "dessert" )
    const pizza = menu.filter(item => item.category === "pizza" )
    const offered = menu.filter(item => item.category === "offered" )
    const soup = menu.filter(item => item.category === "soup" )

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="OUR MENU" text="Would you like to try a dish?"></Cover>
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="pizza" img={dessertImg} ></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={menuImage} ></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg} ></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;