import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Accordion from "./accordion"


describe('accordion behaves like an accordion should...', () => {
  test('content has max-height of 1px by default', () => {
    render(<Accordion data-testid="test-content" />);

    const content = screen.getByTestId("test-content");
    expect(content.style.maxHeight).toBe('1px');
  });

  test('content has max-height larger then 1px after click', () => {
    render(<Accordion data-testid="test-content" />);

    const content = screen.getByTestId("test-content");
    expect(content.style.maxHeight).toBe('1px');

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(content.style.maxHeight).not.toBe('1px');
  });

  test('content has max-height toggled on click', () => {
    render(<Accordion data-testid="test-content" />);

    const button = screen.getByRole('button');
    const content = screen.getByTestId("test-content");

    userEvent.click(button);

    expect(content.style.maxHeight).not.toBe('1px');

    userEvent.click(button);
    expect(content.style.maxHeight).toBe('1px');
  });

  test('accordion button toggles aria-expanded attribute in click', () => {
    render(<Accordion />);

    const button = screen.getByRole('button');

    expect(button.getAttribute('aria-expanded')).toBe("false");

    userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toBe("true");

    userEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toBe("false");
  })
});
