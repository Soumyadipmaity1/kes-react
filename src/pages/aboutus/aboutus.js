import BigLogo from "../../components/biglogo/biglogo";
import Gallery from "../../components/gallery/gallery";
import NavbarAboutus from '../../components/navbar2/navbarAboutus';

import HelplineButton from "../../components/HelplineButton/Helpline";
import TeamSwitcher from "../../components/TeamSwitcher/TeamSwitcher";
import TeamCatagory from "../../components/catagories/Catagories";
import Footer from "../../components/footer/footer";
import CreditSection from "../../components/Credits/credit";
 export default function AboutUs(){

    return(
        <div class='bg-[#031233]   '>

<NavbarAboutus/>   
<BigLogo/>
 
<Gallery/>
<div className="">
<div className=" text-center font-bold">
    <h1 className=" text-4xl mb-5 underline-offset-2 text-white">Meet Our Team</h1>
    <div class="w-36 border-b-4 mx-auto mb-5 border-yellow-400  "> </div>

</div>
<TeamCatagory/>
<TeamSwitcher/>
</div>

<div className="bg-[#2b228d]  py-16 ">
<div className=" text-center font-bold">
    <h1 className=" text-4xl mb-5 underline-offset-2 text-white">Credits</h1>
    <div class="w-28 border-b-4 mx-auto mb-5 border-yellow-400  "> </div>

</div>
<CreditSection/>
</div>
<Footer/>
 <HelplineButton/>

</div>

    );

} 