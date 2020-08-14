import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Anillo1Default from '../images/anillo1Default.png';
import Anillo2Default from '../images/anillo2Default.png';
import AmuletoDefault from '../images/amuletoDefault.png';
import EscudoDefault from '../images/escudoDefault.png';
import CinturonDefault from '../images/cinturonDefault.png';
import CapaDefault from '../images/capaDefault.png';
import SombreroDefault from '../images/sombreroDefault.png';
import BotasDefault from '../images/botasDefault.png';
import ArmaDefault from '../images/armaDefault.png';
import MonturaDefault from '../images/monturaDefault.png';
import TrofeoDefault from '../images/trofeoDefault.png';

class itemsPersonaje extends Component {
    constructor(props) {
        super(props)
        this.handleChangeStats = this.props.handleChangeStats
        this.state = {
            anillo1: Anillo1Default,
            anillo2: Anillo2Default,
            amuleto: AmuletoDefault,
            cinturon: CinturonDefault,
            sombrero: SombreroDefault,
            capa: CapaDefault,
            escudo: EscudoDefault,
            botas: BotasDefault,
            arma: ArmaDefault,
            montura: MonturaDefault,
            trofeo1: TrofeoDefault,
            trofeo2: TrofeoDefault,
            trofeo3: TrofeoDefault,
            trofeo4: TrofeoDefault,
            trofeo5: TrofeoDefault,
            trofeo6: TrofeoDefault
        }
        this.changeImage = this.changeImage.bind(this);
    }

    changeImage(param, value) {
        this.setState({
            [param] : value
        })
    }

    render() {
        return (
            <div className="gridItems">
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Amuleto"}}} className="rounded border buttonItem" id="Amuleto" style={{ backgroundImage: `url(${this.state.amuleto})` }} />
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Anillo1"}}} className="rounded border buttonItem" id="Anillo1" style={{ backgroundImage: `url(${this.state.anillo1})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Anillo2"}}} className="rounded border buttonItem" id="Anillo2" style={{ backgroundImage: `url(${this.state.anillo2})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Arma"}}} className="rounded border buttonItem" id="Arma" style={{ backgroundImage: `url(${this.state.arma})` }}/>
                <div className="personaje">
                    <div className="imgLevel row mb-3">
                        <div className="col-6"> Nivel </div>
                        <div className="col-5 wrapperInput">
                            <input type="number" max="200" value={this.props.lvlPJ} onChange={(event) => this.handleChangeStats(false, "lvlPJ", event)} id="nivelPjta" />
                        </div>
                    </div>
                    <div className="labelImg">
                        <img src="./imagenGato.png" alt="Arma tu set" className="imgPlayer">
                        </img>
                    </div>
                </div>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Amuleto"}}} className="rounded border buttonItem itemTrofeo" id="Trofeo1" style={{ backgroundImage: `url(${this.state.trofeo1})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Escudo"}}} className="rounded border buttonItem break4" id="Escudo" style={{ backgroundImage: `url(${this.state.escudo})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Amuleto"}}} className="rounded border buttonItem itemTrofeo" id="Trofeo2" style={{ backgroundImage: `url(${this.state.trofeo2})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Amuleto"}}} className="rounded border buttonItem itemTrofeo" id="Trofeo3" style={{ backgroundImage: `url(${this.state.trofeo3})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Amuleto"}}} className="rounded border buttonItem itemTrofeo" id="Trofeo4" style={{ backgroundImage: `url(${this.state.trofeo4})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Botas"}}} className="rounded border buttonItem break4" id="Botas" style={{ backgroundImage: `url(${this.state.botas})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Amuleto"}}} className="rounded border buttonItem itemTrofeo" id="Trofeo5" style={{ backgroundImage: `url(${this.state.trofeo5})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Sombrero"}}} className="rounded border buttonItem" id="Sombrero" style={{ backgroundImage: `url(${this.state.sombrero})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Capa"}}} className="rounded border buttonItem" id="Capa" style={{ backgroundImage: `url(${this.state.capa})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Cinturon"}}} className="rounded border buttonItem" id="Cinturon" style={{ backgroundImage: `url(${this.state.cinturon})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Amuleto"}}} className="rounded border buttonItem" id="Montura" style={{ backgroundImage: `url(${this.state.montura})` }}/>
                <Link to={{pathname: "/seleccionEquipo", state: {tipo: "Amuleto"}}} className="rounded border buttonItem itemTrofeo" id="Trofeo6" style={{ backgroundImage: `url(${this.state.trofeo6})` }}/>
            </div>
        )
    }
}

export default itemsPersonaje;