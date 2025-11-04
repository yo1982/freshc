import React, { useState, useCallback } from 'react';
import { useCart } from '../hooks/useCart';
import { suggestRecipe } from '../services/geminiService';
import { Recipe } from '../types';
import { PlusIcon } from '../components/icons/PlusIcon';
import { MinusIcon } from '../components/icons/MinusIcon';
import { TrashIcon } from '../components/icons/TrashIcon';
import { SparklesIcon } from '../components/icons/SparklesIcon';

const CartPage: React.FC = () => {
  const { cartItems, updateItemQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuggestRecipe = useCallback(async () => {
    if (cartItems.length === 0) {
      setError("Add some items to your cart to get a recipe suggestion.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setRecipe(null);
    try {
      const ingredients = cartItems.map(item => item.name);
      const suggestedRecipe = await suggestRecipe(ingredients);
      setRecipe(suggestedRecipe);
    } catch (err: any) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [cartItems]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <div className="bg-white p-8 text-center rounded-lg shadow-md">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-grow ml-4">
                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"><MinusIcon/></button>
                    <span className="w-10 text-center font-semibold">{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"><PlusIcon/></button>
                  </div>
                  <div className="ml-4 font-semibold text-gray-800 w-20 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                    <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal ({totalItems} items)</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">AI Recipe Suggester</h2>
            <button
              onClick={handleSuggestRecipe}
              disabled={isLoading || cartItems.length === 0}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <SparklesIcon />
              {isLoading ? 'Thinking...' : 'Suggest a Recipe'}
            </button>
            
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
            
            {recipe && (
              <div className="mt-4 border-t pt-4 animate-fade-in">
                <h3 className="text-lg font-bold text-blue-800">{recipe.recipeName}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">{recipe.description}</p>
                <h4 className="font-semibold mt-2">Ingredients:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
                <h4 className="font-semibold mt-3">Instructions:</h4>
                <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                  {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;