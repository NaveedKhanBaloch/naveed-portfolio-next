"use client";

type HtmlViewProps = {
  value: string;
  onChange: (value: string) => void;
};

export function HtmlView({ value, onChange }: HtmlViewProps) {
  return (
    <textarea
      className="wp-editor-canvas is-text"
      rows={20}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Write or edit the raw HTML here..."
    />
  );
}
