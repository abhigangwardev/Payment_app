import { useNavigate } from "react-router-dom";



export function Appbar(){
    const navigate= useNavigate();
    return <div className="flex justify-between shadow h-14">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
            <div className="flex flex-col justify-center mr-2 my-2">
                <button onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/signin")
                }}>
                    Log Out
                </button>
            </div>
        </div>
    </div>
}