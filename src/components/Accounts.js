import bank from "../assets/data/bank.json";
const euros = (number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(number);
};

const Accounts = () => {
  return (
    <div className="container">
      {bank.map((bank, index) => {
        return (
          <div className="oneAcount" key={index}>
            <div className="nameAccount" style={{ background: bank.color }}>
              <p>{bank.name} </p>
              <p>{euros(bank.balance)}</p>
            </div>
            {bank.operations.map((op, index) => {
              return (
                <div className="operations" key={index}>
                  <p>{op.date}</p>
                  <div>
                    <p>{op.description}</p>
                    <p>{euros(op.amount)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
        // 1ère boucle : compte courant
        //2ème boucle : livret A
      })}
    </div>
  );
};

export default Accounts;
