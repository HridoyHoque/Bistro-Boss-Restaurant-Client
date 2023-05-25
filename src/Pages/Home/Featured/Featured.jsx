import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            ></SectionTitle>
           <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
           <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>May 20, 2023</p>
                <p className="uppercase">Where i can get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur repudiandae sunt fugit harum minus! Unde, officiis. Assumenda nobis vel molestiae error sit repellat perspiciatis ullam nihil quaerat placeat incidunt repudiandae, amet cupiditate asperiores nesciunt deleniti atque? Consequuntur asperiores tenetur laborum animi possimus at repellat.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;