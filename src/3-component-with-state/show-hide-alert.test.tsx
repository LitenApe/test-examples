import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShowHideAlert from "./show-hide-alert";

test('alert is hidden by default', () => {
  render(<ShowHideAlert />);

  // query won't throw an error if the element
  // is not found. Should only be used to verify
  // that elements are not in the DOM.
  const alert = screen.queryByRole('alert');

  // both checks for the same case, however,
  // ".not.toBeInDocument()" is more meaningful
  // for the reader
  expect(alert).not.toBeInTheDocument();
  expect(alert).toBeNull();
});

test('alert is rendered on click', async () => {
  render(<ShowHideAlert />);

  const button = screen.getByRole('button');

  userEvent.click(button);

  // essentially a "getByRole()" wrapped in a
  // "waitFor()", which retries to find an element
  // for a configurable amount of time until
  // throwing an error when it gives up.
  await screen.findByRole('alert');
});

test('alert is removed again after click', async () => {
  render(<ShowHideAlert />);

  const button = screen.getByRole('button');

  userEvent.click(button);

  // essentially a "getByRole()" wrapped in a
  // "waitFor()", which retries to find an element
  // for a configurable amount of time until
  // throwing an error when it gives up.
  await screen.findByRole('alert');

  userEvent.click(button);

  // similar to "waitFor()", however, "waitForElementToBeRemoved"
  // listens for DOM mutations, which makes it more efficient compared
  // to "waitFor()", which retries until the wrapped function stops
  // throwing errors
  await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
});
