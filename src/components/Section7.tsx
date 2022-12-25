import "../styles/section7.css";

const Section7 = () => {
  return (
    <div className="s7">
      <div className="disc">
        <h3>Ask us almost anything</h3>
        <h1>Drop us a line</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati repellendus sequi quos velit quisquam labore neque eaque omnis voluptates voluptate, voluptatem facilis libero illo? Itaque iure consequatur quod repudiandae.</p>
      </div>
      <div className="form">
        <div className="card">
          <div className="head">
            <h3>FILL IN THE FORM BELOW</h3>
          </div>
          <div className="body">
            <div className="inputs">
              <input className="name input" type="text" placeholder="Name" tabIndex={1} />
              <input className="email input" type="email" placeholder="Email" tabIndex={2} />
            </div>
            <textarea className="message input" placeholder="Message" tabIndex={3}></textarea>
            <button className="btn-primary">SEND MESSAGE</button>
          </div>
          <div className="foot">
            <p>
              *Your personal information will not be shared, and your inbox will
              not be spammed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
