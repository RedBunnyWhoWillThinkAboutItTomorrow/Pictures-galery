import * as React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        alert('Помилка: ' + error + '\nІнформація про помилку: ' + errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Щось пішло не так.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;