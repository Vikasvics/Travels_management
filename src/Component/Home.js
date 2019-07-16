import React, { Component } from 'react';
import '../css/Home.css'
import logo from '../image/airlinelogo.png'
import hotel1 from '../image/hotel1.jpg'
import hotel2 from '../image/hotel2.webp'
import hotel3 from '../image/hotel3.jpeg'
import hotel4 from '../image/hotel3.jpg'
import hotel5 from '../image/hotel4.jpg'
import hotel6 from '../image/summer.jpg'
import hotel7 from '../image/hotel7.webp'
import hotel8 from '../image/hotel8.jpg'
import hotel9 from '../image/hotel9.webp'
import hirecar from '../image/hirecar.jpg'
import cruise from '../image/cruise.jpg'
import things from '../image/things.jpg'
import fly from '../image/fly.jpg'


class Home extends Component {
  render() {
    return (
      <div class="body">
        <div class="navbar">
          <span class="airlogo"><img src={logo} alt="golf" className="logoairline" />
          </span>
          <span class="item2">Travels Management</span>
          <span class="item3">Home
					</span>
          <span class="item4">Hotels
					</span>
          <span class="item4">Flights
					</span>
          <span class="item4">Destination
					</span>
        </div>
        <div className="container"><br /><br />
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
              <img src={hotel1} alt="golf" className="hotel1" />

            </div>

          </div>
          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <h3>Where</h3><br />
              <label ><b>Your Destination</b></label><br />
              <input type="text" placeholder="enter your destination" /><br />
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h3>When</h3><br />
              <div class="row">
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                  <label ><b>Check In</b></label><br />
                  <input type="Date" class="check" /><br />
                </div>
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                  <label ><b>Check Out</b></label><br />
                  <input type="Date" class="check" /><br />
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h3>Who</h3><br />
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <label ><b>Rooms</b></label><br />
                  <select>
                    <option value="volvo">Rooms</option>
                    <option value="saab">One</option>
                    <option value="opel">Two</option>
                    <option value="audi">Three</option>
                  </select>
                  <br />
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <label ><b>Adults</b></label><br />
                  <select>
                    <option value="volvo">Adults</option>
                    <option value="saab">One</option>
                    <option value="opel">Two</option>
                    <option value="audi">Three</option>
                  </select>
                  <br />
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <label ><b>Kids</b></label><br />
                  <select>
                    <option value="volvo">Kids</option>
                    <option value="volvo">One</option>
                    <option value="saab">Two</option>
                    <option value="opel">Three</option>
                    <option value="audi">Four</option>
                  </select>
                  <br />
                </div>
              </div>
            </div>
            <div class="col-sm-1 col-lg-1 col-md-1 col-xs-1">
              <button class="btn">Search</button>
            </div>
          </div><br /><br />
          <h2>Popular Destination</h2>
          <div class="row">

            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <img src={hotel2} alt="golf" className="hotel2" /><br />
              <h5>Sun City International Hotel</h5>
              Dubai      $1,567
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <img src={hotel3} alt="golf" className="hotel2" /><br />
              <h5>Hotel Royal Ascot</h5><br />
              Dubai      $.2,266
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <img src={hotel4} alt="golf" className="hotel2" /><br />
              <h5>Vinnca West Downs Heritage Resort</h5>
              Ooty      $4,837
          </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <img src={hotel5} alt="golf" className="hotel2" /><br />
              <h5>Piccadily Hotel New Delhi</h5>
              New Delhi      $4,500
          </div>
          </div><br /><br />
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <img src={hotel6} alt="golf" className="hotel3" />
            </div>
            <div class="col-sm-8col-lg-8 col-md-8 col-xs-8">
              <h1>Best places in summer vacation</h1>
              <p>Students are out of school, parents are ready for a break,
                the weather is begging you to spend time together outdoors — summer
                 vacations are the perfect time for family bonding. Spending time with
                  your friends and family is a huge reason why you should be taking
                   a summer vacation.
                   Summer time is a time for fun in the sun. Whether you prefer relaxing
                    a beach, hiking in the wilderness or any other outdoor activity,
                    summer vacations are the perfect time of the year to enjoy everything
                  the outdoors has to offer.</p>
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <div class="card"  >
                    <div class="card-body">
                      <img src={hotel7} alt="golf" className="hotel4" /><br />
                      <h6>Novotel Paris Est</h6><br />
                      <p>Paris(31)</p>
                      <button class="btn1">See All</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <div class="card"  >
                    <div class="card-body">
                      <img src={hotel8} alt="golf" className="hotel4" /><br />
                      <h6>Bulgari Hotel, London</h6>
                      <p>London(10)</p>
                      <button class="btn1">See All</button>
                    </div>
                  </div>

                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <div class="card"  >
                    <div class="card-body">
                      <img src={hotel9} alt="golf" className="hotel4" /><br />
                      <h6>HotelVillage Hotel Albert Court</h6>
                      <p>Singapore(47)</p>
                      <button class="btn1">See All</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br />
          <div class="row">
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <img src={hirecar} alt="golf" className="travel" /><br />
                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <h2>Hire Cars</h2>
                  <p>A car rental, hire car, or car hire agency is a company that
                    rents automobiles for short periods of time, generally ranging
               a few hours to a few weeks.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <img src={cruise} alt="golf" className="travel" /><br />

                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <h2>Cruise Deals</h2>
                  <p>A cruise ship is a passenger ship used for pleasure voyages when
                     voyage itself, the ship's amenities, and sometimes the different
                      destinations along the way (i.e., ports of call), form part of
              the passengers' experience</p>
                </div>
              </div>
            </div>
          </div><br /><br />
          <div class="row">
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <img src={things} alt="golf" className="travel" /><br />

                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <h2>Things To Do</h2>
                  <p>Things to Make and Do is the third album by the electronic/dance
                    duo Moloko, released in the UK by Echo Records in 2000. It was a
                    sonic departure for Moloko, with tracks less reliant on electronics
               and more on live musicians</p>
                </div>
              </div>


            </div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">

              <div class="row">
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <img src={fly} alt="golf" className="travel" /><br />

                </div>
                <div class="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                  <h2>Fly In Comfort</h2>
                  <p>First class is a travel class on some passenger airliners intended
                    to be more luxurious than business class, premium economy, and economy
              class.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          </div>
        </div>
        <footer>
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <img src={logo} alt="golf" className="logo" />
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <p>www.travels.com</p>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h6>@2019</h6>
            </div>
          </div>
        </footer>
      </div>


    );
  }
}

export default Home;