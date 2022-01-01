/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {ErrorTemplate} from './error-template';

export interface ErrorBoundaryState {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(_error: any): {hasError: boolean} {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(_error: any, _errorInfo: any): void {
    // You can also log the error to an error reporting service
  }

  render(): React.ReactNode {
    const {children} = this.props;
    const {hasError} = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return <ErrorTemplate />;
    }

    return children;
  }
}
