import { useState } from "react"
function Tasbih (){
    const[count,startValue] = useState(0)
    return <div>
        <div className="relative w-[220px] px-[35px] pt-[30px]  rounded-[20px] h-[150px] bg-green-500 ">
            <h1 className="mt-[-30px] font-semibold text-[20px] text-center"> Badi Istiqfaarta</h1>
            <div className="absolute w-[150px] h-[100px] border-[4px] border-solid border-black rounded-[10px] bg-white">
                <h1  className="text-center font-bold text-[50px] ml-[-3px] mt-[6px]"> {count} </h1>
            </div>
        </div>
        <div className=" relative rounded-b-full ml-[10px] mt-[-20px] w-[200px] h-[200px] bg-green-500">
            <div className="flex justify-between">
                <button 
                onClick={()=> startValue(count-1)}
                disabled = {count===0}
                 className="w-[50px] text-white text-center font-semibold absolute h-[50px] mt-[30px] ml-[20px] rounded-full  hover:bg-black bg-blue-600"> Dec </button>
                <button 
                onClick={()=> startValue(0)}
                className="w-[50px]  absolute h-[50px] ml-[135px] mt-[30px] rounded-full hover:bg-black bg-red-600 text-white text-center font-semibold "> Reset </button>
            </div>
            <button 
            onClick={() => startValue(count+1)} 
            disabled = {count >= 10000}
            className="w-[100px] text-[25px] text-center text-white  font-semibold pt-[0px] h-[100px] bg-orange-500 hover:text-white hover:bg-black absolute bottom-6 ml-[50px] rounded-full"> Count </button>
        </div>
    </div>
}
export default Tasbih