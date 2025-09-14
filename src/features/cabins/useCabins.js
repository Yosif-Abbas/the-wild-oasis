import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import { useSearchParams } from 'react-router-dom';

export function useCabins() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const {
    isLoading,
    data: { cabins, count } = {},
    error,
  } = useQuery({
    queryKey: ['cabins', page],
    queryFn: () => getCabins(+page),
  });
  return { isLoading, cabins, count, error };
}
