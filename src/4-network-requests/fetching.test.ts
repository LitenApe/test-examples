import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer();

afterEach(() => server.resetHandlers());

beforeAll(() => server.listen());
afterAll(() => server.close());

async function internalFetch(info: RequestInfo, init?: RequestInit) {
  const response = await fetch(info, init);

  if (!response.ok) {
    throw new Error();
  }

  return response;
}

// can also just use an async function and await the fetch
test('successful http request', (done) => {
  server.use(
    rest.get('/users', (req, res, ctx) => res(ctx.status(200)))
  );

  internalFetch('/users')
    .then(() => done())
    .catch(() => done('should not have resulted in an error thrown'));
});

// can also just use an async function and await the fetch
test('failed http request', (done) => {
  server.use(
    rest.get('/users', (req, res, ctx) => res(ctx.status(400)))
  );

  internalFetch('/users')
    .then(() => done('should have been an error thrown'))
    .catch(() => done());
});
