const HomeWorkInfo = () => {
    return(
        <div>
        <h1>16MD: Movies list - React Query, React-router, React-i18n</h1>
        <ul>
            <li>
                Applikācja ir trīs sadaļas:
                <ul>
                    <li>Par projektu - info par mājasdarbu</li>
                    <li>Filmu saraksts - saraksts ar filmām</li>
                    <li>Par autoru - info par autoru</li>
                </ul>
            </li>
            <li>Filmas ir jāvar izdzēst, un kad tas tiek izdarīt visas filmas tiek paprasītas no DB pa jaunu (invalidate query).</li>
            <li>Katrai filmai ir arī savs atvēruma skats, kurā atšķirībā no list skata rādās arī komentāri un Komentārus ir jāvar arī pievienot.</li>
            <li>Ja filma netika atrasta, ir jāsūta uz 404 lapu.</li>
            <li>Filmas kartiņa ir atsevišķs komponents.</li>
            <li>Visiem react-query hookiem ir jābūt savos izolētos failos, kā mēs to darijām nodarbībā.</li>
            <li>
                jāizmanto
                <ul>
                    <li>React router</li>
                    <li>React Query</li>
                    <li>React</li>
                    <li>CSS modules.</li>
                </ul>
            </li>
            <li>
                bonuss
                <ul>
                    <li>Applikācijā ir iespējams nomainīt valodu, kur teksti, kas nenāk no DB tulkojās.</li>
                    <li>Pievienojot komentārus datus validē ar zod</li>
                </ul>
            </li>
            <li>
                jāizmanto
                <ul>
                    <li>zod</li>
                    <li>react-i18next</li>
                </ul>
            </li>
        </ul>
        </div>
    )
    }
    
    export default HomeWorkInfo