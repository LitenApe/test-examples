import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Button from "./button"

describe('children is present', () => {
  test('renders button with text', () => {
    render(<Button>Test</Button>);

    // synchronous; throws error of not found
    screen.getByText('Test');
  });

  test('renders button with styled text', () => {
    render(<button>T<b>es</b>t</button>);

    // synchronous; Text is formatted and can't
    // be retrieved directly
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Test');
  });
});

describe('callbacks are invoked', () => {
  test('onClick is called on button click', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Test</Button>);

    const button = screen.getByText('Test');

    expect(mockOnClick).toBeCalledTimes(0);

    // simulates all events associated with a click,
    // not isolated to the click event itself.
    userEvent.click(button);

    expect(mockOnClick).toBeCalledTimes(1);
  });

  test('mouse up and down are called on click', () => {
    const mockOnMouseDown = jest.fn();
    const mockOnMouseUp = jest.fn();
    render(<Button onMouseDown={mockOnMouseDown} onMouseUp={mockOnMouseUp}>Test</Button>);

    const button = screen.getByText('Test');

    expect(mockOnMouseDown).toBeCalledTimes(0);
    expect(mockOnMouseUp).toBeCalledTimes(0);

    // simulates all events associated with a click,
    // not isolated to the click event itself.
    userEvent.click(button);

    expect(mockOnMouseDown).toBeCalledTimes(1);
    expect(mockOnMouseUp).toBeCalledTimes(1);
  });
});
