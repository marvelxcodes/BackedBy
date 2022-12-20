import { Dispatch, SetStateAction, useState } from "react";
import "../styles/section3.css";

const Section3 = () => {
  const [selection, setSelection] = useState("How much money can I earn?");
  const FAQs = [
    {
      question: "How much money can I earn?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum corporis vero laudantium exercitationem ratione dolores aut illo nesciunt recusandae accusamus vel adipisci obcaecati quam repudiandae, dolore doloribus, iste velit.",
    },
    {
      question: "How can I become a banker?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit illum corporis vero laudantium exercitationem ratione dolores aut illo nesciunt recusandae accusamus vel adipisci obcaecati quam repudiandae, dolore doloribus, iste velit.",
    },
  ];
  return (
    <div className="s3">
      <div className="text-sec">
        <h3>Learn more</h3>
        <h1>Frequently Asked Questions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          optio repudiandae iusto, excepturi nulla reprehenderit voluptas
          officiis illo reiciendis.
        </p>
        <div className="btn-sec">
          <button className="btn-primary">SIGN UP</button>
          <button className="btn-secondary">LEARN MORE</button>
        </div>
      </div>
      <div className="accordion-container">
        {FAQs.map((faq) => (
          <Accordion
            {...faq}
            selection={selection}
            setSelection={setSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default Section3;

type AccordionType = {
  question: string;
  answer: string;
  selection: string;
  setSelection: Dispatch<SetStateAction<string>>;
};

export const Accordion = ({
  question,
  answer,
  selection,
  setSelection,
}: AccordionType) => {
  return (
    <div className={`accordion ${selection != question && "acc-closed"}`}>
      <div
        onClick={() => {
          setSelection(question != selection ? question : "");
        }}
        className="ques-container"
      >
        <h3>{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`icon ${selection == question && "icon-open"}`}
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={`ans-container ${selection == question && "ans-open"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
