import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function useSelectorTyped<T>(fn: (state: RootState) => T): T {
  return useSelector(fn);
}

export default useSelectorTyped;
