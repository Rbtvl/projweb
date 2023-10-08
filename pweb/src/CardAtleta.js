import React from 'react';

const CardAtleta = ({ atleta, onAddToFavorites }) => {
    const {
        strThumb,
        strPlayer,
        strPosition,
        strHeight,
        strWeight,
        strDescriptionEN,
    } = atleta;
    
    
    
    return(
        <div className="card">
            <img src={strThumb} alt={strPlayer} />
            <h3>{strPlayer}</h3>
            <p>Posição: {strPosition}</p>
            <p>Altura: {strHeight}</p>
            <p>Peso: {strWeight}</p>
            <p>Descrição: {strDescriptionEN}</p>
            <button onClick={() => onAddToFavorites(atleta)}>Adicionar aos favoritos</button>
        </div>
    );
};

export default CardAtleta;