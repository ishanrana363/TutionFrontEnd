import React, { useEffect } from 'react';

const TutorNoticePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="my-6 px-4">
            <h1 className="text-xl text-[#64A8E8] font-semibold">
                Read Our all Important Notice
            </h1>
            <div className="mt-6">
                <h1 className="text-[#2F3A4D] font-bold">
                    1. How does TutionBridge.com work?
                </h1>
                <p className="text-[#2F3A4D] text-justify mt-2">
                    TutionBridge.com is a platform designed to connect guardians seeking tutors with qualified educators. Guardians can post job listings specifying their requirements, such as subjects, location, and preferred timing. Tutors can browse these listings, apply for jobs, and get matched based on their expertise. The platform offers a streamlined process:
                </p>
                <ul className="mt-1">
                    <li className="list-disc ml-7">
                        <span className="text-[#2F3A4D] font-semibold">Step 1:</span> Guardians create a job post detailing their needs.
                    </li>
                    <li className="list-disc ml-7 mt-2">
                        <span className="text-[#2F3A4D] font-semibold">Step 2:</span> Tutors apply or are auto-matched to jobs that fit their skills and location.
                    </li>
                    <li className="list-disc ml-7 mt-2">
                        <span className="text-[#2F3A4D] font-semibold">Step 3:</span> Both parties can communicate securely through the platform to finalize details. Our intuitive dashboard makes it easy to manage appointments, track progress, and handle payments—all in one place.
                    </li>
                </ul>
            </div>


            <div className="mt-7">
                <h1 className="text-[#2F3A4D] font-bold">
                    2. How do I know if a tutor is qualified?
                </h1>
                <p className="text-[#2F3A4D] text-justify mt-2">
                    We take tutor quality seriously at TutionBridge.com. Every tutor on our platform undergoes a thorough verification process, including
                </p>
                <ul className="mt-1">
                    <li className="list-disc ml-7">
                        <span className="text-[#2F3A4D] font-semibold">Identity Verification:</span>Tutors must upload their educational credentials, certifications, or relevant experience details.
                    </li>
                    <li className="list-disc ml-7 mt-2">
                        <span className="text-[#2F3A4D] font-semibold">User Reviews and Ratings:</span> Tutors are rated and reviewed by previous guardians, giving you insight into their teaching effectiveness and professionalism. This comprehensive process ensures that only trustworthy and capable tutors are available on the platform.
                    </li>
                    
                </ul>
            </div>


        </div>
    );
};

export default TutorNoticePage;
