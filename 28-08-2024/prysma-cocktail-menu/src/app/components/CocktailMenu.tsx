"use client";

import { useEffect, useState } from 'react';
import { fetchCocktails } from '../services/cocktailService';
import { FaCartPlus, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
    strCategory: string;
    strGlass: string;
    strAlcoholic: string;
    strIngredients: {
        [key: string]: string | null;
    };
}

const CocktailMenu = () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        const loadCocktails = async () => {
            const data = await fetchCocktails(searchTerm);
            setCocktails(data);
            
        };

        loadCocktails();
    }, [searchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
        toast.success("Added to cart");
    };

    const handleLike = () => {
        toast.info("Liked");
    };

    const handleDislike = () => {
        toast.info("Disliked");
    };

    const currentCocktail = cocktails.length > 0 ? cocktails[currentIndex] : null;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 relative">
            {/* Cart icon positioned in the top right corner */}

            <div className="flex items-center mb-10">
                <h1 className="text-5xl font-extrabold text-indigo-900">Prysma</h1>
                <input 
                    type="text" 
                    placeholder="Search for a cocktail..." 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-1 ml-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    style={{ fontSize: '0.75rem', padding: '0.25rem' }} // Smaller input
                />
            </div>

            <div className="cocktail-detail bg-white p-6 rounded-lg shadow-lg">
                {currentCocktail && (
                    <div className="info text-center">
                        <img 
                            src={currentCocktail.strDrinkThumb} 
                            alt={currentCocktail.strDrink} 
                            className="w-48 h-48 object-cover mx-auto mb-4 rounded-md"
                        />
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{currentCocktail.strDrink}</h2>
                            <p className="mb-2">{currentCocktail.strInstructions}</p>
                            <p><strong>Category:</strong> {currentCocktail.strCategory}</p>
                            <p><strong>Glass:</strong> {currentCocktail.strGlass}</p>
                            <p><strong>Alcoholic:</strong> {currentCocktail.strAlcoholic}</p>
                            <div className="mb-4">
                                <strong>Ingredients:</strong>
                                <ul>
                                    {Object.keys(currentCocktail.strIngredients).map((key) => {
                                        const ingredient = currentCocktail.strIngredients[key];
                                        return ingredient ? <li key={key}>{ingredient}</li> : null;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="cocktail-list mt-8 flex flex-wrap justify-center gap-4">
                {cocktails.map((cocktail) => (
                    <button 
                        key={cocktail.idDrink} 
                        onClick={() => setCurrentIndex(cocktails.indexOf(cocktail))}
                        className="bg-white p-4 rounded-lg shadow-md"
                    >
                        <img 
                            src={cocktail.strDrinkThumb} 
                            alt={cocktail.strDrink} 
                            className="w-24 h-24 object-cover mb-2 rounded-md"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{cocktail.strDrink}</h3>
                        </div>
                    </button>
                ))}
            </div>

            <ToastContainer />
        </div>
    );
};

export default CocktailMenu;
