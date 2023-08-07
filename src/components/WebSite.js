import React , {useState} from "react";
import api from "./api"


const Website = ()=>{
    let [category, setCategory]=useState("");

    return (
        <div>
            <h1>Our  Menu</h1>
            <div>
                
            {
                api && api.map((item, index)=(
                        <div key={index}>
                            <img src={item.img}/>
                            <div>
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </div>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                ))
            }
            </div>
        </div>
    )
}

export default Website;