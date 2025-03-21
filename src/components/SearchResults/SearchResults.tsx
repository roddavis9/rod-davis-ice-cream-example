import React, {useEffect, useId} from 'react';
import axios from 'axios';
import { useSearchContext } from "../../context/SearchContext";


const SearchResults = () => {
  const { searchTerm } = useSearchContext();
  const [searchResults, setSearchResults] = React.useState([]);

  const getIceCreamShops = async () => {
    let yelpURL = `/v3/businesses/search`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      },
      params : {
        term: 'ice cream',
        location: searchTerm,
        limit: 5
      }
    };

    await axios.get(yelpURL, options)
      .then((response) => {
        console.log('response', response.data.businesses);
        setSearchResults(response.data.businesses);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  useEffect(() => {
    console.log('currentSearchTerm: ', searchTerm);
    getIceCreamShops()
  }, [searchTerm])

  return (
    <div>
      {searchResults.map((business: any) => (
        <div key={business?.id}>
          {business?.name}
        </div>

      ))}
    </div>
  );
};

export default SearchResults;
