import { Link } from "react-router-dom";

const StudentTeacher = () => {
    return (
        <div className="bg-[#f1f4f8] h-screen   " >
            <div className=" h-screen flex flex-col items-center justify-center " >
                <h1 className="text-[#101828] text-3xl text-center font-bold " >Sign up today to teach or find the perfect <br /> tutor for your needs</h1>
                <div className="flex justify-center items-center gap-7 my-7 " >
                    <div className=" bg-white p-6 rounded shadow " >
                        <Link to={"/student"}>
                            <img className="" src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1740017037/2848729_414341-PDTRQR-7_1_pzng4y.png" alt="" />
                        </Link>
                        <h1 className="text-center text-[#101828] text-2xl font-semibold mt-1 " >Student / Parents</h1>
                    </div>
                    <div className=" bg-white p-6 rounded shadow " >
                        <Link to={""}>
                            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1740017037/273954847_3c432667-b90a-4969-a96a-a504cb12d20a_1_z81kaa.png" alt="" />
                        </Link>
                        <h1 className="text-center text-[#101828] text-2xl font-semibold mt-1 " >Teacher</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentTeacher;