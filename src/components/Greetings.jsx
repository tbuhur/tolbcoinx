import React from "react";
const Greeting=({name,age}) =>{
    return(
<main>
    <h1 className="text-6xl font-extralight  bg-[#000080] h-[20vh] flex justify-center items-center text-white">TOLBCOIN</h1>
    <br></br> 
    <h1 className="text-2xl font-bold flex justify-items-start text-black">Hi,I'm <b>{name}</b>,the owner of the coin! I'm <b>{age}</b> years old. </h1>
</main>
 ) 
}
export default Greeting;