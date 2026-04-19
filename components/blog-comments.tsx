"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import type { BlogComment } from "@/lib/types";

type BlogCommentsProps = {
  postSlug: string;
  initialComments: BlogComment[];
  allowComments: boolean;
};

const emptyForm = {
  name: "",
  email: "",
  website: "",
  message: ""
};

export function BlogComments({ postSlug, initialComments, allowComments }: BlogCommentsProps) {
  const [comments, setComments] = useState(initialComments);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("Submitting your comment...");

    const response = await fetch(`/api/blog/${postSlug}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = (await response.json()) as {
      comment?: BlogComment;
      comments?: BlogComment[];
      error?: string;
      message?: string;
    };

    if (!response.ok) {
      setStatus(data.error || "Unable to submit comment.");
      setSubmitting(false);
      return;
    }

    if (data.comments) {
      setComments(data.comments);
    } else if (data.comment && data.comment.status === "approved") {
      setComments((current) => [data.comment as BlogComment, ...current]);
    }

    setForm(emptyForm);
    setStatus(data.message || "Comment submitted.");
    setSubmitting(false);
  }

  return (
    <section className="comments-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Discussion</p>
          <h2>Comments</h2>
        </div>
      </div>

      {comments.length ? (
        <div className="comments-list">
          {comments.map((comment) => (
            <article key={comment.id} className="comment-card">
              <div className="comment-top">
                <div>
                  <strong>{comment.name}</strong>
                  <p>{new Date(comment.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                </div>
                {comment.website ? (
                  <a href={comment.website} target="_blank" rel="noreferrer" className="text-link">
                    Website
                  </a>
                ) : null}
              </div>
              <p>{comment.message}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="comment-empty">
          <strong>No comments yet</strong>
          <p>The first thoughtful response can start the discussion here.</p>
        </div>
      )}

      {allowComments ? (
        <form className="comment-form" onSubmit={submitComment}>
          <div className="admin-grid">
            <label className="field">
              <span>Name</span>
              <input
                required
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              />
            </label>
            <label className="field field-full">
              <span>Website</span>
              <input
                type="url"
                placeholder="https://"
                value={form.website}
                onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
              />
            </label>
            <label className="field field-full">
              <span>Comment</span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              />
            </label>
          </div>
          <div className="comment-form-footer">
            <p>Your comment will be reviewed before it appears publicly.</p>
            <button className="button button-primary" type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Post Comment"}
            </button>
          </div>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      ) : (
        <div className="comment-empty">
          <strong>Comments are currently closed</strong>
          <p>This article is published without reader replies enabled.</p>
        </div>
      )}
    </section>
  );
}
