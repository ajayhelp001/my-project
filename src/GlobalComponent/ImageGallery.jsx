import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import { Link } from "react-router-dom";

const ImageGallery = ({galleryImg, galleryImgUrl,  galleryImgAlt, galleryBtnClass}) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => lightbox.destroy();
  }, []);

  return (
      <Link to={galleryImgUrl} className={`glightbox ${galleryBtnClass}`}>
        <img src={galleryImg} alt={galleryImgAlt} />
      </Link>
  );
};

export default ImageGallery;
