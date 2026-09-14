import { useState } from "react";

const FAQS = [
  {
    question: "Is Dev Stack free to use?",
    answer:
      "Yes, Dev Stack is completely free to browse technologies and build your own stack list.",
  },
  {
    question: "Can I add unlimited technologies to my stack?",
    answer:
      "You can add as many technologies as you like — there's no limit on how many you can pick.",
  },
  {
    question: "Will my selected stack be saved?",
    answer:
      "Currently your stack is saved only for your active session. Sign up soon to save your stack permanently.",
  },
  {
    question: "Can I remove a technology after adding it?",
    answer:
      "Yes, click the ✕ icon next to any technology in Your Stack, or use Remove All to clear everything at once.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">
        Frequently Asked <span className="text-gradient-brand">Questions</span>
      </h2>

      <div className="flex flex-col gap-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={
                isOpen
                  ? "border-2 border-pink-300 bg-pink-50/40 rounded-xl overflow-hidden shadow-sm transition-all"
                  : "border border-gray-100 rounded-xl overflow-hidden hover:border-pink-300 hover:shadow-md transition-all"
              }
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between text-left px-5 py-4 font-semibold text-gray-900 hover:text-pink-500 transition-colors"
              >
                {faq.question}
                <span
                  className={
                    isOpen
                      ? "text-white bg-gradient-brand w-7 h-7 flex items-center justify-center rounded-full text-lg shrink-0 ml-3 rotate-180 transition-transform"
                      : "text-pink-500 border border-pink-200 w-7 h-7 flex items-center justify-center rounded-full text-lg shrink-0 ml-3 transition-transform"
                  }
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-sm text-gray-500 animate-[fadeIn_0.2s_ease]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
