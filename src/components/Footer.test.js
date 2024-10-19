
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer Component', () => {
  
  test('renders footer with Incubyte logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Incubyte Blog/i);
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute('src')).toBe('/images/mainlogo.png');
  });

  test('renders social media icons with correct links', () => {
    render(<Footer />);

    
    const linkedinLink = screen.getByTitle(/LinkedIn/i);
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink.getAttribute('href')).toBe('https://www.linkedin.com/company/incubyte');

    
    const twitterLink = screen.getByTitle(/Twitter/i);
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink.getAttribute('href')).toBe('https://twitter.com/Incubyte_co');

    
    const githubLink = screen.getByTitle(/GitHub/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.getAttribute('href')).toBe('https://www.github.com/incubyte');

    
    const rssLink = screen.getByTitle(/RSS Feed/i);
    expect(rssLink).toBeInTheDocument();
    expect(rssLink.getAttribute('href')).toBe('https://feedly.com/i/subscription/feed/https://blog.incubyte.co/rss/');
  });

  test('renders footer links for navigation', () => {
    render(<Footer />);
    
    const aboutUsLink = screen.getByText(/About Us/i);
    expect(aboutUsLink).toBeInTheDocument();
    expect(aboutUsLink.getAttribute('href')).toBe('https://www.incubyte.co/about-us');

    const servicesLink = screen.getByText(/Services/i);
    expect(servicesLink).toBeInTheDocument();
    expect(servicesLink.getAttribute('href')).toBe('https://www.incubyte.co/what-we-do-overview');

    const contactUsLink = screen.getByText(/Contact Us/i);
    expect(contactUsLink).toBeInTheDocument();
    expect(contactUsLink.getAttribute('href')).toBe('https://www.incubyte.co/contact-us');
  });

  test('renders copyright and footer policies', () => {
    render(<Footer />);
    
    const copyrightText = screen.getByText(/© 2024 Incubyte - All Rights Reserved/i);
    expect(copyrightText).toBeInTheDocument();

    const privacyPolicyLink = screen.getByText(/Privacy Policy/i);
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(privacyPolicyLink.getAttribute('href')).toBe('https://www.incubyte.co/privacy-policy');

    const termsLink = screen.getByText(/Terms and Conditions/i);
    expect(termsLink).toBeInTheDocument();
    expect(termsLink.getAttribute('href')).toBe('https://www.incubyte.co/privacy-policy');

    const cookiePolicyLink = screen.getByText(/Cookie Policy/i);
    expect(cookiePolicyLink).toBeInTheDocument();
    expect(cookiePolicyLink.getAttribute('href')).toBe('https://www.incubyte.co/privacy-policy');
  });
});
