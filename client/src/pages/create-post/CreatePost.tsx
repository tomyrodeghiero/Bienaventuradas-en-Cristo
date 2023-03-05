import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuill } from "react-quilljs";
import "./createPost.scss";

import "quill/dist/quill.snow.css";
import MobileNavbar from "../../components/mobile-navbar/MobileNavbar";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import LoadFileIcon from "../../assets/load-file.png";
import WordIcon from "../../assets/word.png";
import Check from "../../assets/check.png";
import JSZip from "jszip";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState<any>("");
  const [redirect, setRedirect] = useState(false);
  const { t } = useTranslation();

  const [files, setFiles] = useState<FileList | any | null>(null);

  const handleFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(ev.target.files);
  };

  const [wordInformation, setWordInformation] = useState<any>(null);

  const { quill, quillRef, Quill } = useQuill({});

  if (Quill && !quill) {
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldContents) => {
        console.log("Text change!");
        console.log(delta);
        console.log("oldContents", oldContents);
        setContent(oldContents);

        let currrentContents = quill.getContents();
        console.log(currrentContents.diff(oldContents));

        if (quillRef.current) {
          const editorContent = quillRef.current.firstChild.innerHTML;
          setContent(editorContent);
          console.log("Editor content:", editorContent);
        }
      });
    }
  }, [quill, Quill, wordInformation]);

  async function createNewPost(ev: any) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("https://blog-v1-digf.onrender.com/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  const navigate = useNavigate();
  if (redirect) {
    navigate("/");
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [file, setFile] = useState<any>(null);

  function convertWordToHtml(wordContent: any) {
    const zip = new JSZip();
    return zip.loadAsync(wordContent).then((zip: any) => {
      const xml = zip.file("word/document.xml").async("string");
      return xml.then((xml: any) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "application/xml");
        const paragraphs = doc.getElementsByTagName("w:p");
        let html = "";
        for (let i = 0; i < paragraphs.length; i++) {
          const paragraph = paragraphs[i];
          const texts = paragraph.getElementsByTagName("w:t");
          for (let j = 0; j < texts.length; j++) {
            const text = texts[j];
            const textContent = text.textContent;
            html += textContent;
          }
          html += "<br>";
        }
        return html;
      });
    });
  }

  function handleWordFileChange(event: any) {
    const wordFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event: any) {
      const wordContent = event.target.result;
      convertWordToHtml(wordContent).then(function (htmlContent) {
        quillRef.current.firstChild.innerHTML = htmlContent;
        setWordInformation(htmlContent);
      });
    };
    reader.readAsArrayBuffer(wordFile);
  }

  return (
    <main>
      {windowWidth < 576 ? <MobileNavbar /> : <Navbar />}

      <form className="create__form" onSubmit={createNewPost}>
        <div className="form__group field">
          <input
            className="form__field"
            name="name"
            id="name"
            required
            type="title"
            placeholder={"Title"}
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <label htmlFor="name" className="form__label">
            Title
          </label>
        </div>

        <div className="form__group field">
          <input
            className="form__field"
            name="name"
            id="name"
            required
            type="summary"
            placeholder={"Summary"}
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
          />
          <label htmlFor="name" className="form__label">
            Summary
          </label>
        </div>

        {files ? (
          <div className="uploaded-file__container">
            <img
              src={Check}
              alt="File successfully uploaded"
              className="upload-file-success__icon"
            />
            <p className="uploaded-image">
              Se ha cargado su imagen
              <span style={{ fontWeight: "600", margin: "0 0.35rem" }}>
                {files[0].name}
              </span>{" "}
              con éxito.
            </p>
          </div>
        ) : (
          <div className="load-image__container">
            <div className="load-image__content">
              <img
                src={LoadFileIcon}
                alt="load-file"
                className="load-file__image"
              />
              <h5 className="load-file__text-primary">
                Select an image or drag and drop here
              </h5>
              <p className="load-file__text-secondary">
                JPG or PNG is available
              </p>
              <label className="load-file__buton">
                <span>Seleccionar archivo</span>
                <input
                  type="file"
                  onChange={(ev: any) => setFiles(ev.target.files)}
                  accept="image/jpeg image/jpg image/png"
                />
              </label>
            </div>
          </div>
        )}

        <button className="load-word__btn">
          <img src={WordIcon} alt="Word Icon" className="word__icon" />
          <label htmlFor="wordFileInput">Importar Word</label>
          <input
            type="file"
            id="wordFileInput"
            accept=".docx"
            onChange={handleWordFileChange}
          />
          {file && <p>Archivo seleccionado: {file.name}</p>}
        </button>

        <div className="content">
          <div ref={quillRef} />
        </div>

        <div className="create-post__btn-container">
          <button className="create-post__button">Create post</button>
        </div>
      </form>
    </main>
  );
};

export default CreatePost;
