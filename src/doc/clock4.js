import React,{Component} from 'react'

import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'

import 'codemirror/lib/codemirror.css'
// import './demo.css'
function Hero(props){
    return <h2>my name is {props.name}</h2>
}

var defaults = {
	markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

class Clock extends Component {
    constructor(){
        super();
        this.editor = React.createRef();
        this.state = {
            time: new Date().toLocaleTimeString(),
            code: defaults.markdown,
			readOnly: false,
			mode: 'javascript',

        }
    }
    updateCode  (newCode) {
		this.setState({
			code: newCode
		});
	}
    changeMode (e) {
		var mode = e.target.value;
		this.setState({
			mode: mode,
			code: defaults[mode]
		});
	}
	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
	}
    render(){
        var options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
        return (
            <div >
                <CodeMirror ref="editor" value={this.state.code} onChange={this.updateCode.bind(this)} options={options} autoFocus={true} />
				<div style={{ marginTop: 10 }}>
					<select onChange={this.changeMode.bind(this)} value={this.state.mode}>
						<option value="markdown">Markdown</option>
						<option value="javascript">JavaScript</option>
					</select>
					<button onClick={this.toggleReadOnly.bind(this)}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
				</div>
            </div>
        )
    }
    

}

export default Clock