import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!title.trim()) errors.title = 'Title is required';
    if (!ingredients.trim()) errors.ingredients = 'Ingredients are required';
    if (!instructions.trim()) errors.instructions = 'Instructions are required';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form data
      console.log({ title, ingredients, instructions });
      // Clear form fields
      setTitle('');
      setIngredients('');
      setInstructions('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`mt-1 block w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`mt-1 block w-full border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
        />
        {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className={`mt-1 block w-full border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
        />
        {errors.instructions && <p className="text-red-500 text-xs mt-1">{errors.instructions}</p>}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
