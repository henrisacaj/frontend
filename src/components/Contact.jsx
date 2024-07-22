import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_mg8siuk', 'template_u83rys7', form.current, {
          publicKey: 'sNdf4XnCqcZ836Bl_',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            Swal.fire({
                title: "Vielen Dank für Ihre Nachricht!",
                text: "Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden!",
                icon: "success",
                background: "#000000",
                color: "#ffffff",
                confirmButtonColor: "#f97316"
              });
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset();
    };
  
    return (
        <section className="bg-neutral-900 dark:bg-neutral-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">BEGINNEN SIE DEN DIALOG!</h2>
                <form id="contactForm" ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Name</label>
                        <input type="text" name="user_name" id="name" className="block p-3 w-full text-sm text-gray-300 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required/>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">E-Mail</label>
                        <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@address.com" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Nachricht</label>
                        <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-300 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nachricht"></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md">Senden</button>
                </form>
            </div>
        </section>


      /* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */
    );
  };

export default Contact