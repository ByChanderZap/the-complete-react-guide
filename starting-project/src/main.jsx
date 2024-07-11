import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Posts, loader as postsLoader } from './routes/Posts.jsx' // CHANGE
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NewPost, createPostAction } from './routes/NewPost.jsx'
import { RootLayout } from './routes/RootLayout.jsx'
import { PostDetails, postDetailsLoader } from './routes/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: createPostAction
          },
          {
            path: '/:id',
            element: <PostDetails />,
            loader: postDetailsLoader
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
