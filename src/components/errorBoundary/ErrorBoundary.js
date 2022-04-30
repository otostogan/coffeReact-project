import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    static getDerivedStateFromError(error) {
        
        return { error: true };
      }

    render(){
        
        if(this.state.error){
            return(
                <div>
                    Нам не удалось отабразить товары
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;