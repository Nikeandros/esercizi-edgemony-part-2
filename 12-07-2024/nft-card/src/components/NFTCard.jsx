import React from 'react';
import nftImage from '../assets/images/images/image-equilibrium.jpg'; // Assicurati di avere l'immagine nella cartella src/assets

const NFTCard = () => {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-4 max-w-xs mx-auto">
      <img src={nftImage} alt="Equilibrium" className="rounded-lg mb-4" />
      <h2 className="text-xl font-bold">Equilibrium #3429</h2>
      <p className="text-gray-400">Our Equilibrium collection promotes balance and calm.</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-cyan-400">0.041 ETH</span>
        <span className="text-gray-400">3 days left</span>
      </div>
      <div className="flex items-center mt-4">
        <img src="https://i.pravatar.cc/32" alt="Creator" className="w-8 h-8 rounded-full mr-2" />
        <p>Creation of <span className="text-white">Jules Wyvern</span></p>
      </div>
    </div>
  );
};

export default NFTCard;
