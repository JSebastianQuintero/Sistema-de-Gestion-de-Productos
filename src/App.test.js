import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders "seleccionar nuevo producto" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/seleccionar nuevo producto/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders "Ticket" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ticket/i);
  expect(linkElement).toBeInTheDocument();
});
