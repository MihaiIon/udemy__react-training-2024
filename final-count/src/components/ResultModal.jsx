import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      modalRef.current.showModal();
    }
  }));

  return (
    <dialog ref={modalRef} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} second{targetTime > 1 ? "s" : ""}</strong>.
      </p>
      <p>
        You stopped the timer at <strong>X seconds left</strong>.
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
