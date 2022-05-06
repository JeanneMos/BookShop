import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import BiographyText from '../Biography/BiographyText';
import {biographyUpdated} from '../../context/biographySlice';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import Icon from '../Icons/Icon';
import ButtonsWrapper from '../../layouts/ButtonsWrapper';
import usePostQuery from '../../services/usePostQuery';
import {postApiUrl, bioMachineName} from "../../constants";



const BiographyForm = React.lazy(() => import(/* webpackChunkName: "BiographyForm" */'../Forms/BiographyForm'));

export default function Biography() {

  const userState = useSelector((state) => state.user);
  const biographyState = useSelector((state) => state.biography);
  const dispatch = useDispatch();
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [biographySuccess, setBiographySuccess] = useState(false);
  const deleteBiography = usePostQuery();
  const form = useRef();
  const messagesTitle = useRef();

  const handleOpenForm = () => {
    setIsEditing(true);
  }
  const handleDeleteBiography = async () => {
    const biography_obj = {
      field_value: {
        field_bio_story: "",
        field_bio_photo: null
      },
      field_machine_name: bioMachineName, 
      entity_id: params.espaceId
    }
    try {
      deleteBiography.mutate({data: biography_obj, postApiUrl }, {
        onSuccess: (data) => {
          const {field_bio_story, field_bio_custom } = JSON.parse(data?.data?.field_value)
          dispatch(biographyUpdated({biography: field_bio_story, isBiographyEdited: field_bio_custom}))
        },
        onError: (err) => console.error(err)
      })
    } catch {
      // Something went wrong
    }
  }

  const getBiographyAction = () => {
    if (biographyState?.isBiographyEdited && biographyState?.biography && userState?.isAdmin) {
      return  (
        <ButtonsWrapper btnWrapperClass="width-auto">
          <Button type="button" btnClass='bg-white' onClickAction={handleDeleteBiography}>
            <Icon name="corbeille" iconClass="current-icon" />
            <span className="separator">&nbsp;</span>
            <span className="button-text">Supprimer</span>
          </Button>
          <Button type="button" btnClass='bg-current' onClickAction={handleOpenForm}>
            <Icon name="pencil" iconClass="white-icon" />
            <span className="separator">&nbsp;</span>
            <span className="button-text">Modifier la biographie</span>
          </Button>
        </ButtonsWrapper>
      )
    }
    if (!biographyState?.isBiographyEdited && userState?.isAdmin ) {
      return (
        <Button type="button" btnClass='bg-current' onClickAction={handleOpenForm}>
          <span className="button-text">Écrire la biographie</span>
          <span className="separator">&nbsp;</span>
          <Icon name="next" iconClass="white-icon" />
        </Button>
      )
    }
    return null
   
  }

  const handlCloseForm = ({biographyUpdated}) => {
    setBiographySuccess(biographyUpdated);
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
    return <BiographyForm closeForm={handlCloseForm} reference={form}/>
  }

  return (
    <>
      {biographySuccess && (<p className='messages-success'>
        <Icon name="check" iconClass='messages-success-icon'/>
        <span>La biographie a bien été mise à jour.</span>
      </p>)}
      <div className="heading-button-wrapper between">
        <h2 className="content-heading-2" ref={messagesTitle}>Biographie</h2>
        {getBiographyAction()}
      </div>
      {biographyState?.biography && <BiographyText />}
    </>
  );
}
