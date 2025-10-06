import React from "react";
import clsx from "clsx";
import styles from "./UpdatesCard.module.css";

type Size = "sm" | "lg";
type Tone = "neutral" | "warning" | "primary";

export type UpdatesCardProps = {
  size?: Size;
  tone?: Tone;
  title?: string;
  subtitle?: string;
  description?: string;
  quote?: string;
  author?: string;
  imageUrl?: string;
  badgeText?: string;
  footerTitle?: string;
  footerText?: string;
  onClick?: () => void;
  as?: React.ElementType; // tipado más correcto que "any" | union de strings
  children?: React.ReactNode;
};

const toneClass: Record<Tone, string> = {
  neutral: "toneNeutral",
  warning: "toneWarning",
  primary: "tonePrimary",
};

export default function UpdatesCard({
  size = "sm",
  tone = "neutral",
  title,
  subtitle,
  description,
  quote,
  author,
  imageUrl,
  badgeText,
  footerTitle,
  footerText,
  onClick,
  as = "article",
  children,
}: UpdatesCardProps) {
  const Comp = as as React.ElementType;

  return (
    <Comp
      className={clsx(
        styles.card,
        styles[size],
        styles[toneClass[tone]],
        onClick && styles.clickable
      )}
      onClick={onClick}
    >
      {/* Imagen / portada */}
      {imageUrl && (
        <div className={styles.media}>
          <img src={imageUrl} alt={title || subtitle || "card image"} />
          {badgeText && <span className={styles.badge}>{badgeText}</span>}
        </div>
      )}

      {/* Contenido */}
      <div className={styles.body}>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        {title && <h3 className={styles.title}>{title}</h3>}

        {quote ? (
          <blockquote className={styles.quote}>
            <span className={styles.quoteIcon} aria-hidden>
              “
            </span>
            <p>{quote}</p>
            {author && <cite>— {author}</cite>}
          </blockquote>
        ) : (
          description && <p className={styles.description}>{description}</p>
        )}

        {children}
      </div>

      {(footerTitle || footerText) && (
        <div className={styles.footer}>
          {footerTitle && (
            <div className={styles.footerTitle}>{footerTitle}</div>
          )}
          {footerText && <div className={styles.footerText}>{footerText}</div>}
        </div>
      )}
    </Comp>
  );
}
