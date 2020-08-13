import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://instagram.fvix3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/110197166_4571036196271546_386375203077332616_n.jpg?_nc_ht=instagram.fvix3-1.fna.fbcdn.net&_nc_ohc=Usv6Te4XPJwAX9-aaH-&oh=d345ab0b46880f5b561b64219cfc3fe7&oe=5F5D12A7" alt="Érick Mazzocco" />
                <div>
                    <strong>Érick Mazzocco</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada;
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;