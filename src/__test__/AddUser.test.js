import { render, screen } from "@testing-library/react";
import AddUser from "../user/AddUser";

test("renders Image Finder heading", () => {
  render(<AddUser />);
  const linkElement = screen.getByText(/Image Finder.../i);
  expect(linkElement).toBeInTheDocument();
});


test("name input should be rendered", () => {
    render(<AddUser />);
    const usernameInputEl = screen.getByPlaceholderText(/Please Enter Your Name.../i);
    expect(usernameInputEl).toBeInTheDocument();
  });
  
  test("surname input should be rendered", () => {
    render(<AddUser />);
    const passwordInputEl = screen.getByPlaceholderText(/Please Enter Your Surname.../i);
    expect(passwordInputEl).toBeInTheDocument();
  });
  
  test("button should be rendered", () => {
    render(<AddUser />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });