export default function Step({ step, setStep }) {
  function handleCountPlus() {
    setStep((d) => (d += 1));
  }
  function handleCountMinus() {
    setStep((d) => (d -= 1));
  }
  return (
    <div>
      <button className="btn" onClick={handleCountMinus}>
        -
      </button>
      <span>Step: {step}</span>
      <button className="btn" onClick={handleCountPlus}>
        +
      </button>
    </div>
  );
}
