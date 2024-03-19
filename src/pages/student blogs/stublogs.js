import Blogs from "../../components/blogs/Blogs";
import NavbarStuBlogs from "../../components/navbar2/navbarStublogs";
import Footer from "../../components/footer/footer";
import Suravi from "./blog3.jpg"
import rewant from "./blog4.jpg"
import bgstudentblogs from './stublog7.png'
export default function StuBlogs(){
    return(
       
        <div className='bg-black'>
         <NavbarStuBlogs/>
         <img src={bgstudentblogs} alt="" />
         <div className="p-10 text-slate-200 text-4xl font-bold ">
            <h1>Blog Posts</h1>
            <div class="w-28 border-b-4 mt-5 mb-5  border-yellow-400  "> </div>

         </div>
   <Blogs
        title="Insider's POV"
        publicationDate="October 30, 2023"
        author="Suravi Kundu (2004208)"
        content="KIIT Electrical Society is a place where you can learn and socialize while growing academically. The society also organizes classes, seminars, and other activities to gain hands-on experience for its members as well as other registered students. I feel privileged to be a member of such a great society."
        imagePath={Suravi}
      />
       <Blogs
        title="Journey of Lessons"
        publicationDate="October 30, 2023"
        author="Rewant Raj (2004125)"
        content=" Embarking on my journey with the KES Society has been nothing short of transformative. This dynamic community has served as a crucible for honing essential skills like leadership, management, and a plethora of technical abilities. The society's friendly atmosphere has been instrumental in fostering a sense of camaraderie, providing a support system that extends beyond the conventional boundaries, 
        Whenever I found myself grappling with challenges, the seasoned seniors and super seniors became my mentors, offering not only guidance but also motivation to navigate through obstacles. The symbiotic relationship within the society has not only facilitated skill acquisition but has also created lasting friendships. The encouragement and mentorship received have been invaluable, making the learning process not just enriching but also enjoyable.
        Beyond the realm of skill development, the KES Society knows how to celebrate achievements and milestones. The numerous parties and gatherings have not only been a source of relaxation but have also reinforced the sense of community and belonging. In essence, my experience with the KES Society has been a holistic journey, where personal and professional growth thrive in a nurturing and festive environment.
"       
 imagePath={rewant}
      />
            <Footer/>
        </div>
    );
}
