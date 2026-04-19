"use client";

import { useEffect, useMemo, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import { common, createLowlight } from "lowlight";
import { HtmlView } from "@/components/editor/HtmlView";
import { ImageInsertModal } from "@/components/editor/ImageInsertModal";
import { TableControls } from "@/components/editor/TableControls";
import { Toolbar } from "@/components/editor/Toolbar";

type BlogEditorProps = {
  content: string;
  onChange: (content: string) => void;
  onUpload: (file: File) => Promise<string | null>;
};

const lowlight = createLowlight(common);

export function BlogEditor({ content, onChange, onUpload }: BlogEditorProps) {
  const [mode, setMode] = useState<"visual" | "text">("visual");
  const [htmlDraft, setHtmlDraft] = useState(content);
  const [showImageModal, setShowImageModal] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false
      }),
      Underline,
      Link.configure({
        openOnClick: false
      }),
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      Table.configure({
        resizable: true
      }),
      TableRow,
      TableHeader,
      TableCell,
      CodeBlockLowlight.configure({
        lowlight
      }),
      CharacterCount,
      Placeholder.configure({
        placeholder: "Start writing your post..."
      }),
      Typography
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor: current }) => {
      const html = current.getHTML();
      setHtmlDraft(html);
      onChange(html);
    }
  });

  useEffect(() => {
    if (!editor) {
      return;
    }
    const currentHtml = editor.getHTML();
    if (content !== currentHtml) {
      editor.commands.setContent(content || "<p></p>", { emitUpdate: false });
      setHtmlDraft(content || "<p></p>");
    }
  }, [content, editor]);

  const stats = useMemo(() => {
    const text = editor?.getText() || "";
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    return { words, chars };
  }, [editor?.state]);

  return (
    <>
      <div className="wp-editor-actions">
        <button type="button" className="button button-secondary" onClick={() => setShowImageModal(true)}>
          Add Media
        </button>
      </div>

      <div className="wp-editor-shell">
        <div className="wp-editor-head">
          <div className="wp-editor-tabs">
            <button type="button" className={`wp-editor-tab ${mode === "visual" ? "active" : ""}`} onClick={() => setMode("visual")}>
              Visual
            </button>
            <button type="button" className={`wp-editor-tab ${mode === "text" ? "active" : ""}`} onClick={() => setMode("text")}>
              Text
            </button>
          </div>
        </div>

        {editor ? <Toolbar editor={editor} onOpenImageModal={() => setShowImageModal(true)} /> : null}
        {editor ? <TableControls editor={editor} /> : null}

        {mode === "visual" ? (
          <EditorContent editor={editor} className="tiptap-shell" />
        ) : (
          <HtmlView
            value={htmlDraft}
            onChange={(value) => {
              setHtmlDraft(value);
              onChange(value);
            }}
          />
        )}
      </div>

      <div className="editor-stats">
        <span>{wordsLabel(stats.words)}</span>
        <span>{stats.chars} characters</span>
      </div>

      {showImageModal ? (
        <ImageInsertModal
          onClose={() => setShowImageModal(false)}
          onUpload={onUpload}
          onInsert={({ url, alt }) => {
            editor?.chain().focus().setImage({ src: url, alt }).run();
          }}
        />
      ) : null}
    </>
  );
}

function wordsLabel(words: number) {
  return `${words} ${words === 1 ? "word" : "words"}`;
}
