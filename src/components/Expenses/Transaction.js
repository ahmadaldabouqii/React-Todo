const Transaction = ({ amount, text, trans }) => {
  const sign = amount < 0 ? "-" : "+";

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
    </li>
  );
};

export default Transaction;
