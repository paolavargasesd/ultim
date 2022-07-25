import './event.scss'

const Event = ({ onClose, info }) => {
  return (
    <div>
      Event {info}
      <button
        onClick={(event) => {
          onClose();
        }}
      >
        Click
      </button>
    </div>
  );
};
export default Event;