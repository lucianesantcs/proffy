import React from 'react';
import './style.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4'
          alt='User'
        />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex, ea sunt nostrum
        molestiae aperiam quo voluptatum repudiandae voluptate rem commodi nam numquam at enim
        obcaecati perferendis non quae ad?
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 20, 00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
