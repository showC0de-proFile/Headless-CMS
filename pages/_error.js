import React from "react";

function Error({ statusCode }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>
        {statusCode
          ? `Um erro ${statusCode} ocorreu no servidor`
          : "Um erro ocorreu no cliente"}
      </h1>
      <p>Desculpe, algo deu errado.</p>
      {/* Outros elementos que você queira adicionar */}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
