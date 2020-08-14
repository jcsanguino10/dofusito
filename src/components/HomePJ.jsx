import React, { Component } from 'react';
import Stats from './Stats'
import ItemsPersonaje from './ItemsPersonaje';

class HomePJ extends Component {
    render() {
        return (
            <div className="container-fluid removeMP col-12 mt-3 row">
                <div className="slideRight col-lg-4 col-sm-5 col-xl-3 pl-3">
                    <Stats key={"stats"} stats={this.props.estado.stats} lvlPJ={this.props.estado.lvlPJ} lvl100PA={this.props.estado.lvl100PA} handleChangeState={this.props.handleChangeState}></Stats>
                </div>
                <div className="setArea col-lg-7 col-sm-7 col-xl-6 mt-4">
                    <ItemsPersonaje key={"sets"} lvlPJ={this.props.estado.lvlPJ} handleChangeStats={this.props.handleChangeState}></ItemsPersonaje>
                </div>
                <div>
                    holaaa
                </div>
            </div>
        )
    }
}
export default HomePJ;