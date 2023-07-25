import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from '../Card';

const mockCardProps = {
  title: 'Test Title',
  description: 'Test Description',
  imgSrc: '/images/test-image.png',
  link: 'https://example.com',
};

test('renders Card component with given props', () => {
  render(<Card {...mockCardProps} />);

  const linkElement = screen.getByRole('link');
  expect(linkElement).toHaveClass('group');
  expect(linkElement).toHaveClass('rounded-lg');
  expect(linkElement).toHaveClass('border');
  expect(linkElement).toHaveClass('border-transparent');

  expect(screen.getByText(mockCardProps.title)).toBeInTheDocument();
  expect(screen.getByText(mockCardProps.description)).toBeInTheDocument();
  expect(screen.getByAltText(mockCardProps.title)).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveAttribute('href', mockCardProps.link);
});
