import React from 'react'
import './Card.scss'

const Card = ({
  heading,
  imgUrl,
  title,
  postUrl,
  author,
  authorUrl,
  date,
  category
}) => {
  return (
    <div className="card">
      <div className="p-card">
        <header className="p-card__header">
          <h5 className="u-no-margin--bottom">{heading}</h5>
        </header>
        <div className="p-card__content">
          <img className="p-card__image" src={imgUrl} alt="" />
          <h4>
            <a href={postUrl}>{title}</a>
          </h4>
          <div className="p-card__metadata">
            by <a href={authorUrl}>{author}</a> on {date}
          </div>
        </div>
        <footer className="p-card__footer">{category}</footer>
      </div>
    </div>
  )
}

export default Card
