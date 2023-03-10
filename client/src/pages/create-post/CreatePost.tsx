import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<any>("");
  const [redirect, setRedirect] = useState<any>(false);
  async function createNewPost(ev: any) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch(
      "https://blog-project-red-seven.vercel.app/api/post",
      {
        method: "POST",
        body: data,
        credentials: "include",
      }
    );
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <form onSubmit={createNewPost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <div className="content">
        <ReactQuill
          value={content}
          theme={"snow"}
          onChange={setContent}
          modules={modules}
        />
      </div>
      <button style={{ marginTop: "5px" }}>Create post</button>
    </form>
  );
}

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./createPost.scss";

// import MobileNavbar from "../../components/mobile-navbar/MobileNavbar";
// import Navbar from "../../components/navbar/Navbar";
// import { useTranslation } from "react-i18next";
// import LoadFileIcon from "../../assets/load-file.png";
// import WordIcon from "../../assets/word.png";
// import Check from "../../assets/check.png";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState<any>("");
//   const [redirect, setRedirect] = useState(false);

//   const [files, setFiles] = useState<FileList | any | null>(null);

//   async function createNewPost(ev: any) {
//     ev.preventDefault();
//     const data = new FormData();
//     data.set("title", title);
//     data.set("summary", summary);
//     data.set("content", content);
//     data.set("file", files[0]);
//     console.log("data: ", data);
//     const response = await fetch("http://localhost:4000/api/post", {
//       method: "POST",
//       body: data,
//       credentials: "include",
//     });
//     if (response.ok) {
//       setRedirect(true);
//     }
//   }

//   const navigate = useNavigate();
//   if (redirect) {
//     navigate("/");
//   }

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const [file, setFile] = useState<any>(null);

//   return (
//     <main>
//       {windowWidth < 576 ? <MobileNavbar /> : <Navbar />}

//       <form className="create__form" onSubmit={createNewPost}>
//         <div className="form__group field">
//           <input
//             className="form__field"
//             name="name"
//             id="name"
//             required
//             type="title"
//             placeholder={"Title"}
//             value={title}
//             onChange={(event) => setTitle(event.target.value)}
//           />
//           <label htmlFor="name" className="form__label">
//             Title
//           </label>
//         </div>

//         <div className="form__group field">
//           <input
//             className="form__field"
//             name="name"
//             id="name"
//             required
//             type="summary"
//             placeholder={"Summary"}
//             value={summary}
//             onChange={(ev) => setSummary(ev.target.value)}
//           />
//           <label htmlFor="name" className="form__label">
//             Summary
//           </label>
//         </div>

//         {files ? (
//           <div className="uploaded-file__container">
//             <img
//               src={Check}
//               alt="File successfully uploaded"
//               className="upload-file-success__icon"
//             />
//             <p className="uploaded-image">
//               Se ha cargado su imagen
//               <span style={{ fontWeight: "600", margin: "0 0.35rem" }}>
//                 {files[0].name}
//               </span>{" "}
//               con ??xito.
//             </p>
//           </div>
//         ) : (
//           <div className="load-image__container">
//             <div className="load-image__content">
//               <img
//                 src={LoadFileIcon}
//                 alt="load-file"
//                 className="load-file__image"
//               />
//               <h5 className="load-file__text-primary">
//                 Select an image or drag and drop here
//               </h5>
//               <p className="load-file__text-secondary">
//                 JPG or PNG is available
//               </p>
//               <label className="load-file__buton">
//                 <span>Seleccionar archivo</span>
//                 <input
//                   type="file"
//                   onChange={(ev: any) => setFiles(ev.target.files)}
//                   accept="image/jpeg image/jpg image/png"
//                 />
//               </label>
//             </div>
//           </div>
//         )}

//         <button className="load-word__btn">
//           <img src={WordIcon} alt="Word Icon" className="word__icon" />
//           <label htmlFor="wordFileInput">Importar Word</label>
//           <input type="file" id="wordFileInput" accept=".docx" />
//           {file && <p>Archivo seleccionado: {file.name}</p>}
//         </button>

//         <div className="content">
//           <ReactQuill value={content} onChange={setContent} />
//         </div>

//         <div className="create-post__btn-container">
//           <button className="create-post__button">Create post</button>
//         </div>
//       </form>
//     </main>
//   );
// };

// export default CreatePost;
