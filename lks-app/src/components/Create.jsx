import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import baseUrl from "../../baseUrl";
import "../index.css"

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const save = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    form.append("file", file);

    console.log(title, description)
    await axios
      .post(b`${baseUrl}/api`, form)
      .then((m) => (m.status === 201 ? navigate("/") : console.log("error")));
  };

  return (
    <>
      <div className="container mx-auto max-w-2xl p-10 flex justify-center font-Inter">
        <form className=" h-[300px] w-4/5 bg-[#e6edf7] shadow-lg p-5 rounded-md" onSubmit={save} encType="multipart/form-data">
          <label htmlFor="title" >
            Title
          </label>
          <br />
          <input className="rounded-md w-11/12 h-10 px-2 mb-2" type="text" name="title" id="title"
            onChange={(e) => setTitle(e.target.value)} />

          <label htmlFor="description">
            Deskripsi
          </label>
          <br />
          <input
            className="rounded-md w-11/12 h-10 p-2 mb-2"
            type="text"
            name="description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}

          />
          <br />
          <label htmlFor="file">
            File
          </label>
          <br className="mb-1" />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            className=" w-full h-10 mb-2"
            type="file"
            name="file"
            id="file"

          /> <br />

          <button className="p-3 bg-blue text-slate font-semibold rounded-lg" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Create;
