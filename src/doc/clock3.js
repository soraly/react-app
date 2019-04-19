import React, { Component } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'


require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/dracula.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');



class Clock extends Component {
	constructor() {
		super();

		this.state = {
			value: 'hello,hello,hello,hello,hello,hello,'

		}
	}
	updateCode(newCode) {
		this.setState({
			code: newCode
		});
	}

	render() {
		var options = {
			mode: 'javascript',
			readOnly: false,
		};
		return (
			<div>
				<h3>hello</h3>
				<CodeMirror
					value={this.state.value}
					options={options}
					onBeforeChange={(editor, data, value) => {
						this.setState({ value });
					}}
					onChange={(editor, value) => {
						console.log('controlled', { value });
					}}
					scroll={{
						x: 50,
						y: 50
					  }}
					  onScroll={(editor, data) => {}}
				/>
			</div>
		)
	}


}

export default Clock