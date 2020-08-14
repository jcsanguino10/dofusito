import React, { Component } from 'react';
import { storage } from "../configFirebase";

class Card extends Component {
    constructor(props) {
        super(props);
        this.changeImage = this.props.changeImage
        this.id = this.props.id
        this.state = {
            imagen: ""
        }
    }

    UNSAFE_componentWillMount() {
        storage.child("imagenesSets/" + this.id).getDownloadURL().then((value) => {
            this.setState({
                imagen: value
            });
        })
    }
    render() {
        return (
            <div className="itemCardInfo col-lg-3 m-1">
                <div className="header-card row">
                    <div className="card-principal-info col-7">
                        <div className="card-name-item">
                            holaa
                    </div>
                    </div>
                    <div className="card-img-top col-5" style={{ backgroundImage: `url(${this.state.imagen})` }}></div>
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}

export default Card;