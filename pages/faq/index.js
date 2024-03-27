import React, { useState } from 'react';
import Heading from '../../components/Typography/heading';
import faq from '../../config/faqs.json'
import Link from 'next/link';

const FaqPage = ({ mainPage }) => {
    const [isSpeakerOpen, setIsSpeakerOpen] = useState(mainPage ? false : true);
    const [isStudentOpen, setIsStudentOpen] = useState(mainPage ? false : true);
    const [isSponsorOpen, setIsSponsorOpen] = useState(mainPage ? false : true);
    const toggleSpeakerAccordion = () => {
        setIsSpeakerOpen(!isSpeakerOpen);
    };

    const toggleStudentAccordion = () => {
        setIsStudentOpen(!isStudentOpen);
    };
    const toggleSponsorAccordion = () => {
        setIsSponsorOpen(!isSponsorOpen);
    }

    return (
        <div className="ml-20 lg:ml-0 text-white py-8 px-4 sm:px-6 lg:px-8">
            <Heading>
                {mainPage ? <Link className="text-3xl font-semibold mb-6" href='/faq' aria-label='Frequently Ask Questions'>
                    FAQs
                </Link> :
                    'FAQs'}
            </Heading>

            {/* Speaker Section */}
            <div className="accordion mb-6" data-cy='speakerSection'>
                <div className="border-b border-gray-700">
                    <button
                        onClick={toggleSpeakerAccordion}
                        className="flex justify-between items-center w-full py-4 focus:outline-none"
                        aria-label='Speaker Section'
                    >
                        <h3 className="text-lg font-medium text-gradient">Speakers</h3>
                        <svg
                            className={`w-6 h-6 transform transition-transform ${isSpeakerOpen ? 'rotate-180' : ''
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path fill="currentColor" d="M7 10l5 5 5-5z" />
                        </svg>
                    </button>
                </div>
                <div className={`px-2 ${isSpeakerOpen ? 'block' : 'hidden'}`} data-cy='speakerqna'>
                    {faq.speakerQuestions.map((faq, index) => (
                        <div key={index} className="py-2">
                            <h4 className="text-lg font-medium text-[#f76cf7]"><span className='font-semibold text-gradient'>Q {index + 1}.</span> {faq.question}</h4>
                            <p className="mt-2"><span className='font-semibold '>Ans. </span>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Student Section */}
            <div className="accordion mb-6" data-cy='studentSection'>
                <div className="border-b border-gray-700">
                    <button
                        onClick={toggleStudentAccordion}
                        className="flex justify-between items-center w-full py-4 focus:outline-none"
                        aria-label='Student Section'
                    >
                        <h3 className="text-lg font-medium text-gradient">Students</h3>
                        <svg
                            className={`w-6 h-6 transform transition-transform ${isStudentOpen ? 'rotate-180' : ''
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path fill="currentColor" d="M7 10l5 5 5-5z" />
                        </svg>
                    </button>
                </div>
                <div className={`px-2 ${isStudentOpen ? 'block' : 'hidden'}`} data-cy='studentqna'>
                    {faq.studentQuestions.map((faq, index) => (
                        <div key={index} className="py-2">
                            <h4 className="text-lg font-medium text-[#f76cf7]"><span className='font-semibold text-gradient'>Q {index + 1}.</span> {faq.question}</h4>
                            <p className="mt-2"><span className='font-semibold'>Ans. </span>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Sponsor Section */}
            <div className="accordion" data-cy='sponsorSection'>
                <div className="border-b border-gray-700">
                    <button
                        onClick={toggleSponsorAccordion}
                        className="flex justify-between items-center w-full py-4 focus:outline-none"
                        aria-label='Sponsor Section'
                    >
                        <h3 className="text-lg font-medium text-gradient">Sponsors</h3>
                        <svg
                            className={`w-6 h-6 transform transition-transform ${isSponsorOpen ? 'rotate-180' : ''
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path fill="currentColor" d="M7 10l5 5 5-5z" />
                        </svg>
                    </button>
                </div>
                <div className={`px-2 ${isSponsorOpen ? 'block' : 'hidden'}`} data-cy='sponsorqna'>
                    {faq.sponsorQuestions.map((faq, index) => (
                        <div key={index} className="py-2">
                            <h4 className="text-lg font-medium text-[#f76cf7]"><span className='font-semibold text-gradient'>Q {index + 1}.</span> {faq.question}</h4>
                            <p className="mt-2"><span className='font-semibold'>Ans. </span>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqPage;