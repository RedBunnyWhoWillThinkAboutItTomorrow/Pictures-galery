import { render, screen } from '@testing-library/react';
import CatalogPage from "./CatalogPage";
import React from "react";
import store from "../../store/store";
import {Provider} from "react-redux";

test('renders catalog page', () => {
    render(<Provider store={store}><CatalogPage /></Provider>);
    const countElement = screen.getByText(/Картин в галереї/i);
    const headerElement = screen.getByText('Галерея');
    expect(countElement).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
});