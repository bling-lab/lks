import { useState } from 'react'
import axios from 'axios'
function Create() {


    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState('')

    const upload = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        formData.append("desc", desc)
        formData.append("title", title);
        try {
            await axios.post('http://localhost:5000/api', formData)
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div className="container">
            <form onSubmit={(e) => upload(e)} encType='multipart/form-data'>
                <label htmlFor="judul">
                    Judul Berita <input onChange={(e) => setTitle(e.target.value)} type="text" name="judul" id="judul" />
                </label><br />
                <label htmlFor="deskripsi">
                    Deskripsi Berita <input onChange={(e) => setDesc(e.target.value)} type="text" name="deskripsi" id="deskripsi" />
                </label><br />
                <label htmlFor="file">
                    Files :  <input onChange={(e) => setFile(e.target.files[0])} type="file" name="gambar" id="file" />
                </label><br />

                <button type="submit">Upload</button>
            </form>
        </div>
    )
}


export default Create