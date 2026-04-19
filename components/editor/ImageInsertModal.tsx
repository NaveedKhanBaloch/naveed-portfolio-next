"use client";

import { useState } from "react";

type ImageInsertModalProps = {
  onClose: () => void;
  onInsert: (payload: { url: string; alt: string }) => void;
  onUpload: (file: File) => Promise<string | null>;
};

export function ImageInsertModal({ onClose, onInsert, onUpload }: ImageInsertModalProps) {
  const [tab, setTab] = useState<"upload" | "url">("upload");
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");

  async function handleUpload(file: File) {
    setStatus("Uploading image...");
    const uploadedUrl = await onUpload(file);
    if (!uploadedUrl) {
      setStatus("Upload failed.");
      return;
    }
    onInsert({ url: uploadedUrl, alt });
    onClose();
  }

  return (
    <div className="editor-modal-backdrop" role="dialog" aria-modal="true">
      <div className="editor-modal">
        <div className="editor-modal-header">
          <h3>Insert image</h3>
          <button type="button" className="button button-secondary" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="editor-modal-tabs">
          <button type="button" className={`editor-modal-tab ${tab === "upload" ? "active" : ""}`} onClick={() => setTab("upload")}>
            Upload
          </button>
          <button type="button" className={`editor-modal-tab ${tab === "url" ? "active" : ""}`} onClick={() => setTab("url")}>
            URL
          </button>
        </div>

        <div className="editor-modal-body">
          <label className="field">
            <span>Alt text</span>
            <input value={alt} onChange={(event) => setAlt(event.target.value)} placeholder="Describe the image" />
          </label>

          {tab === "upload" ? (
            <label className="upload-panel">
              <div>
                <strong>Upload an image</strong>
                <p>Select an image file and it will be uploaded to Vercel Blob.</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    void handleUpload(file);
                  }
                }}
              />
            </label>
          ) : (
            <div className="editor-modal-stack">
              <label className="field">
                <span>Image URL</span>
                <input value={url} onChange={(event) => setUrl(event.target.value)} placeholder="https://example.com/image.jpg" />
              </label>
              <button
                type="button"
                className="button button-primary"
                onClick={() => {
                  if (!url.trim()) {
                    setStatus("Please add an image URL.");
                    return;
                  }
                  onInsert({ url: url.trim(), alt });
                  onClose();
                }}
              >
                Insert image
              </button>
            </div>
          )}
          {status ? <p className="form-status">{status}</p> : null}
        </div>
      </div>
    </div>
  );
}
