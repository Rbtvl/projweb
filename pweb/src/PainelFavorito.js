
import React from 'react';

const PainelFavorito = ({ favoritos }) => {
    return (
        <div className="favoritos">
            <h2>Atletas Favoritos</h2>
            <ul>
                {favoritos.map((atleta, index) => (
                    <li key={index}>{atleta.strPlayer}</li>
                ))}
            </ul>
        </div>
    );
};

export default PainelFavorito;