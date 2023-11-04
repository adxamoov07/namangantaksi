import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'

function Banner() {
    let API = 'https://6542a22dad8044116ed3b408.mockapi.io/namangan/toshkent/users'
    const [data, setData] = useState([]);

 
    useEffect(() => {
        axios
          .get(API)
          .then((res) => setData(res.data))
          .catch((err) => console.log(err))
      }, []);
    
    return (
        <div className='clients'>
            {
                data?.map((item, index) => (
                    <div key={index} className="client_cards">
                        <h2>{item.qayerdan}</h2>
                        <h2>{item.tuman}</h2>
                        <h2><a href="https://tel:">{item.number}</a></h2>
                        <h2>{item.yolhaqqi}</h2>
                        <button>olish</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Banner