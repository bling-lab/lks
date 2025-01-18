import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function Homepage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const res = (await axios.get("http://localhost:5000/api")).data;
    console.log(res);
    setData(res);
  };

  return (
    <>
      <div className="container">
        <nav>
          <h1 className="heder">Buat Katalog</h1>
          <a href="/create">Create</a>
        </nav>

        <div className="content">
          {data.map((m) => {
            return (
              <div className="card" key={m.id}>
                <div className="image">
                  <img id="img" src={m.imageUrl} alt="" />
                </div>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Homepage;
