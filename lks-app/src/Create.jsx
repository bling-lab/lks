import { useState } from "react";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router";

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

    await axios
      .post("http://localhost:5000/api", form)
      .then((m) => (m.status === 201 ? navigate("/") : console.log("error")));
  };

  return (
    <>
      <div className="container-create">
        <form onSubmit={save} encType="multipart/form-data">
          <label htmlFor="title" onChange={(e) => setTitle(e.target.value)}>
            Title :
            <input className="input-text" type="text" name="title" id="title" />
          </label>
          <br />
          <label
            htmlFor="description"
            onChange={(e) => setDescription(e.target.value)}
          >
            Deskripsi :
            <input
              className="input-text"
              type="text"
              name="description"
              id="description"
            />
          </label>
          <br />
          <label htmlFor="file">
            File :
            <input
              onChange={(e) => setFile(e.target.files[0])}
              className="input-text"
              type="file"
              name="file"
              id="file"
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Create;
