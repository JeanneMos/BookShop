import React, { useState } from 'react'
import ButtonsWrapper from '../../layouts/ButtonsWrapper'
import Button from '../Button/Button'
import Icon from '../Icons/Icon'
import MessageItem from './MessageItem'
import { messagesPerPage } from '../../constants'
import { useSelector, useDispatch } from 'react-redux'
import { messagesViewed } from '../../context/messageSlice'
import { slicedArray } from '../../services/formatting'


export default function MessagesWithPagination({messages}) {
  const dispatch = useDispatch();
  const messagesState = useSelector(state => state.messages);
  const firstMessagesArray = messagesState.messagesViewed.length ? messagesState.messagesViewed : slicedArray(messages, 0, messagesPerPage);
  const [messagesList, setMessagesList] = useState(firstMessagesArray);

  const viewMoreMessages = () => {
    let begin = messagesList.length;
    let end = begin + messagesPerPage;
    const newMessagesArray = [...messagesList, ...slicedArray(messages,begin, end)];

    setMessagesList(newMessagesArray)
    dispatch(messagesViewed({messagesViewed: newMessagesArray}))
  }

  return (
    <div className='messages-wrapper'>
      <ul className='messages-list' data-testid="messagesList">
        {messagesList.map(message => {
          return <MessageItem key={message?.id} message={message} />
        })}
      </ul>
      <p className='messages-number-view'>
        <label htmlFor="messages-progress">Vous avez vu {messagesList.length} messages sur {messages.length}</label>

        <progress 
          id="messages-progress"
          className='messages-progress'
          max={messages.length}
          value={messagesList.length}>
        </progress>
      </p>
      {messages.length > messagesList.length &&
        (<ButtonsWrapper position="center" btnWrapperClass="mt-30">
          <Button type="button" btnClass='bg-white' onClickAction={viewMoreMessages}>
            <span className="button-text">voir plus de messages</span>
            <span className="separator">&nbsp;</span>
            <Icon name="next" iconClass="current-icon" />
          </Button>
        </ButtonsWrapper>)
      }
    </div>
  )
}
