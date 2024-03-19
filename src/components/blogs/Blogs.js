

const Blogs = ({ title, publicationDate, author, content, imagePath }) => {
  return (
    <div className="flex px-10 py-2">
      <article className="p-12 bg-white rounded-lg shadow-lg">
        <h1 id="blog" className="text-4xl font-semibold mb-6">{title}</h1>
        <p className="text-gray-600">Published on <time dateTime="2023-10-30">{publicationDate}</time> by <a href="#" className="text-blue-600">{author}</a></p>
        <div className="flex flex-row justify-between mt-0">
          <div className="prose prose-lg mt-10 text-xl font-thin">
            {content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex justify-center  w-88  h-auto border-2 border-black items-center">
            <img src={imagePath} alt="" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blogs;
