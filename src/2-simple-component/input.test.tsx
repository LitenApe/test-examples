import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Input from "./input";

describe('input component behaves like a input element', () => {
  test('renders with label', () => {
    render(<Input label="Test" />);

    // retrieve the input field through displayed label
    screen.getByLabelText("Test");
  });

  test('default value prop set initial input elements value', () => {
    render(<Input label="Test" defaultValue="test value" />);

    const input = screen.getByLabelText('Test') as HTMLInputElement;
    expect(input).toHaveValue('test value');
  });

  test('input events associated with typing are simulated', () => {
    const mockKeyDown = jest.fn();
    const mockKeyUp = jest.fn();
    const mockOnChange = jest.fn();

    render(
      <Input
        label="Test"
        onKeyDown={mockKeyDown}
        onKeyUp={mockKeyUp}
        onChange={mockOnChange}
      />
    );

    expect(mockKeyDown).toBeCalledTimes(0);
    expect(mockKeyUp).toBeCalledTimes(0);
    expect(mockOnChange).toBeCalledTimes(0);

    const test_string = 'this is a test string';
    const input = screen.getByLabelText('Test');

    // simulates all events associated with a click,
    // not isolated to the onChange event itself.
    userEvent.type(input, test_string);

    expect(input).toHaveValue(test_string);

    expect(mockKeyDown).toHaveBeenCalledTimes(test_string.length);
    expect(mockKeyUp).toHaveBeenCalledTimes(test_string.length);
    expect(mockOnChange).toHaveBeenCalledTimes(test_string.length);
  });
});
