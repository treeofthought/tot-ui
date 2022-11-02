import { act, cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Index from '../index.js';

afterEach(cleanup)

const fakeBlog = {
                  title: 'Fake blog title', 
                  preview: 'This a fake blog tite',
                  date:'2022-02-02',
                  blogSlug:'fake-blog'
                }



const asyncRouterRender = async () => {
  return render(<Router><Index /></Router>)
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
  expect(screen.getByText(fakeBlog.preview)).toBeInTheDocument()
})
