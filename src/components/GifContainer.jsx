import React from "react";

function GifContainer({ gifs, handleChange, handleSubmit }) {
  console.log(gifs);
  return (
    <div>
      <form>
        <input name="word" type="text" onChange={handleChange} />
        <button onClick={handleSubmit} type="button">
          Search
        </button>
      </form>
      {gifs.length > 0 && (
        <div>
          {gifs.map((gif, i) => (
            <div>
              <img key={i} src={gif.images.original.url} alt="gif" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GifContainer;
