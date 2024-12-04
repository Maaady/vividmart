// components/Header.tsx
import React from 'react';

interface HeaderProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <header className="p-4 bg-gray-100 shadow-md">
      <h1 className="text-2xl font-bold">VividMart</h1>
      <nav>
        <ul className="flex space-x-4 mt-2">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer ${
                category === selectedCategory ? 'text-blue-500 font-semibold' : ''
              }`}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
