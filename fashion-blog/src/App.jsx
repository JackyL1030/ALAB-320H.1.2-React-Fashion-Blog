import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

import pic1 from "./assets/lab-pic-1.jpg";
import pic2 from "./assets/lab-pic-2.jpg";

const articles = [
  {
    date: "11/12/20",
    title: "On the Street in Brooklyn",
    image: pic1,
    alt: "Woman wearing red outfit in front of blue wall",
    text: `C ray ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam
          aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid,
          laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias.
          Temporibus perspiciatis at impedit voluptas aut voluptates facere
          totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti
          optio atque ut. Repellendus molestiae doloribus recusandae, itaque
          voluptatibus placeat repellat deserunt amet eaque dignissimos, iste
          sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia
          quisquam sed nulla eveniet doloribus neque optio odio qui! Id
          architecto impedit consequatur rem quaerat voluptatibus pariatur quas,
          quod quisquam quo ab molestiae.`,
  },
  {
    date: "11/11/20",
    title: "Vintage in Vogue",
    image: pic2,
    alt: "Fashionably dressed people posing at an event",
    text: `S elfies sunt, dolor sit amet consectetur adipisicing elit. Repellat
          quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam
          aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid,
          laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias.
          Temporibus perspiciatis at impedit voluptas aut voluptates facere
          totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti
          optio atque ut. Repellendus molestiae doloribus recusandae, itaque
          voluptatibus placeat repellat deserunt amet eaque dignissimos, iste
          sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia
          quisquam sed nulla eveniet doloribus neque optio odio qui! Id
          architecto impedit consequatur r`,
  },
];

export default function App() {
  return (
    <div>
      <Header />

      <main>
        {articles.map((article) => (
          <Article
            key={article.id}
            date={article.date}
            title={article.title}
            image={article.image}
            alt={article.alt}
            text={article.text}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
