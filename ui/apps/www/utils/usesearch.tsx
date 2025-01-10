// utils/useSearch.ts (Client Component - Keep 'use client')
'use client';

import { searchWord } from "../store/store";
import { useStore } from "@nanostores/react";
import { useSearchParams, useRouter } from 'next/navigation';
import React from "react";

interface UseSearchValue {
    query: string;
    setQuery(query: string): void;
}

export function useSearch(): UseSearchValue {
    const query = useStore(searchWord);
    const router = useRouter();
    const searchParams:any = useSearchParams();

    // Get 'q' from query parameters directly
    const q = searchParams.get("q");

    React.useEffect(() => {
        const newQuery = typeof q === "string" ? q.toLowerCase() : "";
        searchWord.set(newQuery);
    }, [q]);

    const setQuery = React.useCallback((newQuery: string) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('q', newQuery);

        const search = currentParams.toString();
        const currentPathname = window.location.pathname;

        router.push(`${currentPathname}?${search}`, { scroll: false });
        searchWord.set(newQuery);

    }, [router, searchParams]);

    return {
        query,
        setQuery,
    };
}
