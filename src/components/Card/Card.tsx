import React from 'react';
import CardProps from './cardProps';
import './card.css';

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  image,
  imagePosition = 'top',
  actions,
  classes = '',
  layout = 'vertical',
  variant = 'primary',
  size = 'md',
  onClick,
}) => {
  const cardId = id || (title ? `card-${title.replace(/\s+/g, '-').toLowerCase()}` : `card-${Math.random().toString(36).substring(2, 9)}`);
  const isHorizontal = layout === 'horizontal';

  return (
    <div
      id={cardId}
      className={`card ${classes} card-${variant} card-${size} card-image-${imagePosition} ${isHorizontal ? 'card-horizontal' : ''}`}
      onClick={onClick}
      role="region"
      aria-labelledby={`${cardId}-title`}
    >
      {(image && imagePosition === 'top') && <img src={image} alt={title ? `${title}-image` : 'card-image'} className="card-image" />}
      <div className="card-content">
        {title && <h3 id={`${cardId}-title`} className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
      </div>
      {(image && imagePosition === 'bottom') && <img src={image} alt={title ? `${title}-image` : 'card-image'} className="card-image" />}
      {actions && <div className="card-actions">{actions}</div>}
      {(image && (imagePosition === 'left' || imagePosition === 'right')) && (
        <div className="card-content-with-image">
          {(imagePosition === 'left') && <img src={image} alt={title ? `${title}-image` : 'card-image'} className="card-image-side" />}
          <div className="card-content">
            {title && <h3 id={`${cardId}-title`} className="card-title">{title}</h3>}
            {description && <p className="card-description">{description}</p>}
          </div>
          {(imagePosition === 'right') && <img src={image} alt={title ? `${title}-image` : 'card-image'} className="card-image-side" />}
        </div>
      )}
    </div>
  );
};

export default Card;