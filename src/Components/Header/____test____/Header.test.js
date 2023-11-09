import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
test('renders learn react link', () => {
    const header =
    {
        id: 1,
        title: "Trang sản phẩm",
        img: "https://upload.wikimedia.org/wikipedia/vi/1/1d/Manchester_City_FC_logo.svg",
        name: "Pham Tuan Kiet",
    }
    render(
        <BrowserRouter>
            <Header info={header} />
        </BrowserRouter>
    );
    const linkElement = screen.getByText(header.title);
    expect(linkElement).toBeInTheDocument();
});