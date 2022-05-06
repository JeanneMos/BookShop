import React from "react";
import { lineBreak } from "../constants";
import { decode } from "html-entities";

export const dateFormat = (date) => {
  const hours = date.toLocaleString("fr-FR", {
    hour: "numeric",
    minute: "numeric",
  });
  const formattedHours = hours.replace(/:/i, "h");

  return `Le ${date.toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} à ${formattedHours}`;
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