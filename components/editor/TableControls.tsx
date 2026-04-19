"use client";

import type { Editor } from "@tiptap/react";

type TableControlsProps = {
  editor: Editor;
};

export function TableControls({ editor }: TableControlsProps) {
  if (!editor.isActive("table")) {
    return null;
  }

  return (
    <div className="wp-editor-toolbar wp-table-toolbar">
      <button type="button" onClick={() => editor.chain().focus().addRowBefore().run()}>
        Add Row Above
      </button>
      <button type="button" onClick={() => editor.chain().focus().addRowAfter().run()}>
        Add Row Below
      </button>
      <button type="button" onClick={() => editor.chain().focus().deleteRow().run()}>
        Delete Row
      </button>
      <button type="button" onClick={() => editor.chain().focus().addColumnBefore().run()}>
        Add Col Left
      </button>
      <button type="button" onClick={() => editor.chain().focus().addColumnAfter().run()}>
        Add Col Right
      </button>
      <button type="button" onClick={() => editor.chain().focus().deleteColumn().run()}>
        Delete Col
      </button>
      <button type="button" onClick={() => editor.chain().focus().deleteTable().run()}>
        Delete Table
      </button>
    </div>
  );
}
