import React, { useState } from 'react'
import { Button, Calendar, Modal, Row } from 'antd'
import { IEvent } from '../../../models/IEvent'
import { EventForm } from '../EventForm/EventForm'

interface IEventCalendarProps {
  events: IEvent[],
}

export const EventCalendar = ({}: IEventCalendarProps) => {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div>
      <Row justify="end">
        <Button
          type="primary"
          danger
          onClick={ () => setModalVisible(true) }
        >Add Event</Button>
      </Row>
      <Calendar/>
      <Modal
        title="New Event"
        footer={ null }
        visible={ modalVisible }
        onCancel={ () => setModalVisible(false) }
      >
        <EventForm/>
      </Modal>
    </div>
  )
}