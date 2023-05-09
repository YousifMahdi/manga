import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

function Book({ book }) {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      if (mountedRef) {
        setImg(image);
      }
    };

    return () => {
      // When component unmounts
      mountedRef.current = false;
    };
  });

  return (
    <div className="book">
      {img ? (
        <>
          <a href={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} className="book__img" />
            </figure>
          </a>
          <div className="book__title">
            <a href={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </a>
          </div>
          <Rating rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
}

export default Book;