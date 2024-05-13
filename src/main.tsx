import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import OneVsOne from './routes/1v1Play.tsx'
import OnePlay from './routes/onePlay.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [

    ]
  },
  {
    path: "one-vs-one",
    element: <OneVsOne />
  },
  {
    path: "1-play",
    element: <OnePlay />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
