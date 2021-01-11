import React from 'react'
import PropTypes from 'prop-types'

const InfoCard = ({ title, tag }) => {
  return (
    <div className={`content-center info_card`}>
      <h2 className={`text-sm text-center`}>
        <p>{title}</p>
        <p>
          <i>{tag}</i>
        </p>
      </h2>
    </div>
  )
}

export default InfoCard

InfoCard.defaultProps = {
  title: 'Nothing is availabe',
  tag: 'If anything is found it will appear here'
}

InfoCard.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.string
}
