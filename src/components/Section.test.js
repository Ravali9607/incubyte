import { render, screen, fireEvent } from '@testing-library/react';
import Section from './Section';
import '@testing-library/jest-dom/extend-expect'; // for better assertions

describe('Section Component', () => {

 
  it('should render the main image with correct alt text', () => {
    render(<Section />);
    const image = screen.getByAltText(/Incubyte TDD Assessment/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/laptop-plant.jpg');
  });

 
  it('should render the post title', () => {
    render(<Section />);
    const title = screen.getByText(/Incubyte TDD Assessment/i);
    expect(title).toBeInTheDocument();
  });

  
  it('should render the careers badges', () => {
    render(<Section />);
    const badge = screen.getByText(/Careers/i);
    expect(badge).toBeInTheDocument();
  });

 
  it('should render the back to blog link', () => {
    render(<Section />);
    const backLink = screen.getByText(/← Back to Blog/i);
    expect(backLink).toBeInTheDocument();
  });

  
  it('should render the code block with proper content', () => {
    render(<Section />);
    const codeBlock = screen.getByText(/int add/i);
    expect(codeBlock).toBeInTheDocument();
  });

  
  it('should render the social media buttons', () => {
    render(<Section />);
    const facebookBtn = screen.getByText(/Facebook/i);
    const twitterBtn = screen.getByText(/Twitter/i);
    const linkedinBtn = screen.getByText(/LinkedIn/i);
    const emailBtn = screen.getByText(/E-Mail/i);
    const redditBtn = screen.getByText(/Reddit/i);
    const whatsappBtn = screen.getByText(/WhatsApp/i);

    expect(facebookBtn).toBeInTheDocument();
    expect(twitterBtn).toBeInTheDocument();
    expect(linkedinBtn).toBeInTheDocument();
    expect(emailBtn).toBeInTheDocument();
    expect(redditBtn).toBeInTheDocument();
    expect(whatsappBtn).toBeInTheDocument();
  });

  
  it('should render the email input field', () => {
    render(<Section />);
    const emailInput = screen.getByPlaceholderText('name@email.com');
    expect(emailInput).toBeInTheDocument();
  });

 
  it('should render the subscribe button', () => {
    render(<Section />);
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });
    expect(subscribeButton).toBeInTheDocument();
  });

  
  it('should allow user to type email into the input', () => {
    render(<Section />);
    const emailInput = screen.getByPlaceholderText('name@email.com');
    fireEvent.change(emailInput, { target: { value: 'test@domain.com' } });
    expect(emailInput.value).toBe('test@domain.com');
  });

  
  it('should render the "Hey You!" paragraph', () => {
    render(<Section />);
    const heyYouText = screen.getByText(/You were caught scrolling too fast/i);
    expect(heyYouText).toBeInTheDocument();
  });
});
