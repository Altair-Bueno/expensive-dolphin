import {useSearchHistory} from "../../types";

export function SearchHistory() {
    const [searchHistory,_] = useSearchHistory()
    return <h1>{JSON.stringify(searchHistory)}</h1>
}