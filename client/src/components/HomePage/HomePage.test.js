import { render, screen } from '@testing-library/react';
import HomePage from "./HomePage";
import React from "react";

test('renders home page content', () => {
    render(<HomePage />);
    const titleElement = screen.getByText('Gallery');
    const textElement = screen.getByText('Програму розроблено в рамках курсового проекту з використанням бібліотеки React.');
    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
});