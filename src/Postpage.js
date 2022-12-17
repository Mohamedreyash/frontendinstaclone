import React from "react";
import {useNavigate} from "react-router-dom"
import "./postpage.css"

function Postpage(){
  const Navigate=useNavigate();
  const handle=async(e)=>{
    alert("Loading");
    e.preventDefault()
    let view=e.target
    console.log(view);
    let dataform=new FormData(view);
    console.log(dataform);
    await fetch('https://backend-insta-62n5.onrender.com/Postdata',{
        method:'Post',
        body:dataform
    }).then(res=>res.json()).then((d)=>{
        alert("Posted")
        console.log(d);
    }).catch((e)=>{
        console.log(e.message);
    }).finally(()=>Navigate('/Postview'))
  }

    return(
        <>
        <div className="Container">
            <form onSubmit={(event)=>handle(event)}>
                <div>
                <input type="file" name="PostImage" id="img" required/>
                </div>
                <div className="break">
                    <input type="text" name="name" id="name" placeholder="Author" required/>
                    <input type="text" name="location" id="location" placeholder="Location" required/>
                </div>
                <div>
                    <input type="text" name="description" id="description" placeholder="Description" required />
                </div>
                <button>Post</button>
            </form>
        </div>
        </>
    )
}

export default Postpage