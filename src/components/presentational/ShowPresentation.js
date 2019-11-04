import React, { Component } from 'react'

export class ShowPresentation extends Component {

    componentDidMount() {
        this.props.show();
        // console.log(this.props.newPost);
        // console.log(this.props.posts);

    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.newPost) {
    //         this.props.posts.unshift(nextProps.newPost);
    //     }
    // }

    //componentDidUpdate()

    render() {
        // console.log("This is showpre render");
        // console.log("Posts: ", this.props.posts);
        // console.log("newPosts: ", this.props.newPost);
        if (this.props.posts) {
            this.props.posts.unshift(this.props.newPost);
        }
        return (
            <div>
                <h1> Posts</h1>
                {this.props.posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
                {/* {this.props.newPost.title} */}
            </div>
        )
    }
}

export default ShowPresentation;
