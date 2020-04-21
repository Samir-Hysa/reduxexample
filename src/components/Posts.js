import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPost} from "../actions/postAction";

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPost();
    }

    render() {
        const postItems = this.props.posts.map(post =>
            <div key={post.id}>
                <h3> {post.title} </h3>
                <p> {post.body} </p>
            </div>);
        return (
            <div>
                <h1> Post </h1>
                {postItems}
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    posts: state.posts.items
})

export default connect(mapStatetoProps, {fetchPost})(Posts);
