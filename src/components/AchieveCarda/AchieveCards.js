


const AchievementCard = ({ title, date,data1, data2, details }) => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white p-5">{title}</h1>
      <ul className="flex p-5">
        <li className="font-bold px text-gray-500">{data1}</li>
        <li className="font-bold px-4 text-gray-500">{date}</li>
        <li className="font-bold px text-gray-500">{data2}</li>
      </ul>
      <p className="p-5 text-yellow-200">{details}</p>
    </div>
  );
};

export default AchievementCard;
