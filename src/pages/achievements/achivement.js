import Achievestart from "../../components/achievementstart/achievestart";
import NavbarAchievement from "../../components/navbar2/navbarAchievement";
import AchieveSummary from "../../components/AchieveSummary/AchiveSummary";
import AchievementCard from "../../components/AchieveCarda/AchieveCards";
import AchieveFlow from "../../components/achieveflow/achieveflow";
import AchieveImage from "../../components/AchieveCarda/AchieveImage";
import Footer from "../../components/footer/footer";
export default function Achievement(){

    return(
    <div className="bg-[#000308] ">
    {/* <div className="achievementbg1 "> */}
<NavbarAchievement/>
<Achievestart/>
{/* // </div> */}
<AchieveFlow/>

<div className="grid grid-cols-2 px-16 py-8">
            <AchieveImage
                image1Src="https://pixlr.com/images/index/ai-image-generator-two.webp"
                image2Src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
            />
            <AchievementCard
                title="Achievement 1"
                data1="avbs"
                data2="xyz"
                date="2023"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque deleniti minus placeat inventore, iusto consequatur expedita mollitia atque iste! ipsum dolor sit, amet consecalll lorem tetur adipisicing elit. Repellendus harum vel sit voluptates similique rem, inventore error quam quasi voluptas. ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam corrupti corporis vel quos similique minus dolor. Quod, cupiditate explicabo."
            />
           
</div>
<div className="grid grid-cols-2 px-16 py-8">

            <AchievementCard
                title="Achievement 2"
                data1="hello"
                data2="abca"
                date="2022"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque deleniti minus placeat inventore, iusto consequatur expedita mollitia atque iste! ipsum dolor sit, amet consecalll lorem tetur adipisicing elit. Repellendus harum vel sit voluptates similique rem, inventore error quam quasi voluptas. ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam corrupti corporis vel quos similique minus dolor. Quod, cupiditate explicabo."
            />
                        <AchieveImage
                image1Src="https://pixlr.com/images/index/ai-image-generator-two.webp"
                image2Src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
            />
           
</div>
<AchieveSummary/>

<Footer/>
</div>

    );
}