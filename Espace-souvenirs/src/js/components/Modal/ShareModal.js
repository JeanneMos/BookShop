import React from 'react'

import ModalTitle from './ModalTitle';
import ShareDirectLink from '../DefuntInfo/ShareDirectLink';
import ShareSocialMedias from '../DefuntInfo/ShareSocialMedias';

export default function ShareModal() {
  return (
    <>
      <ModalTitle>Partager l’espace à vos proches</ModalTitle>
      <ShareDirectLink />
      <ShareSocialMedias />
    </>
  )
}
