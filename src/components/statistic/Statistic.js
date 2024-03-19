import Members from './membericon.svg'
import Events from './eventicon.svg'
import Projects from './projecticon.svg'

export default function Statistic(){


    return(
        <div class="flex justify-evenly p-10 pt-20 ">

        <div  class="bg-statistics hover:bg-white cursor-pointer  flex flex-row p-4 rounded-xl  px-6  bg-[61ff79] shadow-md" >
          <img class="w-20" src={Members} alt="" />
          <div class="flex flex-col   p-2 ">
            <p class="text-xl font-bold p-1">Members</p>
            <p class="text-xl font-bold text-green-800 p-1">400+</p>
          </div>
        </div>
    
        <div class="flex bg-statistics  hover:bg-white cursor-pointer   flex-row p-4 rounded-xl px-6 bg-[a3f2af] shadow-md" >
          <img class="w-20" src={Events} alt="" />
          <div class="flex flex-col p-2 ">
            <p class="text-xl font-bold p-1">Events</p>
            <p class="text-xl font-bold text-green-800 p-1">50+</p>
          </div>
        </div>
    
        <div class=" bg-statistics  hover:bg-white cursor-pointer flex flex-row p-4 rounded-xl px-6 bg-[a3f2af] shadow-md" >
          <img class="w-20" src={Projects} alt="" />
          <div class="flex flex-col  p-2 ">
            <p class="text-xl font-bold p-1">Projects</p>
            <p class="text-xl font-bold text-green-800 p-1">100+</p>
          </div>
        </div>
      </div>
    
    );
}