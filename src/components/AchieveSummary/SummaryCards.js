



const achievements = [
    {
        name: 'Achievement 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sunt voluptatum, ad architecto culpa vero fugiat dignissimos voluptates quisquam ea!'
    },
    {
        name: 'Achievement 2',
        description: 'Another achievement description...'
    },
    {
        name: 'Achievement 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sunt voluptatum, ad architecto culpa vero fugiat dignissimos voluptates quisquam ea!'
    },
    {
        name: 'Achievement 4',
        description: 'Another achievement description...'
    },
];

const SummaryCards = () => {
    return (
        <div class="grid mt-40 md:grid-cols-4 md:gap-4">

            {achievements.map((achievement, index) => (
                <div key={index} className="card bg-yellow-400 rounded-xl shadow-xl">
                    <i className="bx bx-cart text-5xl mx-auto mt-8"></i>
                    <h2 className="heading2 text-center mt-4">{achievement.name}</h2>
                    <p className="para2 text-center p-4">
                        {achievement.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;
