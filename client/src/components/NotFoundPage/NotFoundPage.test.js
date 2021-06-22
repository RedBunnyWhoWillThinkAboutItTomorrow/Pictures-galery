import { render, screen } from '@testing-library/react';
import NotFoundPage from "./NotFoundPage";
import React from "react";
import {BrowserRouter} from "react-router-dom";

test('renders notFound page', () => {
    render(<BrowserRouter><NotFoundPage /></BrowserRouter>);
    const headerElement = screen.getByText('Сторінку не знайдено');
    const linkElement = screen.getByText('Повернутись до галереї');
    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
});