import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How can I sell on Daraz?",
    link: "/how-to-sell",
  },
  {
    question: "What categories can I sell on Daraz?",
    link: "/categories",
  },
  {
    question: "How much commission does Daraz charge?",
    link: "/commission-policy",
  },
  {
    question: "What is the payment policy of Daraz?",
    link: "/payment-policy",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index, link) => {
    setOpenIndex(index === openIndex ? null : index);
    window.location.href = link;
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-[32px] font-bold text-center text-purple-800 mb-10 tracking-wide">
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-10">
          {/* Question Row */}
          <div
            onClick={() => handleClick(index, faq.link)}
            className="flex items-center gap-4 cursor-pointer text-purple-800"
          >
            <FiChevronDown size={26} className="text-gray-800 min-w-[35px]" />
            <span className="text-[25px] tracking-wide">{faq.question}</span>
          </div>

          {/* Full underline under icon + text */}
          <div className="mt-4 h-[1px] bg-gray-600 w-full"></div>
        </div>
      ))}
    </div>
  );
}
