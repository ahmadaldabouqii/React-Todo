const Balance = ({ total }) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total.toFixed(2)}</h1>
    </>
  );
};
export default Balance;
