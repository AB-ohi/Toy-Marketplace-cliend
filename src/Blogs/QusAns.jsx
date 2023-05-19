const QusAns = ({ blog }) => {
  const { question, answer, img } = blog;
  return (
    <div>
      <div className="card w-96 glass m-auto">
        <figure>
          <img
            src={img}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {question}
          </h2>
          <p>{answer}</p>
          
        </div>
      </div>
    </div>
  );
};

export default QusAns;
