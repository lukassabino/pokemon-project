import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/pokebola_red.png';

import { Title, Generations } from './styles';

interface GenerationsInfo {
    name: string;
    url: string;
}

const Dashboard: React.FC = () => {
    const [generations, setGenerations] = useState<GenerationsInfo[]>([]);

    useEffect(() => {
        api.get('/generation').then(response => {
            setGenerations(response.data.results);
        })
    }, [])

    return (
        <>
            <Title>Pokemon Games Generation</Title>
            <Generations>
                {generations.map((generation, index) => (
                    <Link key={index} to={`/generation/${generation.name}`}>
                        <img 
                            src={logoImg} 
                            alt="pokebola"/>
                        <div>
                            <strong>{generation.name}</strong>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Generations>
        </>
    );
}

export default Dashboard;