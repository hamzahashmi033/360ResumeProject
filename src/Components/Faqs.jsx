"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Faqs() {
    const faqs = [
        {
            question: 'What is Webflow and why is it the best website builder?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            question: 'What is your favorite template from BRIX Templates?',
            answer: 'Answer for the favorite template question.',
        },
        {
            question: 'How do you clone a Webflow Template from the Showcase?',
            answer: 'Answer for the clone Webflow template question.',
        },
        {
            question: 'Why is BRIX Templates the best Webflow agency out there?',
            answer: 'Answer for why BRIX Templates is the best.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="max-w-4xl relative p-12 xs:w-xl mx-auto mt-4 bg-white rounded-lg shadow-md">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    {...faq}
                    isOpen={openIndex === index}
                    onToggle={() => toggleFAQ(index)}
                />
            ))}
        </div>
    );
}

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div
            onClick={onToggle}
            className={`relative bg-white p-4 mb-4 cursor-pointer rounded-lg border transition-all duration-500 ease-in-out ${isOpen ? 'gradient-border' : 'border-gray-300'
                }`}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
            <div style={{ flex: 1 }}>
                <div className="font-semibold">{question}</div>
                <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'
                        }`}
                >
                    <div className={`mt-2 text-sm text-gray-600 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}>
                        {answer}
                    </div>
                </div>
            </div>
            <div className="ml-4">
                <div className=''>
                    {
                        isOpen ? <Image src={"/faqIcon2.png"} width={40} height={40} /> : <Image src={"/faqIcon1.png"} width={40} height={40} />
                    }
                </div>
            </div>
        </div>
    );
};
