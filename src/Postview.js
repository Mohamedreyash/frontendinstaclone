import { useEffect, useState } from "react";
import Card from "./Card";
import "./card.css"
import Header from "./Header";
const Postview=()=>{
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("").then((res)=>res.json()).then((data)=>{
             setPosts(data)
        }).catch((err)=>{
           if(err){
               console.log(err);
           }
        })
    },[])
    return(
        <>
        <Header/>
        <div className="post-container">
             {posts.map((post,i)=>{
                 return(
                     <Card post={post} key={i}/>
                 )
             })}
        </div>
        </>
    )
}
export default Postview;