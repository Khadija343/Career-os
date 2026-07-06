function Avatar({ image, alt }) {
  return (
    <img
      src={image}
      alt={alt}
      width="50"
      height="50"
    />
  );
}

export default Avatar;