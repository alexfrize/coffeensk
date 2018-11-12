import React from "react";
// import { Link } from "react-router-dom";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from "lodash";
import "./contacts.component.scss";

export default class Contacts extends React.Component {
	
	constructor(props) {
		super(props);
		  this.state = {
		    markers: [{
		      position: {
		      	lat: 55.032624,
		      	lng: 82.935425
		      },
		      key: `CoffeeNsk`,
		      defaultAnimation: 2,
		    }],
		  };

	}

	render() {

		console.log("Contacts /");
		const GettingStartedGoogleMap = withGoogleMap(props => (
		  <GoogleMap
		    ref={props.onMapLoad}
		    defaultZoom={16}
		    defaultCenter={{ lat: 55.032624, lng: 82.935425 }}
		    defaultOptions={{
		        styles: [
				    {
				        "featureType": "administrative.locality",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "administrative.locality",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "visibility": "on"
				            }
				        ]
				    },
				    {
				        "featureType": "administrative.locality",
				        "elementType": "labels",
				        "stylers": [
				            {
				                "visibility": "on"
				            }
				        ]
				    },
				    {
				        "featureType": "administrative.locality",
				        "elementType": "labels.text.fill",
				        "stylers": [
				            {
				                "color": "#103828"
				            },
				            {
				                "visibility": "on"
				            }
				        ]
				    },
				    {
				        "featureType": "administrative.locality",
				        "elementType": "labels.text.stroke",
				        "stylers": [
				            {
				                "weight": "0.75"
				            }
				        ]
				    },
				    {
				        "featureType": "administrative.neighborhood",
				        "elementType": "all",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "visibility": "simplified"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape.man_made",
				        "elementType": "all",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "color": "#ffffff"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape.man_made",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "color": "#ffffff"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape.man_made",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "color": "#fdf8f2"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape.man_made",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "gamma": "1"
				            },
				            {
				                "lightness": "0"
				            },
				            {
				                "color": "#491404"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape.natural",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "color": "#fbf9ed"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape.natural.landcover",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "invert_lightness": true
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "visibility": "off"
				            },
				            {
				                "color": "#ffffff"
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "labels",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "labels.text",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "poi.business",
				        "elementType": "all",
				        "stylers": [
				            {
				                "visibility": "on"
				            }
				        ]
				    },
				    {
				        "featureType": "poi.park",
				        "elementType": "all",
				        "stylers": [
				            {
				                "color": "#d1e8bc"
				            },
				            {
				                "visibility": "on"
				            }
				        ]
				    },
				    {
				        "featureType": "road",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "lightness": 100
				            },
				            {
				                "visibility": "simplified"
				            },
				            {
				                "color": "#efe6dc"
				            }
				        ]
				    },
				    {
				        "featureType": "road",
				        "elementType": "labels",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "road",
				        "elementType": "labels.text",
				        "stylers": [
				            {
				                "visibility": "simplified"
				            },
				            {
				                "color": "#491404"
				            }
				        ]
				    },
				    {
				        "featureType": "road",
				        "elementType": "labels.icon",
				        "stylers": [
				            {
				                "visibility": "simplified"
				            }
				        ]
				    },
				    {
				        "featureType": "transit.line",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "lightness": 700
				            }
				        ]
				    },
				    {
				        "featureType": "water",
				        "elementType": "all",
				        "stylers": [
				            {
				                "color": "#c8e7ff"
				            }
				        ]
				    },
				    {
				        "featureType": "water",
				        "elementType": "labels",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    }
]
		    }}
		    onClick={props.onMapClick}
		  >
		    {props.markers.map((marker, index) => (
		      <Marker
		        {...marker}
		        options={{icon: "img/map-marker.png"}}
		        onRightClick={() => props.onMarkerRightClick(index)}
		      />
		    ))}
		  </GoogleMap>
		));
		return (
			<section className="contacts-and-map">
		
					<div className="container">
						<div className="row">
							<div className="contacts-and-map__title-container">
								<h2 className="contacts-and-map__title-container__title">
									Наши контакты
								</h2>
							</div>
						</div>
						<div className="row">
							<div className="contacts-and-map__contacts">
								<p className="main-text">
									630099, г. Новосибирск,<br />
									ул. Орджоникидзе,<br />
									д. 47 цоколь, офис 9.
								</p>
								<p className="main-text">	 
									<span className="main-text_bold">Время работы:</span><br />
									Пн-Пт: 10:00-18:00<br />
									Сб: по договоренности<br />
									Вс: выходной
								</p>
								<p className="main-text">
									тел: +7(383)-375-58-09<br />
									e-mail: info@coffeensk.com
								</p>
								{/* <div className="main-button-container">
									<Link to="/sendmessage"><button className="main-button">Оставить заявку</button></Link>
								</div>						 */}
							</div>


							<div className="contacts-and-map__map">
								   <div id="map">

								  <GettingStartedGoogleMap
								    containerElement={
								      <div style={{ height: `100%` }} />
								    }
								    mapElement={
								      <div style={{ height: `100%` }} />
								    }
								    markers={this.state.markers}
								    onMapClick={_.noop}
								    onMarkerRightClick={_.noop}
								  />

								   </div>
							</div>


						</div>
						<div className="row">
							<div className="contacts-and-map__title-container">
								<h2 className="contacts-and-map__title-container__title">
									О нашем сервис-центре
								</h2>
							</div>
						</div>				
						<div className="row">
							<div className="col-md-12">
								<p className="main-text">
									Наш сервисный центр является одним из ведущих сервисных центров в области ремонта и обслуживания кофемашин таких известных производителей как  Delonghi, Bosch, Saeco, Nivona, Mielita, Krups, Siemens, Gaggia, Solis, Jura, Spidem и др.,  а также по поставке комплектующих к ним на территории Новосибирской области. Услуги по диагностике и ремонту осуществляются с выезда инженера на место ремонта.
								</p>
								 <p className="main-text">
									Зачастую, причинами поломок кофемашин являются следующие факторы:
								</p>
								<ul className="main-text">
									<li>механические повреждения корпуса или трущихся деталей, например, попадания твердых загрязнений в кофемолку или неисправность заварного устройства;</li>
									<li>электрические неисправности платы управления или датчиков кофемашины, например, неисправность ТЭН или магнитного датчика закрытия крышки;</li>
									<li>всевозможные протечки шлангов и прокладок, которые могут рассохнуться или повредится, особенно, если вовремя не проводить декальцинацию кофемашины.</li>
								</ul>
								 <p className="main-text">
									Сервисное обслуживание, проводимое нашей компанией, призвано для того, чтобы вовремя проводить очистку от кофейных масел и декальцинацию кофемашины, тем самым снизив не только вероятность поломки, улучшить качество приготовляемых напитков, но даже  снизить энергопотребление.  
								</p>
								<p className="main-text">
									Проводя сервисное обслуживание, инженер нашей компании отслеживает состояние кофемашины и может предупредить поломки, чтобы ваше утро всегда начиналось с чашечки Вашего любимого кофе.
								</p>
							
							</div>
						</div>
					</div>

			</section>
		);
	}
}