var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
	    return {error: null};
	},
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onLogin}>
						<h1>Login</h1>
						<p>{this.state.error}</p>
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="email" className="validate" id="email_address" />
								<label htmlFor="first_name">Email Address</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input type="password" ref="password" className="validate" id="password" />
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn">Log In</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onLogin: function(e) {
		e.preventDefault();
		var email = this.refs.email.getDOMNode().value;
		var password = this.refs.password.getDOMNode().value;
		Parse.User.logIn(email, password, {
			success: (user) => {
				this.setState({
					error: null
				});
				this.props.router.navigate('dashboard', {trigger: true});
			},
			error: (user, error) => {
				this.setState({
					error: error.message
				})
			}
		})
	}
});