import React from 'react'
import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { validationRules } from '../../../utils/utils'

export const EventForm = () => {
  return (
    <Form>
      <Form.Item
        label="Event description"
        name="event"
        rules={ [validationRules.required()] }
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={ [validationRules.required()] }
      >
        <DatePicker/>
      </Form.Item>
      <Form.Item>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
        >
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="tom">Tom</Select.Option>
        </Select>
      </Form.Item>
      <Row justify={ 'end' }>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Event
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}