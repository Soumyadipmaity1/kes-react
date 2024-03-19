import gpic1 from './gpic1.jpg'
import gpic2 from './gpic2.png'
import gpic3 from './gpic3.png'
import gpic4 from './gpic4_a.png'
import gpic5 from './gpic5_a.png'
import gpic6 from './gpic6_3.png'
import gpic7 from './gpic7.png'
import gpic8 from './gpic8.png'
import gpic9 from './gpic9.png'
import gpic10 from './gpic10.png'
import gpic11 from './gpic11.jpg'
import gpic12 from './gpic12.png'



export default  function gallery(){


    return(
        <div class="-slate-100 px-20 py-10 pb-20">
        <p class="font-extrabold text-3xl flex justify-center text-slate-300 text-center pb-10">Photo Gallery</p>
    
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-20 pb-16 pt-16 bg-[#000000] rounded-t-3xl ">
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic1} alt="farewell pic" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg"  src={gpic4} alt="" />
            </div>
            <div>
              <img class="h-auto pb-3 rounded-b-lg max-w-full rounded-lg" src={gpic5} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic2} alt=""  />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg"  src={gpic6} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-t-lg" src={gpic8} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic3} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic7} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-t-lg" src={gpic9} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic10} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic11} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-t-lg " src={gpic12} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}