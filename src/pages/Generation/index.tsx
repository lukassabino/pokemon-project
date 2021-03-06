import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';
 
import { Header, GenerationInfo, Pokemons } from './styles';
import logoImg from '../../assets/pokebola_red.png';

interface GenerationParams {
    generation: string;
}

interface PokemonSpecies {
    name:string;
}

interface AbilitiesInfo {
    name: string;
}

interface MovesInfo {
    name: string;
}

const Generation: React.FC = () => {
    const [pokemons, setPokemons] = useState<PokemonSpecies[]>([]);
    const [abilities, setAbilities] = useState<AbilitiesInfo[]>([]);
    const [moves, setMoves] = useState<MovesInfo[]>([]);
    const { params } = useRouteMatch<GenerationParams>();

    useEffect(() => {
        api.get(`/generation/${params.generation}`).then(response => {
            setPokemons(response.data.pokemon_species);
            setAbilities(response.data.abilities);
            setMoves(response.data.moves)
        })
    }, [params.generation])

    return (
        <>
            <Header>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <GenerationInfo>
                <header>
                    <img src={logoImg} alt="pokebola"/>
                    <div>
                        <strong>{params.generation}</strong>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{pokemons.length}</strong>
                        <span>Especies de Pokemon</span>
                    </li>
                    <li>
                        <strong>{abilities.length}</strong>
                        <span>Habilidades</span>
                    </li>
                    <li>
                        <strong>{moves.length}</strong>
                        <span>Movimentos</span>
                    </li>
                </ul>
            </GenerationInfo>
            <Pokemons>
                {pokemons.map((pokemon, index) => (
                    <div key={index} >
                        <strong>{pokemon.name}</strong>
                    </div>
                ))}
            </Pokemons>
        </>
    );
}

export default Generation;