import { decode } from "html-entities";
import React from "react";

import { lineBreak } from "../constants";

export const dateFormat = (date) => {
  return `le ${date.toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;
};

export const hoursFormat = (date) => {
  return date.toLocaleString("fr-FR", {
    hour: "numeric",
    minute: "numeric",
  });
};

export const dateHoursFormat = (date) => {
  const hours = date.toLocaleString("fr-FR", {
    hour: "numeric",
    minute: "numeric",
  });
  const formattedHours = hours.replace(/:/i, "h");

  return `le ${date.toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} à ${formattedHours}`;
};

export const timeStampToDate = (date) => {
  if (date) {
    return new Date(+date * 1000);
  }
  return new Date();
};

export const getFullYear = (fullDate) => {
  const date = new Date(fullDate);
  if (!Number.isNaN(date.getFullYear())) return date.getFullYear();
  return null;
};

export const isEmptyArray = (array) => {
  return Array.isArray(array) && array.length === 0;
};

export const slicedArray = (array, begin, end) => {
  return array.slice(begin, end);
};

export const civilities = {
  female: "Mme",
  male: "M.",
};
export const decoded = decode;

export const capitalisedName = (name) => {
  return name.replace(/^\w/, (c) => c.toUpperCase());
};

export const textWithBreaks = (text) => {
  if (typeof text === "string") {
    const separators = /<br \/>|<br\/>|<br>|\n|\r\n/;
    return text.split(separators).map(function (item, index) {
      if (
        item !== lineBreak &&
        item !== "" &&
        item !== "\n" &&
        item !== "\r\n"
      ) {
        return (
          <span key={index}>
            {item}
            <br />
          </span>
        );
      }
      return null;
    });
  }
  return text;
};
