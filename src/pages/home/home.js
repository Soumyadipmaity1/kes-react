import NavbarHome from "../../components/navbar2/navbarhome";
import ImageSlider from "../../components/Imageslider/imageslider";
import Footer from "../../components/footer/footer";
import NoticeBoard from "../../components/noticeboard/notice";
import Statistic from "../../components/statistic/Statistic";
import Prevevent from "../../components/prevevent/prevevent";
import OurJourney from "../../components/journey/Ourjourney";
import GuidingPillars from "../../components/piller/piller";
import StudentTestimonials from "../../components/testamonial/testamonial";


export default function Home(){
    return(
<div className='bg-black'>
<NavbarHome/>
<ImageSlider/>
<Statistic/>
<NoticeBoard/>
<Prevevent/>
<OurJourney/>
<GuidingPillars/>
<StudentTestimonials/>
<Footer/>
</div>
    );
}