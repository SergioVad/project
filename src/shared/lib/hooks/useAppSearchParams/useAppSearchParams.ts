export function useSetSearchParams(params: Record<string, string>, searchParams: URLSearchParams) {
    Object.entries(params).forEach(([key, value]) => {
        searchParams.set(key, value);
    });
    window.history.pushState(null, '', `?${searchParams.toString()}`);
}

export function useGetSearchParams(params: string, searchParams: URLSearchParams) {
    searchParams.get(params);
}
