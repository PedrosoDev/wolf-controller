import { Navigate, createBrowserRouter } from 'react-router-dom'
import { MediaControllerPage } from './pages/media-controller'
import { DefaultLayout } from './layouts/default'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="media-controller" />
      },
      {
        path: 'media-controller',
        element: <MediaControllerPage />
      }
    ]
  }
])
