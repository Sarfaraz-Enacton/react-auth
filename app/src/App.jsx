import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Transaction/Transaction'
import Support from './pages/Support/Support'
import Signup from './pages/Auth/Signup/Signup'
import Signin from './pages/Auth/Signin/Signin'
import Terms from './pages/Terms'
import EmailVerification from './pages/Auth/EmailVerification/EmailVerification'
import EmailVerificationSuccess from './pages/Auth/EmailVerificationSuccess/EmailVerificationSuccess'
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword'
import PasswordEmail from './pages/Auth/PasswordEmail/PasswordEmail'
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword'
import ResetDone from './pages/Auth/ResetDone/ResetDone'

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
  { path: '/email-verification', element: <EmailVerification /> },
  { path: '/registration-success', element: <EmailVerificationSuccess /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/password-email', element: <PasswordEmail /> },
  { path: '/reset-password', element: <ResetPassword /> },
  { path: '/reset-done', element: <ResetDone /> },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
