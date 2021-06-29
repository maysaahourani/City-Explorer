import React, { Component } from 'react'
import { Form, Button, Image } from 'react-bootstrap'
import Apifailed from './Apifailed';
import axios from 'axios'
export class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            latitude: "",
            longitude: "",
            display: false,
            erorrs: "",
            alert: false,
            masseg: ""
        }

    }
    ghngeHandlerSubmit = (e) => {
        console.log(e.target.value)
        this.setState({
            displayName: e.target.value

        });
        console.log(e.target.value)

    }

    submitData = async (e) => {
        e.preventDefault();
        try {
            let axiosResponse = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.c29ec7745248a3f12771c0a5c3f3fd9e&q=${this.state.displayName}&format=json`)
            this.setState({
                displayName: axiosResponse.data[0].display_name,
                longitude: axiosResponse.data[0].lon,
                latitude: axiosResponse.data[0].lat,
                display: true,
                alert: false


            })
            console.log(this.state.longitude)
            console.log(this.state.latitude)

        }
        catch (masseg) {
            this.setState({
                masseg: 'enter valid',
                alert: true
            })

            // console.log(this.setState.longitude)
            // console.log(this.setState.latitude)


        }

    }

    render() {
        return (
            <>
                <Apifailed alert={this.state.alert} masseg={this.state.masseg} />
                <Form onSubmit={this.submitData}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> City Name </Form.Label>
                        <Form.Control type="text" placeholder="City Name" onChange={(e) => { this.ghngeHandlerSubmit(e) }} size={'sm'}
                        />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>
{this.state.display &&
                <div>
                    <p>
                        {this.state.displayName}
                        {this.state.latitude}
                        {this.state.longitude}
                    </p>
                    <Image alt="" src={`https://maps.locationiq.com/v3/staticmap?key=pk.c29ec7745248a3f12771c0a5c3f3fd9e&center=${this.state.latitude},${this.state.longitude}&zoom=10`} rounded />

                    <span>
                    </span>

                </div>
                }
            </>
        )
    }
}

export default Forms