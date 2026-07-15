export default function Article({ date, title, image, alt, text }) {
  return (
    <article>
      <time>{date}</time>
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p>{text}</p>
      <a href="#">Continues ...</a>
    </article>
  );
}
