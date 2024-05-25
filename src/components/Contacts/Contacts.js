import React from 'react';
import ContactForm from './ContactForm';
import './Contacts.css';

function Contacts() {
    return (
        <div className="contacts-container">
            <h1>Contact <span className="highlight">Me</span></h1>
            <p>If you have any questions, please fill out the form below and we will get back to you as soon as possible.</p>
            <ContactForm />
        </div>
    );
}

export default Contacts;




// function Contacts() {
//     return (
//       <div>
//         <h1>Контакты</h1>
//         <p>Если у вас есть вопросы, пожалуйста, заполните форму ниже, и мы свяжемся с вами как можно скорее.</p>
//         <form action="https://formspree.io/f/xayrkork" method="POST">
//           <label htmlFor="name">Имя:</label>
//           <input type="text" id="name" name="name" required />
          
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="_replyto" required />
          
//           <label htmlFor="message">Сообщение:</label>
//           <textarea id="message" name="message" required></textarea>
          
//           <button type="submit">Отправить</button>
//         </form>
//       </div>
//     );
//   }
  
//   export default Contacts;
  