import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/59981600?s=460&u=732020734a1e6c2357651c48d464af271418f6c0&v=4"
          alt="Thiago Afonso"
        />

        <div>
          <strong>Thiago Afonso</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        aaaaaaa aaaaaaa bbbbbbb ccccc ddddd
        <br />
        <br />
        sfsdddddddddddddsdffsfcdkjf kewjnskdnknvjdsk fdjksvnvksjvnkv
        kewjnskdnknvjdskdsjs jkbsajcbsjcsnklc kvldsnklvndslvlnk
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$40,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
