"use client";

import type { Editor } from "@tiptap/react";

type ToolbarProps = {
  editor: Editor;
  onOpenImageModal: () => void;
};

export function Toolbar({ editor, onOpenImageModal }: ToolbarProps) {
  function setLink() {
    const previousUrl = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter link URL", previousUrl || "https://");

    if (url === null) {
      return;
    }

    if (!url) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  return (
    <div className="wp-editor-toolbar">
      <select
        defaultValue="paragraph"
        onChange={(event) => {
          const value = event.target.value;
          if (value === "paragraph") {
            editor.chain().focus().setParagraph().run();
            return;
          }
          editor.chain().focus().toggleHeading({ level: Number(value) as 1 | 2 | 3 | 4 }).run();
        }}
      >
        <option value="paragraph">Paragraph</option>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
      </select>
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>
        <strong>B</strong>
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>
        <em>I</em>
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <span className="toolbar-underline">U</span>
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()}>
        <span className="toolbar-strike">S</span>
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>
        Bullets
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        Numbers
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        Quote
      </button>
      <button type="button" onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        Left
      </button>
      <button type="button" onClick={() => editor.chain().focus().setTextAlign("center").run()}>
        Center
      </button>
      <button type="button" onClick={() => editor.chain().focus().setTextAlign("right").run()}>
        Right
      </button>
      <button type="button" onClick={() => editor.chain().focus().setTextAlign("justify").run()}>
        Justify
      </button>
      <button type="button" onClick={setLink}>
        Link
      </button>
      <button type="button" onClick={onOpenImageModal}>
        Image
      </button>
      <button type="button" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
        Table
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        Code
      </button>
      <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        HR
      </button>
      <button type="button" onClick={() => editor.chain().focus().undo().run()}>
        Undo
      </button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()}>
        Redo
      </button>
    </div>
  );
}
