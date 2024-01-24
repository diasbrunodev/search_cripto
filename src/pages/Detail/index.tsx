import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container } from "./styles"

//https://coinlib.io/api/v1/coin?key=c8a5e53728e75b63&pref=BRL&symbol
//https://sujeitoprogramador.com/api-cripto/coin/?key=c8a5e53728e75b63&pref=BRL&symbol
//https://sujeitoprogramador.com/api-cripto/coin/?key=c8a5e53728e75b63&pref=BRL&symbol=DOGE

interface CoinProp {
  symbol: string
  name: string
  price: string
  market_cap: string
  low_24h: string
  high_24h: string
  total_volume_24h: string
  delta_24h: string
  formatedPrice: string
  formatedMarket: string
  formatedLowprice: string
  formatedHighprice: string
  error?: string
}

export const Detail = () => {

  const { cripto } = useParams()

  const [detail, setDetail] = useState<CoinProp>()
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    function getData() {
      fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=c8a5e53728e75b63&pref=BRL&symbol=${cripto}`)
        .then(response => response.json())
        .then((data: CoinProp) => {
          // console.log("error", data.error)

          if (data.error) {
            navigate("/")
            return
          }

          const price = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          })

          const resultData = {
            ...data,
            formatedPrice: price.format(Number(data.price)),
            formatedMarket: price.format(Number(data.market_cap)),
            formatedLowprice: price.format(Number(data.low_24h)),
            formatedHighprice: price.format(Number(data.high_24h))
          }

          // console.log("result",(resultData))
          setDetail(resultData)
          setLoading(false)
        })
    }

    getData()
  }, [cripto, navigate])

  if (loading) {
    return (
      <Container className="container">
        <h4 className="center">Carregando informações...</h4>
      </Container>
    )
  }

  return (
    <>
      <Container className="container">
        <h1 className="center">{detail?.name}</h1>
        <p className="center">{detail?.symbol}</p>

        <section className="content">
          <p>
            <strong>Preço:</strong> {detail?.formatedPrice}
          </p>
          <p>
            <strong>Maior Preço 24h:</strong> {detail?.formatedHighprice}
          </p>
          <p>
            <strong>Menor Preço 24h:</strong> {detail?.formatedLowprice}
          </p>
          <p>
            <strong>Delta 24h:</strong> 
            <span className={Number(detail?.delta_24h.replace(',', '.')) >= 0 ? 'profit' : 'loss'}>
              {detail?.delta_24h}
            </span>
          </p>
          <p>
            <strong>Valor de mercado:</strong> {detail?.formatedMarket}
          </p>
        </section>
      </Container>

    </>
  )
}
