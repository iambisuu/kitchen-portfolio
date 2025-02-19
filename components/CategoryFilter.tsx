interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
  }
  
  export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
    return (
      <div className="flex justify-center gap-4 my-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    );
  };