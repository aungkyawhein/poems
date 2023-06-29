'use client';

import React, { useEffect, useRef, useState } from "react";
import Searchicon from "./search-icon";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filterValue, setFilterValue] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (searchOpen) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [searchOpen]);

  const performSearch = () => {
    const postTitles = document.querySelectorAll('h2');
    postTitles.forEach((postTitle) => {
      if (filterValue.trim() && postTitle.innerText.indexOf(filterValue) !== -1) {
        const containerElement = postTitle.parentElement?.parentElement;
        if (containerElement) {
          containerElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
        }
      }
    });
    setFilterValue('');
    setSearchOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      performSearch();
    } else if (e.key === 'Escape') {
      setSearchOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchOpen(true);
  };

  const inputClass = [
    'px-3 py-2',
    'border-0',
    'rounded',
    'outline-0',
    'text-neutral-400',
    'bg-neutral-800'
  ].join(' ');

  const inputContainerClass = [
    'absolute',
    'right-0',
    '-top-1'
  ].join(' ');

  return (
    <div className="relative">
      <button className="block leading-none text-slate-400 hover:text-slate-600 transition-colors" onClick={handleClick}>
        <span className="sr-only">Search</span>
        <Searchicon />
      </button>
      <div className={inputContainerClass + (searchOpen ? '' : ' hidden')}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Enter to search"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={filterValue}
          className={inputClass}
          ref={inputRef}
        />
      </div>
    </div>
  );
}
