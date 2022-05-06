import React, {useState, useEffect, useRef} from 'react';
import MessagesList from '../Messages/MessagesList';

import Button from '../Button/Button';
import Icon from '../Icons/Icon';



const MessageForm = React.lazy(() => import(/* webpackChunkName: "MessageForm" */'../Forms/MessageForm'));

export default function Messages() {
  const [isEditing, setIsEditing] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const form = useRef();
  const messagesTitle = useRef();
  const handleOpenForm = () => {
    setIsEditing(true);
  }
  const handlCloseForm = ({messageSent}) => {

    setMessageSuccess(messageSent);
    setIsEditing(false);
  }
  useEffect(()=> {
    if(form.current) {
      form.current.scrollIntoView();
    }
    if (messagesTitle.current) {
      messagesTitle.current.scrollIntoView();
    }
  }, [isEditing])

  if (isEditing) {
    return <MessageForm closeForm={handlCloseForm} reference={form}/>
  }

  return (
    <>
      {messageSuccess && (<p className='messages-success'>
        <Icon name="check" iconClass='messages-success-icon'/>
        <span>Votre message a bien été ajouté</span>
      </p>)}
      <div className="heading-button-wrapper between">
        <h2 className="content-heading-2" ref={messagesTitle}>Messages</h2>
        <Button type="button" btnClass='bg-current' onClickAction={handleOpenForm}>
          <span className="button-text">Ecrire un message</span>
          <span className="separator">&nbsp;</span>
          <Icon name="next" iconClass="white-icon" />
        </Button>
      </div>
      <MessagesList />
    </>
  );
}
