import SectionTitle from '../../components/SectionTitle/SectionTitle'
import featuredImg from '../../assets/home/featured.jpg'
import bgImg from '../../assets/home/featured.jpg'

function Featured() {
    return (
        <div className='my-20 bg-[url("/src/assets/home/featured.jpg")] bg-no-repeat bg-cover bg-blend-overlay bg-black/60 h-[600px] flex flex-col justify-center items-center text-white'>

            <SectionTitle heading={"Check It Out"} subHeading={"From Our Menu"}></SectionTitle>

            <div className='flex gap-8 justify-center items-center w-[80%] mx-auto'>
                <img className='w-1/3 justify-center items-center' src={featuredImg} alt="" />
                <div className='w-1/2'>
                    <h1>
                        <h3>March 20, 2023</h3>
                        <h4>WHERE CAN I GET SOME?</h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </h1>
                    <button className='btn bg-transparent border-x-0 border-t-0 text-white mt-2 font-bold border-b-2 py-4'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured