import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Transaction/Transaction'
import Support from './pages/Support/Support'
import Signup from './pages/Auth/Signup/Signup'
import Signin from './pages/Auth/Signin/Signin'
import Terms from './pages/Terms'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  { path: '/transaction', element: <Transaction /> },
  { path: '/support', element: <Support /> },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Signin /> },
  { path: '/terms', element: <Terms /> },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
