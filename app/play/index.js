//importuud

import Head from "next/head";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

//function importln
export default function App() {
  //usestates
  const [clicked, setClicked] = useState(true);
  const router = useRouter();
  const [cookies, setCookies] = useCookies("hellow");
  const params = useSearchParams();
  const mode = params.get("mode");
  const [propertyBack, setPropertyBack] = useState([
    {
      path: "/images/photo1.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo2.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo3.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo4.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo5.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo6.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo1.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo2.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo3.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo4.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo5.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "/images/photo6.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
  ]);
  const [property, setProperty] = useState(shuffleArray(propertyBack));
  const [click, setClick] = useState(1);
  const [fisrtClick, setFirstClick] = useState();
  const [moves, setMoves] = useState(0);
  const [displayTime, setDisplayTime] = useState(0);
  const [solvedCards, setSolvedCards] = useState(0);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  function handleCardClick(id, path) {
    setClick(click + 1);
    setMoves(moves + 1);

    const updatedProperty = property.map((card) => {
      if (card.id === id) {
        return { ...card, clicked: !card.clicked };
      }
      return card;
    });

    setProperty(updatedProperty);

    if (click === 1) {
      setFirstClick({ id, path });
    } else if (click === 2) {
      setClick(1);

      if (fisrtClick.path === path && fisrtClick.id !== id) {
        const updatedProperty = property.map((card) => {
          if (card.id === id || card.id === fisrtClick.id) {
            return { ...card, clicked: true };
          }

          return card;
        });
        setProperty(updatedProperty);
        setSolvedCards(solvedCards + 1);
      } else {
        setTimeout(() => {
          const updatedProperty = property.map((card) => {
            if (card.id === id || card.id === fisrtClick.id) {
              return { ...card, clicked: false };
            }
            return card;
          });
          setProperty(updatedProperty);
        }, 1000);
      }
    }
  }

  function restart() {
    router.push("/");
  }
  let seconds = 0;

  function pollDOM() {
    seconds++;
    if (mode === "easy") {
      if (seconds === 4) {
        const updatedProperty = property.map((card) => {
          return { ...card, clicked: false };
        });
        setProperty(updatedProperty);
        let displayTime = 0;
        function handleTimer() {
          displayTime++;
          setDisplayTime(displayTime);
        }
        const timer = setInterval(handleTimer, 1000);
      }
    } else if (mode === "hard") {
      if (seconds === 3) {
        const updatedProperty = property.map((card) => {
          return { ...card, clicked: false };
        });
        setProperty(updatedProperty);
        let displayTime = 0;
        function handleTimer() {
          displayTime++;
          setDisplayTime(displayTime);
        }
        const timer = setInterval(handleTimer, 1000);
      }
    }
  }

  //useeffect buyu useeffect
  useEffect(() => {
    const interval = setInterval(pollDOM, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(solvedCards);
  if (solvedCards === 6) {
    router.push("/doneSolve?" + displayTime);
  }
  return (
    <div className="outer">
      <Head>
        <title>jaja</title>
      </Head>
      <h1>jaja moves: {Math.floor(moves / 2)}</h1>
      <h2>time: {displayTime}</h2>
      <h2>memorize many photos as possible</h2>

      {mode == "hard" ? (
        <div className="card_container">
          {property.map((element, index) => {
            return (
              <div
                key={index}
                className="cards"
                style={element.clicked ? { transform: "rotateY(360deg)" } : {}}
                onClick={() => handleCardClick(element.id, element.path)}
              >
                {element.clicked ? (
                  <img width="100%" alt={index} src={element.path} />
                ) : (
                  <img alt={index} src="/images/blank.webp" />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card_container">
          {property.map((element, index) => {
            return (
              <div
                key={index}
                className="cards"
                style={element.clicked ? { transform: "rotateY(360deg)" } : {}}
                onClick={() => handleCardClick(element.id, element.path)}
              >
                {element.clicked ? (
                  <img width="100%" alt={index} src={element.path} />
                ) : (
                  <img alt={index} src="/images/blank.webp" />
                )}
              </div>
            );
          })}
        </div>
      )}
      <div onClick={restart} className="play">
        Restart
      </div>
    </div>
  );
}
