import React, { Fragment } from "react";
import Card from "../components/Card/Card";

console.log(process.env)
const API = "http://www.omdbapi.com/?i=tt3896198&apikey=8f7b2287";
class List extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			searchTerm: '',
			error: '',
			loading: true
		};
	}
	async componentDidMount() {
		// const res = await fetch("../../assets/data.json");
		const res = await fetch(`${API}&s=batman`);
		const resJSON = await res.json();
		this.setState({ data: resJSON.Search, loading: false });
	}
	async handlerSubmit(e) {
		e.preventDefault();
		if (!this.state.searchTerm) {
			return this.setState({error: 'Por favor escribe un texto válido'})
		}
		const res = await fetch(`${API}&s=${this.state.searchTerm}`)
		const data = await res.json()
		if(!data.Search) {
			return this.setState({error: 'No se encontraron resultados'})
		}
		this.setState({data: data.Search, error: '', searchTerm: ''})
	}
	render() {
		const {data, loading} = this.state
		if(loading){
			return <h3 className="text-light">Loading...</h3>
		}
		return (
			<Fragment>
				<div className="row">
					<div className="col-md-4 offset-md-4 p-4">
						<form onSubmit={(e) => this.handlerSubmit(e)}>
							<input
								type="text"
								className="form-control"
								placeholder="Search"
								onChange={(e) => this.setState({ searchTerm: e.target.value })}
								value={this.state.searchTerm}
								autoFocus
							/>
						</form>
						<p className="text-white">{this.state.error ? this.state.error : ''}</p>
					</div>
				</div>
				<div className="row">
					{data.map((movie, i) => {
						return <Card movie={movie} key={i} />;
					})}
				</div>
			</Fragment>
		);
	}
}

export default List;
