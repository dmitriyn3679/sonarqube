import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BadPracticeComponent from '../components/BadPracticeComponent';
import '@testing-library/jest-dom';

describe('BadPracticeComponent', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<BadPracticeComponent />);
    expect(getByText(/Bad practice count:/)).toBeInTheDocument();
  });
});
