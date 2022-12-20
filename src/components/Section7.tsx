import "../styles/section7.css";

const Section7 = () => {
  return (
    <div className="s7">
      <div className="disc">
        <h3>Ask us almost anything</h3>
        <h1>Drop us a line</h1>
      </div>
      <div className="form">
        <div className="card">
          <div className="head">
            <h3>FILL IN THE FORM BELOW</h3>
          </div>
          <div>
            <div>
                <input type="text" placeholder="Name" tabIndex={1} />
                <input type="email" placeholder="Email" tabIndex={2} />
            </div>
            <textarea placeholder="Message"></textarea>
            <button className="btn-pimary">SEND MESSAGE</button>
          </div>
          <div className="foot">
            <p>
              *Your personal information will not be shared, and your inbox will
              not be spammed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
