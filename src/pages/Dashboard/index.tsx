import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/pokebola.png';

import { Title, Form, Generations } from './styles';

interface Generations {
    name: string;
    url: string;

}

const Dashboard: React.FC = () => {
    const [generations, setGenerations] = useState<Generations[]>([]);

    useEffect(() => {
        api.get('/generation').then(response => {
            setGenerations(response.data.results);
        })
    }, [])

    return (
        <>
            <Title>Pokemon Games Generation</Title>
            <Form>
                <input placeholder="Digite uma geração" />
                <button type="submit" >Pesquisar</button>
            </Form>
            <Generations>
                {generations.map((generation, index) => (
                    <Link key={index} to={`/generation/${generation.name}`}>
                        <img 
                            src={logoImg} 
                            alt="pokebola"/>
                        <div>
                            <strong>{generation.name}</strong>
                            <p>{generation.url}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Generations>
        </>
    );
}

export default Dashboard;