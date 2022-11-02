import { act, cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import BlogDetail from '../blog-detail.js';

afterEach(cleanup)

const fakeBlog = {
    title: 'Fake Blog Title',
    body: 'Fake blog body.'
}

const asyncRouterRender = async () => {
  return render(<Router><BlogDetail /></Router>)
}

it('Renders with blog data', async () => {

  const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ 
        text: () => Promise.resolve(JSON.stringify(fakeBlog)), 
        ok: true
      })
    )

  await act(asyncRouterRender);
  expect(screen.getByText(fakeBlog.title)).toBeInTheDocument()
  expect(screen.getByText(fakeBlog.body)).toBeInTheDocument()
})
