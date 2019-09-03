import React, { Component } from 'react'

export default class ListCatalog extends Component {
    render() {
        return (
            <li>{this.props.content}</li>
        )
    }
}
