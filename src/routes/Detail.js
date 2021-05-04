import React from 'react';
import './Detail.css';
import bg from '../img/bg1.png';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }
    
    render() {
        const { location } = this.props;
        if(location.state) {
            return ( 
                <div className="Detail__container" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover 100%" }} >
                    <div className="Detail">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                        <h1>{location.state.title}</h1>
                        <h2>{location.state.year}</h2>
                        <h3>{location.state.genres.map( (genre, index) => ( 
                                <li key={index} className="genres__genre">
                                    {genre}
                                </li> 
                            ))}
                        </h3>
                        <p>{location.state.summary}</p>
                    </div>
                </div>
            ); 
        } else {
            return null; 
        }
    }
}

export default Detail;
