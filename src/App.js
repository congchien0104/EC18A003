import React, { useState } from "react";
import "./App.scss";
import ImageUploading from "react-images-uploading";
import SlideShow from "./Components/SlideShow/SlideShow";
import ShowTitleList from "./Components/ShowTitleList/ShowTitleList";

function App() {
  const [images, setImages] = React.useState([]);
  const [title, setTitle] = useState();
  const [titleList, setTitleList] = useState([]);

  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    //console.log(imageList, addUpdateIndex);
    setImages(imageList);

    // data title
    const tieude = title;
    const newTitlelist = [...titleList];
    //newTitlelist.append("phung");
    console.log(tieude);
    newTitlelist.push(tieude);

    setTitleList(newTitlelist);
    console.log(titleList.length);
    setTitle("");
    //console.log(titleList);
  };

  return (
    <div className="app">
      <div class="row">
        <div class="column">
          <h1>Upload Image</h1>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
              titleList,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="200" />
                    <div className="image-item__btn-wrapper">
                      {/* <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button> */}
                      {/* <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>

        <div class="column">
          <h1>List Name Image</h1>
          <ShowTitleList titleList={titleList} />
        </div>

        <div class="column">
          <SlideShow images={images} />
        </div>
      </div>
    </div>
  );
}

export default App;
