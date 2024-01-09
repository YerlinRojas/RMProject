import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact_Form = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_1lm9yd1", "template_alfmhzo", e.target, "lSd9yKl7POgUOZDVC")
            .then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Mensaje enviado",
                        text: "Pronto nos pondremos en contacto contigo",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    e.target.reset()
                }
            })
    }
    return (

        <div className="grid place-items-center mx-7 h-auto ">
            <p className="w-full md:px-8 px-4  text-center md:text-justify">Ponete en contacto para solicitar presupuesto o consultarnos tus dudas. Un asesor responderá a la brevedad</p>
            <form className="w-full  px-8 py-4" onSubmit={sendEmail}>
                <div className="mb-5">
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre y Apellido</label>
                    <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jose Lopez" required name="nombre" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="pepe@gmail.com" required name="email" />
                </div>
                <div className="mb-5">
                    <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
                    <input type="tel" id="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="261 123 1234" required name="telefono" />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dejanos tu consulta</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribinos aca..." name="consulta"></textarea>
                </div>
                <button type="submit" className="text-white bg-[#C81010] hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-12 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">ENVIAR</button>
            </form>
        </div>

    )
}

export default Contact_Form