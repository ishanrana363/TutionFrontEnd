import React from 'react';

const PaymentPage = () => {
    return (
        <div className='my-4' >
            <div className='flex gap-6 my-8 ' >
                <div className='bg-[#F1F8FF] p-6 shadow rounded-xl w-[50%] ' >
                    <h1 className=' text-[#64A8E8] text-xl font-medium ' >Platform Charge</h1>
                    <div className='my-4' >
                        <p className='text-justify' >After finalizing a job to a tutor we ask for (55%-Home Tutoring; 55%-Online Tutoring; 35%-Package Tutoring; 55%-Group Tutoring) advance of his/her first month's payment only once for each tuition job.</p>
                    </div>
                    <div>
                        <button className=' border border-[#64A8E8] px-3 rounded-xl text-[#64A8E8]  py-2 ' >Click Here</button>
                    </div>
                </div>
                <div className='bg-[#F1F8FF] p-6 shadow rounded-xl w-[50%]  ' >
                    <h1 className=' text-[#64A8E8] text-xl font-medium ' >Verification Charge</h1>
                    <div className='my-4' >
                        <p className='text-justify' >You need to pay a one-time BDT 500 verification charge for the profile verification process.</p>
                    </div>
                    <div className='mt-16'  >
                        <button className=' border border-[#64A8E8] px-3 rounded-xl text-[#64A8E8]  py-2 ' >Click Here</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;