import {closeModal} from '../features/modal/modalSlice'
import {useDispatch}  from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';

function Modal() {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items?</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(closeModal());
              dispatch(clearCart());
            }}
            type="button"
            className="btn confirm-btn"
          >
            Ok
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            type="button"
            className="btn clear-btn"
          >
            No
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal