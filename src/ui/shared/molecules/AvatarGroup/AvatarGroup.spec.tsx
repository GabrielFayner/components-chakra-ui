import { render, screen } from '@testing-library/react'
import AvatarGroup from '.'

describe('AvatarGroup', () => {
    it('should render a avatar group', () => {
        render(<AvatarGroup />)           
        expect(screen.getByText(/ta/i)).toBeInTheDocument();      
    });
  });