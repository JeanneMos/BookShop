import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

import { decoded } from "../../services/formatting";
/* 
const siteColors = {
  pfg: {
    color:"#de6518",
    label: "orange"
  },
  roblot: {
    color:"#691731",
    label: "rose"
  },
  "dignite-funeraire": {
    color:"#0085a2",
    label: "bleu"
  },
  "marque-locale": {
    color:"#0b5d67",
    label: "vert"
  },
  "henri-de-borniol": {
    color:"#0e342e",
    label: "vert"
  },
} */

export default function CKEditorCustom({
  value,
  id,
  name,
  onInputChange,
  editorRef,
  /* siteBrand */
}) {
  return (
    <>
      <div ref={editorRef} className="document-editor">
        <CKEditor
          editor={DecoupledEditor}
          data={value}
          name={name}
          id={id}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            editorRef?.current?.prepend(editor.ui.view.toolbar.element);
          }}
          config={{
            /*             fontColor: {
              colors: [
                {
                  color: "#151515",
                  label: "Noir"
                },
                siteColors[siteBrand]
              ]
            }, */
            toolbar: [
              "bold",
              "italic",
              "underline",
              /* "fontColor", */
              "|",
              "alignment",
            ],
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            const characters = decoded(data).replace(/<[^>]*>/g, "");
            onInputChange(data, characters);
          }}
        />
      </div>
    </>
  );
}
