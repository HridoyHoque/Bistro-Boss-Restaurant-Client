import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../../../Hooks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseMenu()
    const salad = menu.filter(item => item.category === "salad" )
    const dessert = menu.filter(item => item.category === "dessert" )
    const pizza = menu.filter(item => item.category === "pizza" )
    const drinks = menu.filter(item => item.category === "drinks" )
    const soup = menu.filter(item => item.category === "soup" )
    return (
        <div>
            <Cover img={coverImg} title="Order Now"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
              <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;