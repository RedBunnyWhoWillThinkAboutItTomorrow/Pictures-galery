import { render, screen } from '@testing-library/react';
import PictureCardComponent from "./PictureCardComponent";
import React from "react";
import {BrowserRouter} from "react-router-dom";

test('render picture card', () => {
    let picture = {id: 0, name: 'name0', description: 'description0', genre: 'genre0', authorName: 'author0', year: '1920', imgSrc: 'img0'}

    render(<BrowserRouter><PictureCardComponent picture={picture}/></BrowserRouter>);
    const nameElement = screen.getByText('name0');
    const authorElement = screen.getByText('author0');
    const buttonElement = screen.getByText('Докладніше');
    expect(nameElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});