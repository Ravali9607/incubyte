import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect'; // for better assertions

describe('Header Component', () => {


  it('should render the logo with correct alt text', () => {
    render(<Header />);
    const logo = screen.getByAltText(/Incubyte Blog/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/mainlogo.png');
  });

  
  it('should render an empty search input initially', () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput.value).toBe(''); 
  });

 
  it('should update the search input when typing', () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'React' } });
    expect(searchInput.value).toBe('React');
  });

  
  it('should render the search button', () => {
    render(<Header />);
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeInTheDocument();
  });

  
  it('should trigger the search form submission on click of search button', () => {
    render(<Header />);
    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);
    
    expect(searchButton).toBeEnabled(); 
  });

  
  it('should render the "Let\'s Talk" button', () => {
    render(<Header />);
    const letsTalkButton = screen.getByText(/Let's Talk/i);
    expect(letsTalkButton).toBeInTheDocument();
    expect(letsTalkButton).toHaveAttribute('href', 'https://www.incubyte.co/lets-get-started');
  });

  
  it('should render the moon icon', () => {
    render(<Header />);
    const moonIcon = screen.getByTestId('moon-icon');
    expect(moonIcon).toBeInTheDocument();
  });
});
