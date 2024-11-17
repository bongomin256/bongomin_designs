const ReviewCard = ({ review }) => {
  return (
    <section className="p-5 bg-gray-100 rounded-lg md:p-8">
      {/* className="relative md:w-[800px] h-auto p-6 bg-white rounded-lg" */}
      <div className="mb-9 ">
        <img
          className="w-[100px] h-[100px]  rounded-full m-auto"
          //   rounded-full absolute top-[-50px] left-1/2 transform -translate-x-1/2

          src={review.image}
          alt={`photo of ${review.name}`}
        />
      </div>
      <div className="text-center mb-9">
        <h5 className="text-lg text-heading-text">{review.name}</h5>
        <p className="text-sm text-gray-400">{review.title}</p>
      </div>
      <div className="mb-5 italic text-center text-gray-500 text-base2 font-bodyFont md:text-base1 md:leading-7">
        <p>{review.review}</p>
      </div>
    </section>
  );
};

export default ReviewCard;
