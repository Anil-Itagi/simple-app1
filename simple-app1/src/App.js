import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={i}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="My name is ....."
        num={4}
        key="test 1"
      >
        <h1>Anil  </h1>
      </AccordionItem>
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="What is the capital of India ?"
        num={5}
        key="test 2"
      >
        <h1>Delhi  </h1>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  function open() {
    onOpen(num);
  }
  return (
    <div
      className="item"
      onClick={open}
      style={isOpen ? { borderTop: "solid 5px green" } : {}}
    >
      <p className="number">{num > 10 ? num + 1 : "0" + (num + 1)}</p>
      <p className={`title ${isOpen ? "t" : ""}`} >
        {title}
      </p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
