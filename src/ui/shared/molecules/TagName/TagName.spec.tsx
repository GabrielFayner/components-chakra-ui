import { render, screen } from '@testing-library/react'
import TagName from '.'

describe('TagName', () => {
    it('should render a tag name', () => {
        render(
            <TagName ml={2} size='md' color='gray.800' bgColor='grey.500' borderRadius='md'>
                Valor
            </TagName>
        )      
        expect(screen.getByText(/valor/i)).toBeInTheDocument();      
    });
  });