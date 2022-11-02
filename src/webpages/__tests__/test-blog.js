import { act, cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Blog from '../blog.js';

afterEach(cleanup)

const fakeBlogsList = [
                        { 
                          title:'Fake blog title 1',
                          preview:'This is fake blog preview',
                          date:'2022-02-02',
                          blogSlug: 'fake-1'
                        },
                        { 
                          title:'Fake blog title 2',
                          preview:'This is fake blog preview 2',
                          date:'2022-02-02',
                          blogSlug: 'fake-2'
                        }
                      ]


const asyncRouterRender = async () => {
  return render(<Router><Blog /></Router>)
}

it('Renders with blog data', async () => {

  const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ 
        text: () => Promise.resolve(JSON.stringify(fakeBlogsList)), 
        ok: true
      })
    )

  await act(asyncRouterRender);

  fakeBlogsList.map((fakeBlog, index) => {
    expect(screen.getByText(fakeBlog.title)).toBeInTheDocument()
    expect(screen.getByText(fakeBlog.preview)).toBeInTheDocument()
  })

})
