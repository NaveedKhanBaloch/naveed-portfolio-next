"use client";

import { useState } from "react";
import type { PortfolioContent, Project, ExperienceItem, Service } from "@/lib/types";

type AdminDashboardProps = {
  initialContent: PortfolioContent;
  storageMode: string;
};

function updateArrayItem<T>(items: T[], index: number, nextValue: T) {
  return items.map((item, currentIndex) => (currentIndex === index ? nextValue : item));
}

export function AdminDashboard({
  initialContent,
  storageMode
}: AdminDashboardProps) {
  const [content, setContent] = useState<PortfolioContent>(initialContent);
  const [status, setStatus] = useState("");

  async function saveContent() {
    setStatus("Saving site content...");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    });

    const data = (await response.json()) as { message?: string; error?: string };
    setStatus(data.message || data.error || "Finished.");
  }

  function updateProject(index: number, nextProject: Project) {
    setContent((current) => ({
      ...current,
      projects: updateArrayItem(current.projects, index, nextProject)
    }));
  }

  function updateExperience(index: number, nextExperience: ExperienceItem) {
    setContent((current) => ({
      ...current,
      experience: updateArrayItem(current.experience, index, nextExperience)
    }));
  }

  function updateService(index: number, nextService: Service) {
    setContent((current) => ({
      ...current,
      services: updateArrayItem(current.services, index, nextService)
    }));
  }

  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <div>
          <p className="eyebrow">Admin dashboard</p>
          <h1>Manage portfolio content</h1>
        </div>
        <form action="/api/auth/logout" method="post">
          <button className="button button-secondary" type="submit">
            Sign out
          </button>
        </form>
      </div>

      <div className="notice-grid">
        <div className="notice-card">
          <strong>Storage mode</strong>
          <span>{storageMode}</span>
        </div>
      </div>

      {status ? <p className="form-status">{status}</p> : null}

      <section className="admin-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Site content</p>
            <h2>Homepage and section editing</h2>
          </div>
          <button className="button button-primary" type="button" onClick={saveContent}>
            Save site content
          </button>
        </div>

        <div className="admin-grid">
          <label className="field">
            <span>Name</span>
            <input
              value={content.hero.name}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  hero: { ...current.hero, name: event.target.value }
                }))
              }
            />
          </label>
          <label className="field">
            <span>Hero title</span>
            <input
              value={content.hero.title}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  hero: { ...current.hero, title: event.target.value }
                }))
              }
            />
          </label>
          <label className="field field-full">
            <span>Hero subtitle</span>
            <textarea
              value={content.hero.subtitle}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  hero: { ...current.hero, subtitle: event.target.value }
                }))
              }
            />
          </label>
          <label className="field field-full">
            <span>Hero summary</span>
            <textarea
              rows={4}
              value={content.hero.summary}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  hero: { ...current.hero, summary: event.target.value }
                }))
              }
            />
          </label>
          <label className="field">
            <span>Email</span>
            <input
              value={content.contact.email}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  contact: { ...current.contact, email: event.target.value }
                }))
              }
            />
          </label>
          <label className="field">
            <span>Phone</span>
            <input
              value={content.contact.phone}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  contact: { ...current.contact, phone: event.target.value }
                }))
              }
            />
          </label>
          <label className="field field-full">
            <span>About headline</span>
            <input
              value={content.about.headline}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  about: { ...current.about, headline: event.target.value }
                }))
              }
            />
          </label>
          <label className="field field-full">
            <span>About summary</span>
            <textarea
              rows={5}
              value={content.about.summary}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  about: { ...current.about, summary: event.target.value }
                }))
              }
            />
          </label>
        </div>

        <div className="repeaters">
          <div className="repeater-card">
            <h3>Services</h3>
            {content.services.map((service, index) => (
              <div className="repeater-item" key={`${service.title}-${index}`}>
                <input
                  value={service.title}
                  onChange={(event) =>
                    updateService(index, {
                      ...service,
                      title: event.target.value
                    })
                  }
                  placeholder="Service title"
                />
                <textarea
                  rows={3}
                  value={service.description}
                  onChange={(event) =>
                    updateService(index, {
                      ...service,
                      description: event.target.value
                    })
                  }
                  placeholder="Service description"
                />
                <textarea
                  rows={3}
                  value={service.outcomes.join("\n")}
                  onChange={(event) =>
                    updateService(index, {
                      ...service,
                      outcomes: event.target.value.split("\n").filter(Boolean)
                    })
                  }
                  placeholder="One outcome per line"
                />
              </div>
            ))}
          </div>

          <div className="repeater-card">
            <h3>Projects</h3>
            {content.projects.map((project, index) => (
              <div className="repeater-item" key={`${project.slug}-${index}`}>
                <input
                  value={project.name}
                  onChange={(event) =>
                    updateProject(index, {
                      ...project,
                      name: event.target.value
                    })
                  }
                  placeholder="Project name"
                />
                <input
                  value={project.category}
                  onChange={(event) =>
                    updateProject(index, {
                      ...project,
                      category: event.target.value
                    })
                  }
                  placeholder="Category"
                />
                <textarea
                  rows={3}
                  value={project.description}
                  onChange={(event) =>
                    updateProject(index, {
                      ...project,
                      description: event.target.value
                    })
                  }
                  placeholder="Description"
                />
                <input
                  value={project.image}
                  onChange={(event) =>
                    updateProject(index, {
                      ...project,
                      image: event.target.value
                    })
                  }
                  placeholder="Image URL"
                />
              </div>
            ))}
          </div>

          <div className="repeater-card">
            <h3>Experience</h3>
            {content.experience.map((item, index) => (
              <div className="repeater-item" key={`${item.role}-${index}`}>
                <input
                  value={item.role}
                  onChange={(event) =>
                    updateExperience(index, {
                      ...item,
                      role: event.target.value
                    })
                  }
                  placeholder="Role"
                />
                <input
                  value={item.organization}
                  onChange={(event) =>
                    updateExperience(index, {
                      ...item,
                      organization: event.target.value
                    })
                  }
                  placeholder="Organization"
                />
                <input
                  value={item.period}
                  onChange={(event) =>
                    updateExperience(index, {
                      ...item,
                      period: event.target.value
                    })
                  }
                  placeholder="Period"
                />
                <textarea
                  rows={3}
                  value={item.description}
                  onChange={(event) =>
                    updateExperience(index, {
                      ...item,
                      description: event.target.value
                    })
                  }
                  placeholder="Description"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
