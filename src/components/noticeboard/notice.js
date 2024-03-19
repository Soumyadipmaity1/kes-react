


export default function NoticeBoard(){
return(
    <div class=" container mx-auto md:py-12 md:px-28 py-8 px-6">
    <div
      class="noticebg bg-cover md:px-12 md:pb-12 md:pt-8 pt-6 px-6 pb-6 rounded-3xl border-8  border-[#7e7d7c] shadow-lg">
      <div class="w-full h-auto flex flex-wrap flex-col pb-8 items-center">

        <p class="text-slate-200 font-bold text-3xl text-center md:p-2 p-2  ">Notice Board</p>
        <div class="w-36 h-1 border-b-2 border-yellow-400  rounded-full"> </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* <!-- notice 1 --> */}

        <div class="bg-fuchsia-100 p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-fuchsia-700">KARISHMA Update</h2>
          <p class="text-sm text-fuchsia-600">Quantum Communication</p>
          <div class="flex justify-between pt-7">
            <p class="text-xs text-gray-500 pt-1 font-semibold">Sep 24, 2023</p>
            <div class="pr-5 pb-2"> <button
                class="bg-fuchsia-500 hover:bg-black font-semibold text-xs text-white  py-1 px-2 rounded">
                <a href="https://www.instagram.com/p/Cy-nAChtCAW/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA=="
                  target="_blank" rel="noopener noreferrer">Check Out</a>
              </button> </div>
          </div>
        </div>
        {/* <!-- Notice 2 --> */}
        <div class="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-blue-800">KARISHMA Update</h2>
          <p class="text-sm text-blue-600">Next-Gen Radar Testing System For Autonomous Vehicles</p>
          <div class="flex justify-between pt-2">
            <p class="text-xs text-gray-500 pt-1 font-semibold">Oct 15, 2023</p>
            <div class="pr-5 pb-2"> <button
                class="bg-blue-500 hover:bg-black font-semibold text-xs text-white  py-1 px-2 rounded">
                <a href="https://www.instagram.com/p/CyaNZDyvjZR/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA=="
                  target="_blank" rel="noopener noreferrer">Check Out</a>
              </button> </div>
          </div>
        </div>
     

        {/* <!-- Notice 3 --> */}
        <div class="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-yellow-700">KARISHMA Update</h2>
          <p class="text-sm text-yellow-600">SAUL Robot- "Germ-zapping Robot"</p>
          <div class="flex justify-between pt-7">
            <p class="text-xs text-gray-500 pt-1 font-semibold">Oct 8, 2023</p>
            <div class="pr-5 pb-2"> <button
                class="bg-yellow-500 hover:bg-black font-semibold text-xs text-white  py-1 px-2 rounded">
                <a href="https://www.instagram.com/p/CyIP6HFv5BX/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw=="
                  target="_blank" rel="noopener noreferrer">Check Out</a>
              </button> </div>
          </div>
        </div>

        {/* <!-- Notice 4 --> */}
        <div class="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-green-700">KARISHMA Update</h2>
          <p class="text-sm text-green-600">Tesnor processing Unit</p>
          <div class="flex justify-between pt-12">
            <p class="text-xs text-gray-500 pt-1 font-semibold">Oct 1, 2023</p>
            <div class="pr-5 pb-2"> <button
                class="bg-green-500 hover:bg-black font-semibold text-xs text-white  py-1 px-2 rounded">
                <a href="https://www.instagram.com/p/Cx2OQ_eP0qb/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA=="
                  target="_blank" rel="noopener noreferrer">Check Out</a>
              </button> </div>


          </div>
        </div>

        {/* <!-- notice 5 --> */}

        <div class="bg-red-100 p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-red-800">Recruitment Drive</h2>
          <p class="text-sm text-red-600">We arr recruiting for both technical and non-technical domain.
            Register Now to be a part of KES family.
          </p>
          <div class="flex justify-between pt-2">
            <p class="text-xs text-gray-500 pt-1 font-semibold">Sep 28, 2023</p>
            <div class="pr-5 pb-"> <button
                class="bg-red-500 hover:bg-black font-semibold text-xs text-white  py-1 px-2 rounded">
                <a href="https://www.instagram.com/p/CxvL6lJvMaf/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA=="
                  target="_blank" rel="noopener noreferrer">Check Out</a>
              </button> </div>
          </div>
        </div>


        {/* <!-- notice 6 --> */}

        <div class="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-gray-700">KARISHMA Update</h2>
          <p class="text-sm text-gray-600">SAMUDRAYAN- Mission</p>
          <div class="flex justify-between pt-12">
            <p class="text-xs text-gray-500 pt-1 font-semibold">Sep 24, 2023</p>
            <div class="pr-5 pb-2"> <button
                class="bg-gray-500 hover:bg-black font-semibold text-xs text-white  py-1 px-2 rounded">
                <a href="https://www.instagram.com/p/CxkNEnRvxO-/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA=="
                  target="_blank" rel="noopener noreferrer">Check Out</a>
              </button> </div>
          </div>
        </div>
      


      </div>
    </div>
  </div>
);

}