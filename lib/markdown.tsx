import type { ReactNode } from "react";

function renderParagraph(text: string, key: string) {
  return (
    <p key={key} className="md-paragraph">
      {text}
    </p>
  );
}

function renderImage(line: string, key: string) {
  const match = line.match(/^!\[(.*?)\]\((.*?)\)$/);
  if (!match) {
    return null;
  }

  const [, alt, src] = match;
  return (
    <figure key={key} className="md-figure">
      <img className="md-image" src={src} alt={alt || "Blog image"} />
      {alt ? <figcaption className="md-caption">{alt}</figcaption> : null}
    </figure>
  );
}

export function renderSimpleMarkdown(content: string): ReactNode[] {
  const lines = content.split("\n");
  const output: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) {
      return;
    }
    output.push(
      <ul key={`list-${output.length}`} className="md-list">
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    const image = renderImage(line, `img-${index}`);
    if (image) {
      output.push(image);
      return;
    }

    if (line.startsWith("# ")) {
      output.push(
        <h1 key={`h1-${index}`} className="md-h1">
          {line.slice(2)}
        </h1>
      );
      return;
    }

    if (line.startsWith("## ")) {
      output.push(
        <h2 key={`h2-${index}`} className="md-h2">
          {line.slice(3)}
        </h2>
      );
      return;
    }

    if (line.startsWith("### ")) {
      output.push(
        <h3 key={`h3-${index}`} className="md-h3">
          {line.slice(4)}
        </h3>
      );
      return;
    }

    output.push(renderParagraph(line, `p-${index}`));
  });

  flushList();
  return output;
}

export function renderPostContent(content: string) {
  const trimmed = content.trim();
  const looksLikeHtml = /^<([a-z][\w-]*)(\s|>)/i.test(trimmed);

  if (looksLikeHtml) {
    return <div className="tiptap-content" dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return renderSimpleMarkdown(content);
}
