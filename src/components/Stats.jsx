import React, { Component } from 'react';
import "./icons.css";

class Stats extends Component {
    constructor(props) {
        super(props);
        this.handleChangeAtribute = this.props.handleChangeState
    }
    render() {
        return (
            <div className="info-pj">
                <div className="principalCarac">
                    <div className="row">
                        <div className="container-fluid atributo col-4" id="levelPlayerBg">
                            <div className="value"> {"Nivel. " + this.props.lvlPJ}</div>
                        </div>
                        <div className="container-fluid atributo col-4 icono iconoPA" id="attrPA">
                            <div className="value"> {this.props.stats["PA"] + this.props.lvl100PA}</div>
                        </div>
                        <div className="container-fluid atributo col-4 icono iconoPM" id="attrPM">
                            <div className="value"> {this.props.stats["PM"]}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container-fluid atributo col-4 icono iconoAl" id="attrAl">
                            <div className="value"> {this.props.stats["Al"]}</div>
                        </div>
                        <div className="container-fluid atributo col-4 icono iconoinvocaciones" id="attrinvocaciones">
                            <div className="value"> {this.props.stats["invocaciones"]}</div>
                        </div>
                        <div className="container-fluid atributo col-4 icono iconopotencia" id="attrpotencia">
                            <div className="value"> {this.props.stats["potencia"]}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container-fluid atributo col-4 icono iconoiniciativa" id="attriniciativa">
                            <div className="value"> {this.props.stats["iniciativa"]}</div>
                        </div>
                        <div className="container-fluid atributo col-4 icono iconoprospección" id="attrprospección">
                            <div className="value"> {this.props.stats["prospección"]}</div>
                        </div>
                        <div className="container-fluid atributo col-4 icono iconocriticos" id="attrcriticos">
                            <div className="value"> {this.props.stats["criticos"]}</div>
                        </div>
                    </div>
                </div>
                <div className="division caracteristicasPri my-3">Características primarias</div>
                <div className="tableAtributos">
                    <div className="row">
                        <div className="blank col-2"></div>
                        <div className="labelCarac col-3">Total</div>
                        <div className="labelCarac col-3">Base</div>
                        <div className="labelCarac col-3">Scroll</div>
                    </div>
                    <div className="row">
                        <span className="icono iconovitalidad col-2"></span>
                        <div className="value col-3" id="vitalidadTotal">{this.props.stats.vitalidad}</div>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="vitalidadBase" onChange={(event) => this.handleChangeAtribute(true, "vitalidad", event)}></input>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="vitalidadEquipo"></input>
                    </div>
                    <div className="row">
                        <span className="icono iconosabiduria col-2"></span>
                        <div className="value col-3" id="sabiduriaTotal">{this.props.stats.sabiduria}</div>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo " id="sabiduriaBase"></input>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="sabiduriaEquipo"></input>
                    </div>
                    <div className="row">
                        <span className="icono iconofuerza col-2"></span>
                        <div className="value col-3" id="fuerzaTotal">{this.props.stats.fuerza}</div>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="fuerzaBase"></input>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="fuerzaEquipo"></input>
                    </div>
                    <div className="row">
                        <span className="icono iconointeligencia col-2"></span>
                        <div className="value col-3" id="inteligenciaTotal">{this.props.stats.inteligencia}</div>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="inteligenciaBase"></input>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="inteligenciaEquipo"></input>
                    </div>
                    <div className="row">
                        <span className="icono iconosuerte col-2"></span>
                        <div className="value col-3" id="suerteTotal">{this.props.stats.suerte}</div>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="suerteBase"></input>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="suerteEquipo"></input>
                    </div>
                    <div className="row">
                        <span className="icono iconoagilidad col-2"></span>
                        <div className="value col-3" id="agilidadTotal">{this.props.stats.agilidad}</div>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="agilidadBase"></input>
                        <input type="number" placeholder="0" min="0" className="col-3 inputAtributo" id="agilidadEquipo"></input>
                    </div>
                </div>
                <div className="division my-3">Características secundarias</div>
                <div className="my-1">
                    Daños
                </div>
                <div className="row">
                    <div className="container-fluid atributo col-3 icono iconofuerza">
                        <div className="value"> {this.props.stats["daños_de_tierra"]}</div>
                    </div>
                    <div className="container-fluid atributo col-3 icono iconointeligencia">
                        <div className="value"> {this.props.stats["daños_de_fuego"]}</div>
                    </div>
                    <div className="container-fluid atributo col-3 icono iconosuerte">
                        <div className="value"> {this.props.stats["daños_de_agua"]}</div>
                    </div>
                    <div className="container-fluid atributo col-3 icono iconoagilidad">
                        <div className="value"> {this.props.stats["daños_de_aire"]}</div>
                    </div>
                </div>
                <div className="my-1">
                    Resistencias fijas
                </div>
                <div className="row">
                    <div className="container-fluid atributo col-3 icono iconofuerza">
                        <div className="value"> {this.props.stats["daños_de_tierra"]}</div>
                    </div>
                    <div className="container-fluid atributo col-3 icono iconointeligencia">
                        <div className="value"> {this.props.stats["daños_de_fuego"]}</div>
                    </div>
                    <div className="container-fluid atributo col-3 icono iconosuerte">
                        <div className="value"> {this.props.stats["daños_de_agua"]}</div>
                    </div>
                    <div className="container-fluid atributo col-3 icono iconoagilidad">
                        <div className="value"> {this.props.stats["daños_de_aire"]}</div>
                    </div>
                </div>
                <div className="my-1">
                    Resistencias porcentuales
                </div>
                <div className="row">
                    <div className="container-fluid atributo col-3 icono iconofuerza">
                        <div className="value"> {this.props.stats["daños_de_tierra"]}</div>
                    </div>
                    <div className="container-fluid atributo col-3 icono iconointeligencia">
                        <div className="value"> {this.props.stats["daños_de_fuego"]}</div>
                    </div>
                    <div className="container-fluid atributo col-3 icono iconosuerte">
                        <div className="value"> {this.props.stats["daños_de_agua"]}</div>
                    </div>
                    <div className="container-fluid atributo col-3 icono iconoagilidad">
                        <div className="value"> {this.props.stats["daños_de_aire"]}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats;