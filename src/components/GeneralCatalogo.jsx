import React, { Component } from 'react';
import Card from './Cards';

class GeneralCatalogo extends Component {
    constructor(props) {
        super(props);
        this.changeImage = this.props.location.state.changeImage
        this.tipo = this.props.location.state.tipo
    }
    render() {
        return (
            <div className="catalogo row">
                <Card changeImage={this.changeImage} id={"10054-anillo-vampyro.png"}></Card>
                <Card changeImage={this.changeImage} id={"10054-anillo-vampyro.png"}></Card>
                <Card changeImage={this.changeImage} id={"10054-anillo-vampyro.png"}></Card>
                <Card changeImage={this.changeImage} id={"10054-anillo-vampyro.png"}></Card>
            </div>
        )
    }
}

export default GeneralCatalogo;