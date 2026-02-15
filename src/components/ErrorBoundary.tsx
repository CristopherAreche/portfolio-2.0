"use client";
import { Component, ReactNode } from "react";
import { useLanguage } from "@/app/language-provider";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorText {
  title: string;
  description: string;
  retry: string;
}

interface LocalizedErrorBoundaryProps extends ErrorBoundaryProps {
  text: ErrorText;
}

class LocalizedErrorBoundary extends Component<
  LocalizedErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: LocalizedErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 p-8">
            <h2 className="text-2xl font-main-font text-grey_text dark:text-dark_mode_text">
              {this.props.text.title}
            </h2>
            <p className="text-grey_text dark:text-dark_mode_text/80">
              {this.props.text.description}
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-2 text-sm font-main-font"
            >
              {this.props.text.retry}
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

const ErrorBoundary = ({ children, fallback }: ErrorBoundaryProps) => {
  const { t } = useLanguage();

  return (
    <LocalizedErrorBoundary text={t.errorBoundary} fallback={fallback}>
      {children}
    </LocalizedErrorBoundary>
  );
};

export default ErrorBoundary;
