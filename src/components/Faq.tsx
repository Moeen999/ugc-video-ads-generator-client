import { useRef, useState } from "react";
import Title from "./Title";
import { faqData } from "../assets/dummy-data";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

export default function Faq() {
  const refs = useRef<(HTMLDetailsElement | null)[]>([]);
  const [isOpen, setIsOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 2xl:py-32">
      <div className="max-w-3xl mx-auto px-4">
        <Title
          title="FAQ"
          heading="Frequently asked questions"
          description="Everything you need to know about using the platform."
        />

        <div className="space-y-3">
          {faqData.map((faq, i) => (
            <motion.details
              key={i}
              ref={(el) => (refs.current[i] = el)}
              open={isOpen === i}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                delay: 0.1 + i * 0.1,
              }}
              className="group bg-white/6 rounded-xl"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(isOpen === i ? null : i);
                }}
                className="flex items-center justify-between p-4 cursor-pointer"
              >
                <h4 className="font-medium">{faq.question}</h4>
                <ChevronDownIcon className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>

              <p className="p-4 pt-0 text-sm text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}