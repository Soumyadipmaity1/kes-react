
import G1 from './ProfShyam_Behura.jpg'
import G2 from './ProfMrutunjaya_Panda.jpeg'
import G3 from './ProfShubhasri_Kundu.png' 
import G4 from './Abhisekhkushari_bhaiya.jpg'
import G5 from './Akash_bhaiya.jpg'

const GuidingPillars = () => {
  return (
    <div className="bg-neutral-900">
      <div className="h-auto w-full flex flex-wrap items-center text-center p-2 md:px-96 md:pt-16">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <div className="flex">
            <p className="font-bold md:text-4xl text-3xl text-center p-5 font-mono mb-1" style={{ color: '#e1e5e8' }}>OUR GUIDING</p>
            <p className="font-bold md:text-4xl text-3xl text-center py-5 flex-row font-mono mb-1" style={{ color: '#19ecd7' }}>PILLARS</p>
          </div>
          <div className="md:w-36 w-32 h-2 border-b-4 border-slate-100 rounded-full"></div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly p-16">
        <div className="w-auto p-2 h-72 flex flex-col items-center">
          <img className="p-2 rounded-full w-40 h-40" src={G1} alt=" student testimonial" />
          <p className="text-base font-bold p-1 text-slate-300">Dr. Shyam Sundar Behura</p>
          <p className="text-sm font-bold text-yellow-400">Additional Registrar</p>
        </div>
        <div className="w-auto p-2 h-72 flex flex-col items-center">
          <img className="p-2 rounded-full w-40 h-40" src={G2} alt=" student testimonial" />
          <p className="text-base p-1 font-bold text-slate-300">Mrutunjaya Panda</p>
          <p className="text-sm font-bold text-yellow-400">Faculty Co-ordinator</p>
        </div>
        <div className="w-auto p-2 h-72 flex flex-col items-center">
          <img className="p-2 rounded-full w-40 h-40" src={G3} alt=" student testimonial" />
          <p className="text-base p-1 font-bold text-slate-300">Dr. Shubhasri Kundu</p>
          <p className="text-sm font-bold text-yellow-400">Faculty Co-ordinator</p>
        </div>
        <div className="w-auto p-2 h-72 flex flex-col items-center">
          <img className="p-2 rounded-full w-40 h-40" src={G4} alt=" student testimonial" />
          <p className="text-base p-1 font-bold text-slate-300">Abhishek Kushary</p>
          <p className="text-sm font-bold text-yellow-400">Founder</p>
        </div>
        <div className="w-auto p-2 h-72 flex flex-col items-center">
          <img className="p-2 rounded-full w-40 h-40" src={G5} alt=" student testimonial" />
          <p className="text-base p-1 font-bold text-slate-300">Akash Roy Chowdhury</p>
          <p className="text-sm font-bold text-yellow-400">Founder</p>
        </div>
      </div>
    </div>
  );
};

export default GuidingPillars;
