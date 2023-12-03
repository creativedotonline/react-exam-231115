import { Component } from "react";

export default class ErrorBoundary extends Component{
	constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }
	
	static getDeriveStateFromError(err){
		console.log(`GetDeriveStateFromError`);
		return{
			hasError:true,
		}
	}

	componentDidCatch(error, errorInfo){
		console.log(this.componentDidCatch);
		//to do logging
	}

	
	render(){
		if(this.state.hasError){
			return <h1>404</h1>
		}
		return this.props.children;
	}
}