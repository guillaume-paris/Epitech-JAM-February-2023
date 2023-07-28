const About = () => {
    return (
        <div className="text-white container mx-auto p-10">
            <h1 className="text-white text-5xl font-bold">Qu'est-ce qu'une Jam ?</h1><br></br>
            <p className="text-white text-xl font-light">
                Une Jam est un événement où les participants doivent créer un jeu vidéo ou autre chose en 48h. Le thème est dévoilé le vendredi soir, et les participants doivent rendre leur projet le dimanche soir. Une grande review est organisée le lundi matin, où les participants présentent leur projet.
            </p><br></br>
            <h1 className="text-white text-5xl font-bold mt-10">Thème de cette Jam</h1><br></br>
            <p className="text-white text-xl font-light">
                Cette Jam est sur le thème des super-héro. Nous avons l'obligation d'introduire dans notre projet :
            </p>
            <ul className="text-white list-disc pl-5 mt-5">
                <li>Un méchant (villain)</li><br></br>
                <li>Une chauve souris (bat)</li>
            </ul><br></br>
            <h1 className="text-white text-5xl font-bold mt-10">Spécificités techniques</h1><br></br>
            <p className="text-white text-xl font-light">
                Ce projet comprend un back-end Node.js utilisant Express et un front-end React utilisant le framework Tailwind css.
            </p>
        </div>
    );
}

export default About;