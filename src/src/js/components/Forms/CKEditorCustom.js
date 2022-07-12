import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

import { decoded } from "../../services/formatting";

export default function CKEditorCustom({
  value,
  id,
  name,
  onInputChange,
  editorRef,
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
            toolbar: [
              "bold",
              "italic",
              "underline",
              "fontColor",
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
