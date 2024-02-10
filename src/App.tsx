import { useState } from "react";
import "./App.css";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  return (
    <>
      <div className="container">
        {yesPressed ? (
          <>
            <img
              src="https://tenor.com/fr/view/bear-kiss-bear-kisses-kiss-kisses-love-gif-22536058.gif"
              alt="bear"
            />
            <div className="text">Youpiiiii !!!</div>
          </>
        ) : (
          <>
            <img
              src="https://tenor.com/fr/view/peach-goma-hug-comfort-gif-1106570998235800782.gif"
              alt="ij"
            />

            <div className="text">Veux-tu etre ma valentine?</div>
            <div>
              <button
                className="yesButton"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Oui
              </button>

              <button onClick={handleNoClick} className="noButton">
                Non
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
