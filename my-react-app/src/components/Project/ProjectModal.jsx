import React, { useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalSection,
  ModalTagRow,
  ModalTag,
  ModalLinkRow,
} from "./ProjectStyle";

const ProjectModal = ({ project, onClose }) => {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus?.();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const links = project?.links ?? {};

  return (
    <ModalOverlay onMouseDown={onClose} role="presentation">
      <ModalContainer
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} 상세보기`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <ModalTitle>{project.title}</ModalTitle>
          <ModalCloseButton
            type="button"
            onClick={onClose}
            aria-label="모달 닫기"
            ref={closeBtnRef}
          >
            <FaTimes />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          {project.image ? (
            <div className="hero-img">
              <img src={project.image} alt={project.title} />
            </div>
          ) : null}

          {project.description ? (
            <ModalSection>
              <h4>프로젝트 소개</h4>
              <p>{project.description}</p>
            </ModalSection>
          ) : null}

          {Array.isArray(project.tech) && project.tech.length > 0 ? (
            <ModalSection>
              <h4>기술 스택</h4>
              <ModalTagRow>
                {project.tech.map((t, i) => (
                  <ModalTag key={`${t}-${i}`}>#{t}</ModalTag>
                ))}
              </ModalTagRow>
            </ModalSection>
          ) : null}

          {project.role ? (
            <ModalSection>
              <h4>담당 역할</h4>
              <p>{project.role}</p>
            </ModalSection>
          ) : null}

          {project.detail ? (
            <ModalSection>
              <h4>상세 내용</h4>
              <p>{project.detail}</p>
            </ModalSection>
          ) : null}

          {Array.isArray(project.features) && project.features.length > 0 ? (
            <ModalSection>
              <h4>주요 기능</h4>
              <ul>
                {project.features.map((f, i) => (
                  <li key={`${f}-${i}`}>{f}</li>
                ))}
              </ul>
            </ModalSection>
          ) : null}

          {project.troubleshooting ? (
            <ModalSection>
              <h4>트러블슈팅</h4>
              <p>{project.troubleshooting}</p>
            </ModalSection>
          ) : null}

          {Object.values(links).filter(Boolean).length > 0 ? (
            <ModalSection>
              <h4>관련 링크</h4>
              <ModalLinkRow>
                {links.front ? (
                  <a href={links.front} target="_blank" rel="noreferrer">
                    <FaGithub /> FE Repo
                  </a>
                ) : null}
                {links.back ? (
                  <a href={links.back} target="_blank" rel="noreferrer">
                    <FaGithub /> BE Repo
                  </a>
                ) : null}
                {links.demo ? (
                  <a
                    className="demo"
                    href={links.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                ) : null}
              </ModalLinkRow>
            </ModalSection>
          ) : null}
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProjectModal;

