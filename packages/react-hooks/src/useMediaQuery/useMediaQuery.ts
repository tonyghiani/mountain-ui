import { useEffect, useState } from 'react';

/**
 *
 * @param queries List of queries to match
 * @returns Boolean value telling if the passed query/queries is a matching.
 */
function useMediaQuery(...queries: string[]): boolean {
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  const [match, setMatch] = useState(false);

  useEffect(() => {
    let active = true;
    if (!supportMatchMedia) return undefined;

    const query = queries.join();
    const queryList = window.matchMedia(query);

    function updateMatch() {
      if (active) setMatch(queryList.matches);
    }

    updateMatch();
    queryList.addListener(updateMatch);

    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [queries, supportMatchMedia]);

  return match;
}

export default useMediaQuery;
