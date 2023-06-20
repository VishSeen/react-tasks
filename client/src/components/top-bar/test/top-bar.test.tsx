import TopBar from "../top-bar";
import { render, screen } from "@testing-library/react";

test('renders learn react link', () => {
  render(<TopBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
