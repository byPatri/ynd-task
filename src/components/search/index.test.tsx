import { describe, it, expect , vi} from 'vitest'
import { render } from '@testing-library/react';
import Search from './index';

describe('Test search component', () => {
    const onSearch = () => vi.fn();
    it('should render component', () => {
        const {queryByLabelText} = render(
            <Search onSearch={onSearch} />,
          );
        expect(queryByLabelText(/Enter username/i)).toBeTruthy();
    });
})