import type {NextPage} from 'next'
import Layout from "../business/container/general/layout/layout";
import BannerHeader from "../business/content/banner_header/banner_header";
import Speakers from "../business/content/speakers/speakers";
import Agenda from "../business/content/agenda/agenda";
import Gamers from "../business/content/gamers/gamers";
import ArtistasInvitados from "../business/content/artista_invitados/artistas_invitados";
import Registrate from "../business/content/registrate/registrate";
import Invitacion from "../business/content/invitacion/invitacion";
import Organizado from "../business/content/organizado/organizado";
import BotonFlotante from "../business/content/boton_flotante/boton_flotante";

const Home: NextPage = () => {

    return (
        <>
            <Layout>
                <BannerHeader/>
                <Speakers/>
                <Agenda/>
                <Gamers/>
                <ArtistasInvitados/>
                <Registrate/>
                <Invitacion/>
                <Organizado/>
                <BotonFlotante/>

            </Layout>

        </>
    )
}

export default Home
