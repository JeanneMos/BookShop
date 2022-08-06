import PropTypes from "prop-types";
import React from "react";

import Anneau from "../../../assets/svg/anneau.svg";
import Book from "../../../assets/svg/book.svg";
import Check from "../../../assets/svg/check.svg";
import Chevron from "../../../assets/svg/chevron.svg";
import Corbeille from "../../../assets/svg/corbeille.svg";
import Cross from "../../../assets/svg/cross.svg";
import CrossRed from "../../../assets/svg/cross-red.svg";
import Delete from "../../../assets/svg/delete.svg";
import Devis from "../../../assets/svg/devis.svg";
import EditPicture from "../../../assets/svg/edit-picture.svg";
import Envelope from "../../../assets/svg/envelope.svg";
import Geoloc from "../../../assets/svg/geoloc.svg";
import Itinerary from "../../../assets/svg/itinerary.svg";
import Link from "../../../assets/svg/link.svg";
import Loader from "../../../assets/svg/loader.svg";
import Logout from "../../../assets/svg/logout.svg";
import Medaille from "../../../assets/svg/medaille.svg";
import Next from "../../../assets/svg/next.svg";
import Pencil from "../../../assets/svg/pencil.svg";
import Photo from "../../../assets/svg/photo.svg";
import Picture from "../../../assets/svg/picture.svg";
import PicturePlaceholder from "../../../assets/svg/picture-placeholder.svg";
import Plus from "../../../assets/svg/plus.svg";
import Profile from "../../../assets/svg/profile.svg";
import Save from "../../../assets/svg/save.svg";
import Search from "../../../assets/svg/search.svg";
import Share from "../../../assets/svg/share.svg";
import ShareEmail from "../../../assets/svg/shareEmail.svg";
import Upload from "../../../assets/svg/upload.svg";
import User from "../../../assets/svg/user.svg";
import UserFill from "../../../assets/svg/user-fill.svg";
import Whatsapp from "../../../assets/svg/whatsapp.svg";

/* import './icon.scss'; */

const pickIcon = (name) => {
  switch (name) {
    case "anneau":
      return Anneau;
    case "user":
      return User;
    case "userfill":
      return UserFill;
    case "chevron":
      return Chevron;
    case "cross":
      return Cross;
    case "cross-red":
      return CrossRed;
    case "geoloc":
      return Geoloc;
    case "medaille":
      return Medaille;
    case "recherche":
      return Search;
    case "logout":
      return Logout;
    case "save":
      return Save;
    case "next":
      return Next;
    case "upload":
      return Upload;
    case "book":
      return Book;
    case "share":
      return Share;
    case "edit-picture":
      return EditPicture;
    case "envelope":
      return Envelope;
    case "photo":
      return Photo;
    case "plus":
      return Plus;
    case "itinerary":
      return Itinerary;
    case "corbeille":
      return Corbeille;
    case "profile":
      return Profile;
    case "check":
      return Check;
    case "pencil":
      return Pencil;
    case "picture":
      return Picture;
    case "link":
      return Link;
    case "loader":
      return Loader;
    case "devis":
      return Devis;
    case "delete":
      return Delete;
    case "picture-placeholder":
      return PicturePlaceholder;
    case "whatsapp":
      return Whatsapp;
    case "share-email":
      return ShareEmail;

    default:
      throw new Error(`no SVG for: ${name}`);
  }
};

/* pass the name & class props (that we will specify in our
other components) to Icon to pick the right icon */
export default function Icon({ name, iconClass = "icon" }) {
  const SVG = pickIcon(name);
  return (
    <SVG className={iconClass} />
    /*     <object type="image/svg+xml"
      height="20"
      width="20"
      data={SVG}
      className={iconClass}
    >
    </object> */
  );
}

Icon.defaultProps = {
  iconClass: "icon",
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
};
