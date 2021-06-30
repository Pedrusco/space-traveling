import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({post}: PostProps) {
  return (
    <>
      <Header />
      <img src="/teste.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo de exemplo</h1>
            <ul>
              <li>
                <FiCalendar />
                30 Jun 2021
              </li>
              <li>
                <FiUser />
                Pedro Fernandes
              </li>
              <li>
                <FiClock />
                5 min
              </li>
            </ul>
          </div>
          
          <article>
            <h2>Titulo section</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nibh quis sem varius venenatis. 
              Aenean egestas, libero <strong>vitae porttitor malesuada</strong>, massa sem semper justo, at porttitor massa ipsum a est. 
              Pellentesque sodales pellentesque imperdiet. In in volutpat lorem. Cras pretium lectus ut ipsum consequat, in eleifend odio facilisis. 
              Phasellus rutrum augue nulla, id finibus risus sollicitudin et. Quisque id pharetra enim.
              Maecenas eu ultrices magna. <a href="#">Teste</a> Vivamus sollicitudin dui vitae arcu aliquam commodo. 
              Ut vitae lectus nisi. Aenean dapibus metus urna, nec egestas sem ultricies ornare. In nec lacus nec nisi sodales lobortis sed sed ex. 
              Ut vitae orci iaculis, fringilla lectus elementum, posuere quam. Sed commodo est lectus, ac ultricies urna condimentum vel. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis diam ante, ut aliquam dui finibus quis. 
              Cras dictum lorem suscipit ligula tincidunt mattis. Phasellus nulla metus, aliquet id risus vel, congue dictum justo. 
              Cras blandit, ex at tempus efficitur, justo purus tincidunt tortor, eu hendrerit turpis lacus eu nunc. Nulla vehicula metus eget purus 
              tristique imperdiet vitae quis nibh.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
