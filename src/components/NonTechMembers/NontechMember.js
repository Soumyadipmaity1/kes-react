import Soumyadip from './Soumyadip_nontech.png';
import Pritika from './Pritika_nontech.png'
import Harsh from './Harsh_nontech.png'
import Avinab from './avinabh_nontech.png'
import dummy from './dummy-nontech.png'
import fdummy from './dummy_nontech_f.png'
const members2 = [
    {
        name: 'Harsh Vardhan Yadav,',
        id: '2206093',
        imageUrl: Harsh ,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Pritika Dey',
        id: '22052489',
        imageUrl: Pritika,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Abhinav Audukoori',
        id: '2205870',
        imageUrl: Avinab,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Soumyadip Maity',
        id: '22053029',
        imageUrl: Soumyadip,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Akshat Srivastava',
        id: '2105944',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Mohit Kumar Das',
        id: '2104029',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Rahul Sinha',
        id: '21052689',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Md. Arifuz Zaman',
        id: '2104802',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Srijna',
        id: '2004336',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Sarvagya',
        id: '21051166',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Mehuli Saha',
        id: '2005810',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Gurpreet Singh',
        id: '2007016',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Kanti Kishore Choudhury',
        id: '2107011',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Sanskar Swaroop Sahoo',
        id: '2107016',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },    
];
const NonTechMembers = () => (
    <div className='flex flex-wrap justify-center my-10'>
    {members2.map((member, index) => (
        <div className="flex flex-col bg-s member-morph group items-center h-auto text-center w-1/7 m-5" key={index}>
            <div>
                <img className="w-60 rounded-t-xl" src={member.imageUrl} alt={member.name} />
            </div>
            <div className="px-4 pt-4 pb-2 text-white font-semibold">
                <h1 className="font-bold p-1">{member.name}</h1>
                <h2 className='font-semibold text-sm'>{member.id}</h2>
            </div>
            <ul className="relative opacity group-hover:opacity-100 flex  p-1 pb-3 text-center justify-center">
                <a href={member.githubLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-yellow-300"></i></a>
                <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-yellow-300"></i></a>
                <a href={member.instagramLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-yellow-300"></i></a>
            </ul>
        </div>
    ))}
</div>

);

export default NonTechMembers;
