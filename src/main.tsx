import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import OneVsOne from './routes/1v1Play/index.tsx'
import OnePlay from './routes/onePlay/index.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import StartOnePlayer from './routes/onePlay/startOnePlayer.tsx'
import EndOnePlayer from './routes/onePlay/endOnePlayer.tsx'

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
  },
  {
    path: "/1-play/start",
    element: <StartOnePlayer />
  },
  {
    path: "/1-play/end",
    element: <EndOnePlayer />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
