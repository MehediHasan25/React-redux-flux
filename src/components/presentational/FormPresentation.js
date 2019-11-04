import React, { Component } from 'react';

export class FormPresentation extends Component {
    state = {
        title: '',
        body: ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        const { title, body } = this.state;
        e.preventDefault();
        let obj = {
            title,
            body
        }
        this.props.onSubmit(obj, this.props.history);
        //this.props.history.push('/posts');
        this.setState({
            title: '',
            body: ''
        });
    }


    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label> <br />
                        <input
                            type='text'
                            name='title'
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label> <br />
                        <textarea
                            name='body'
                            onChange={this.onChange}
                            value={this.state.body}
                        />
                    </div>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormPresentation;
