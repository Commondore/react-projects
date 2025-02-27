import { useEffect, useLayoutEffect, useRef, useState } from "react";

import styles from "./style.module.css";

export const Comments = () => {
  const [height, setHeight] = useState(0);
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      console.log("scroll");
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (refDiv.current) {
      setHeight(refDiv.current?.offsetHeight);
    }
  }, []);

  return (
    <div ref={refDiv} className={styles.container}>
      <h1>Комментарии Высота div: {height}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus impedit excepturi
        voluptates, totam sint vitae cumque qui animi alias sequi doloremque beatae praesentium
        commodi veritatis soluta nemo unde molestias nulla.
      </p>
      <p>
        Aliquid pariatur in vitae aperiam iusto porro voluptates, qui similique dolorum
        reprehenderit numquam, nemo excepturi molestias, quam quas! At, eius debitis. Officia ipsum
        dicta labore inventore, asperiores voluptatum doloribus adipisci!
      </p>
      <p>
        Fugit consequatur, quia in eos id fuga. Accusamus enim culpa eius earum. Provident ipsam
        ipsa iure obcaecati optio sunt repellendus, est at reiciendis, molestias ea cumque velit.
        Veniam, culpa delectus.
      </p>
      <p>
        Ab labore ullam nobis nostrum, saepe architecto necessitatibus deleniti repudiandae tempora
        vero delectus quaerat maxime. Magnam iusto deserunt mollitia ex nulla aliquid numquam sequi
        impedit, magni ratione aperiam ipsum laudantium?
      </p>
      <p>
        Praesentium magni eligendi, amet, doloremque beatae facere maxime reiciendis quia facilis,
        iure tempora esse molestiae ea? Soluta, alias. Distinctio iure officiis maiores, dicta iusto
        voluptatem repudiandae aliquid aut a nam.
      </p>
      <p>
        Mollitia at velit ullam recusandae veritatis, quas, perferendis, sed accusantium possimus
        temporibus labore? Corrupti excepturi, sed rerum qui harum impedit quos ducimus? Rerum
        impedit iste consequuntur itaque suscipit dignissimos laudantium?
      </p>
      <p>
        Aspernatur, sapiente sed? Repellat, ab, veritatis assumenda natus molestias sed voluptatibus
        quas voluptas blanditiis animi harum officiis quia ad! Ipsa sunt voluptatibus architecto
        deserunt suscipit cumque provident molestias a tenetur.
      </p>
      <p>
        Quas impedit facere cupiditate eum, quae quasi molestias blanditiis dolore, placeat, optio
        repellat saepe repudiandae laborum inventore ut ad laudantium. Maxime, exercitationem qui
        sapiente iste magnam fuga blanditiis consectetur ea.
      </p>
      <p>
        Mollitia eaque sunt ipsum voluptates aliquid facilis consequatur molestiae repudiandae iure,
        eos dolorum, autem quaerat sit obcaecati veniam minima ex quasi nesciunt debitis saepe!
        Debitis ut eligendi rerum sed minus.
      </p>
      <p>
        Pariatur provident facere voluptates incidunt harum, nemo iusto ipsum commodi obcaecati!
        Doloremque vero, omnis corrupti repellendus cumque libero, sunt ea temporibus accusamus
        recusandae, quibusdam dolore laboriosam? Placeat recusandae quis blanditiis!
      </p>
    </div>
  );
};
