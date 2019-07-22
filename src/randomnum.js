

export const useRandomNum = () =>{

  const [randomNum, setRandomNum] = useState(0)

  setRandomNum((Math.floor(Math.random() * 7) + 1))
}
