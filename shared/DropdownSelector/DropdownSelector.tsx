'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

type TOption = {
  label: string;
  value: number;
};

type DropdownSelectorProps = {
  options: TOption[];
  onOptionSelect: (option: TOption) => void;
  placeholder?: string;
};

const DropdownContent = ({
  options,
  onOptionSelect,
  placeholder = 'Select an option',
}: DropdownSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: TOption) => {
    setSelectedOption(option);
    onOptionSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-56">
      <button
        className="w-full p-2 bg-header text-foreground border border-foreground rounded-md shadow-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-hover"
        onClick={toggleDropdown}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <FiChevronDown
          className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-header border border-foreground rounded-md shadow-lg max-h-60 overflow-auto">
          {options.length === 0 ? (
            <li className="px-4 py-2 text-foreground cursor-not-allowed">
              No options
            </li>
          ) : (
            options.map(option => (
              <li
                key={option.value}
                className="px-4 py-2 hover:bg-hover cursor-pointer text-foreground"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export const DropdownSelector = ({
  options,
  onOptionSelect,
  placeholder = 'Select an option',
}: DropdownSelectorProps) => {
  return (
    <Suspense
      fallback={<div className="text-foreground text-center">Loading...</div>}
    >
      <DropdownContent
        options={options}
        onOptionSelect={onOptionSelect}
        placeholder={placeholder}
      />
    </Suspense>
  );
};
