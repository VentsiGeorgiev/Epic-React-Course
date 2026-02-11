import './App.css'
import Form from './components/Form'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      Something went wrong
      <p>{error instanceof Error ? error.message : 'Unknown Error'}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Form />
      </ErrorBoundary>
    </>
  )
}

export default App
