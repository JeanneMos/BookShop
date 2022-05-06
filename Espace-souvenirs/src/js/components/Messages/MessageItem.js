import React, {useMemo, useState, useRef, useEffect} from 'react';
import classNames from "classnames";
import Button from "../Button/Button";
import ButtonWrapper from "../../layouts/ButtonsWrapper"
import {dateFormat, textWithBreaks} from "../../services/formatting";
import { useSelector, useDispatch } from 'react-redux';

import { messageUnpublished, messagePublished } from '../../context/messageSlice';
import MailTo from '../MailTo/MailTo';
import Switch from '../Switch/Switch';
/* import "../../../scss/helpers.scss" */
import ButtonsWrapper from '../../layouts/ButtonsWrapper';

const MessageItem = React.memo(function MessageItem({message: 
  {body, author, dateTime, picture, email, id, published}
}) {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [showFullMessage, setShowFullMessage] = useState(false);
  const [isPublished, setIsPublished] = useState(published);

  const messageBody = useRef(null);
  const messageWrapper = useRef(null);

  const formattedDate = useMemo(() => {if (dateTime) return dateFormat(new Date(dateTime))}, [dateTime]);

  const showText = () => {
    setShowFullMessage(true);
  }

  const subject = `Merci pour votre message en hommage à ${userState?.defunt?.firstName} ${userState?.defunt?.lastName}`

  const handleSwitch = (message) => {
    setIsPublished(!isPublished)
    if(isPublished){
      dispatch(messageUnpublished({id:message}))
    }
    else {
      dispatch(messagePublished({id:message}))
    }
  }
  
  useEffect(() => {
    if(messageBody.current && messageWrapper.current) {
      if (messageBody.current.clientHeight > messageWrapper.current.clientHeight) {
        setShowFullMessage(false)
      } else {
        setShowFullMessage(true)
      }
    }
  },[]) 

  return (
    <li className={classNames('message-item', {
      'message-item-long': picture,
    })}
    key={id}>
      
      {picture && (
        <div className='message-item-image-wrapper'>
          <img alt="" className='message-item-image' src={picture}/>
        </div> )
      }
      <div className={classNames('message-author', {
        'mt-40': !picture,
        'mt-20': picture
      })}>
        <p>Ecrit par {author}</p>
        <p>{formattedDate}</p>
      </div>
      <div ref={messageWrapper} className={classNames('message-body',{
        "open" : showFullMessage
      })}>
        <p ref={messageBody}>{textWithBreaks(body)}</p>
      </div>
      {!showFullMessage && (<ButtonWrapper>
        <Button type="button" onClickAction={showText} btnClass='bg-transparent' >Lire la suite
          <span className="sr-only">du message envoyé par {author}</span></Button>
      </ButtonWrapper>)}

      {userState?.isAdmin && 
        <ButtonsWrapper position="space-between">
          <Switch handleSwitch={handleSwitch} messageId={id} isChecked={isPublished}/>
          <MailTo email={email} subject={subject}/>
        </ButtonsWrapper>
      }
    </li>
  )
})
export default MessageItem;