import { BsArrowRightShort } from 'react-icons/bs'
import PropTypes from 'prop-types'

const PrimaryButton = ({
  text,
  handleOnClick,
  style = {
    width: '260px',
    height: '52px',
    justifyContent: 'space-evenly',
  },
  disabled,
}) => {
  return (
    <button
      className="submit-button d-flex align-items-center"
      style={style}
      onClick={handleOnClick}
      disabled={disabled || false}
    >
      {text}
      <span>
        <BsArrowRightShort className="ms-3" />
      </span>
    </button>
  )
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.bool,
}

export default PrimaryButton
