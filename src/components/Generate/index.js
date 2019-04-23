import React, { Component } from 'react';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";
import "moment/locale/it";
import QRCode from'qrcode-react';
import { Header, Input, Form, Button } from 'semantic-ui-react'

const INITIAL_STATE = {
    startDate: undefined,
    endDate: undefined,
    uniqueID: '',
    error: null,
  };

  export default class GenerateQRCode extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
      this.onStartChange = this.onStartChange.bind(this);
      this.onEndChange = this.onEndChange.bind(this);
    }
  
    onSubmit = event => {
      console.log(this.uniqueID)
      console.log(this.state.startDate)
      console.log(this.state.endDate)
    };
  
    onStartChange = (startDate) => {
      this.setState({startDate});
    };

    onEndChange = (endDate) => {
      this.setState({endDate});
    };
  
    render() {
      this.uniqueID = '1234567890123456789012345678901234567890'
      const { startDate, endDate, error } = this.state;
      const isInvalid = startDate === null || endDate === null;
      
      return (
    <div>
    <Header as='h1' textAlign='center'>Generate QR Code</Header>
      <Form onSubmit={this.onSubmit}>
      <Form.Field>
        <label>Title of event</label>
        <Input/>
        </Form.Field>
        <Form.Field>
        <label>Select Event Dates</label>
        <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={`${formatDate(new Date())}`}
              value={startDate}
              onDayChange={this.onStartChange}
            />
        </Form.Field>
        <Form.Field>
        <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date())}`}
                value = {endDate}
                onDayChange={this.onEndChange}
              />
        </Form.Field>
        <Button fluid disabled={isInvalid} type="submit">
          Move to Payment
        </Button>
        {error && <p>{error.message}</p>}
      </Form>
      <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify({
              uniqueID: this.uniqueID,
              startDate: startDate,
              endDate: endDate
              })}
             />
      </div>
);
}}