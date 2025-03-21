import React, {createContext, useContext, useState} from 'react';

type SearchContextType = {
  searchTerm: string | undefined;
  setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchContextProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm}}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchContextProvider');
  }
  return context;
};
