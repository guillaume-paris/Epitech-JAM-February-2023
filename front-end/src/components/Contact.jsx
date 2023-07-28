import { React, useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 10000);
        setFormData({
            name: '',
            surname: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="mx-10 my-4">
            <form onSubmit={handleSubmit} className=" p-10">
                <div className="mb-4">
                    <label className="text-white block font-bold mb-2" htmlFor="nom">
                    Nom
                    </label>
                    <input
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="text-white block font-bold mb-2" htmlFor="prenom">
                    Prénom
                    </label>
                    <input
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="text-white block font-bold mb-2" htmlFor="objet">
                    Objet
                    </label>
                    <input
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="text-white block font-bold mb-2" htmlFor="message">
                    Message
                    </label>
                    <textarea
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="flex items-center justify-end">
                    <button
                    className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600"
                    type="submit"
                    >
                    Envoyer
                    </button>
                </div>
            </form>
            {submitted && (
                <div className="p-4 bg-green-200 text-green-800">
                    Le formulaire a bien été envoyé !
                </div>
            )}
        </div>
    );
}

export default Contact;