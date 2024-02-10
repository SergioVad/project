import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from '@/widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // eslint-disable-next-line i18next/no-literal-string
            return <Suspense><PageError /></Suspense>;
        }
        return children;
    }
}
