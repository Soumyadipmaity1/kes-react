import ProjectStartbg from './PROJECTBG4.png'


const ProjectStart = () => {
  return (
    <div className="flex justify-between pl-48 items-center  bg-black pb-10 h-[680px] border-violet-900">
      <div className="pl-4 w-full">
        <h1 className="text-6xl p-4 font-serif font-extrabold text-neonpro ">PROJECTS</h1>
        <p className="text-xs text-white p-1 pl-32">Home » Projects</p>
      </div>
      <div className="  w-full ">
        <img className="w-[70%]  right-0 justify-end bg-  items-end" src={ProjectStartbg} alt="pic project" />
      </div>
    </div>
  );
}

export default ProjectStart;
