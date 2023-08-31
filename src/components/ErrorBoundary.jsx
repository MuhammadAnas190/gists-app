import React from 'react';

/* The ErrorBoundary class is a React component that catches and handles errors in its child components. */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(
    error
  ) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error:', error);
    console.error(
      'Error Info:',
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      // render custom fallback UI
      return (
        <h1>
          Oops! Something went wrong.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
