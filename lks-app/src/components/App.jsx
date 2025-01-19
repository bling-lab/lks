import { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../baseUrl";

function Homepage() {
  const [data, setData] = useState([]);
  const [ip, setIp] = useState()

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = (await axios.get(`${baseUrl}/api`)).data;
    setIp(res.serverIP)
    setData(res.data);
  };

  return (
    <>
      <div className="container max-w-4xl rounded-lg bg-[#f1f5f9] mx-[auto] p-2">
        <nav>
          <h1 className="text-center font-bold text-5xl font-inter text-[#94a3b8]">Katalog</h1>
          <a className="m-5 text-2xl drop-shadow-lg bg-blue rounded-lg p-2 text-slate" href="/create">Create</a>
        </nav>
        <h1 className="text-center my-2 text-lg font-Roboto">Server IP: {ip} </h1>
        <div className="mt-3 p-2 flex gap-5 justify-evenly flex-wrap">
          {data.map(e => {
            return (
              <div className="card p-1 bg-slatext-slate shadow-lg w-[200px] max-h-[300px]  rounded-xl overflow-hidden" >
                <div className=" flex justify-center ">
                  <img className="rounded-md  h-[150px] w-[200px] bg-cover" src={e.imageUrl} alt="Gambar" />
                </div>
                <div className="p-1">
                  <h3 className="font-semibold font-inter">{e.title}</h3>
                  <p className="font-Roboto">{e.description}</p></div>
              </div>)
          })}
        </div>
      </div>
    </>
  );
}

export default Homepage;
