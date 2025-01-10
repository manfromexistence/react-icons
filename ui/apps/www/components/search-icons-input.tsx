'use client';

import React from "react";
import { debounce } from "@/utils/debounce"; // Make sure the path is correct
import { useSearch } from "@/utils/usesearch";

export function SearchInput() {
    const search = useSearch();
    const [inputQuery, setInputQuery] = React.useState(search.query); // Initialize with current query

    const debouncedOnSearch = React.useCallback(
        debounce((query: string) => {
            search.setQuery(query);
        }, 500),
        [search.setQuery], // Add search.setQuery to the dependency array
    );

    React.useEffect(() => {
        setInputQuery(search.query); // Update input when query changes
    }, [search.query]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setInputQuery(query);
        debouncedOnSearch(query);
    };

    return (
        <input
            type="text"
            aria-label="search"
            className="px2 py1"
            placeholder="🔍 Search Icons"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            value={inputQuery}
            onChange={onChange}
        />
    );
}
