import React, { Component } from 'react';
import '../components/cards.scss';

class CardsWithDownload extends Component {
    render() {
        return(
            <div className="col s12 m6 l4">
                <div className="card hoverable">
                     
                    <div className="card-image" style={{ backgroundColor: this.props.cardColor }}>
                      <img 
                        style={{
                          height: '175px', 
                          paddingTop: this.props.paddingTop || 0, 
                          paddingBottom: this.props.paddingBottom || 0, 
                          width: this.props.width || '100%', 
                          marginLeft: this.props.marginLeft || 0 
                        }} 
                        src={this.props.cardImage} 
                        alt={this.props.altText} 
                        responsive-img 
                        materialboxed
                      />
                      <a 
                        className="link-styles btn-floating halfway-fab waves-effect waves-light red" 
                        href={this.props.cardLink} 
                        target={this.props.target}
                        rel="noopener noreferrer"
                        download
                    >
                        <i className="material-icons">{this.props.icon}</i>
                    </a>                     
                    </div>
                    <div className="card-content">
                      <span className="card-title white-text center">
                        {this.props.cardTitle}
                      </span>
                      {this.props.cardContent ? <p className="center">{this.props.cardContent}</p> : <p></p>}
                    </div>                  
                </div>
              </div>
        );
    }
}

export default CardsWithDownload;