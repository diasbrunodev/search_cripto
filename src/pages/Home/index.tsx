import { FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

import { Container, Form, Table, Tr } from "./styles"

// https://coinlib.io/api/v1/coinlist?key=c8a5e53728e75b63&pref=BTC&page=1&order=volume_desc
// https://sujeitoprogramador.com/api-cripto/?key=c8a5e53728e75b63&pref=BTC&page=1&order=volume_desc

interface CoinProps {
  name: string
  delta_24h: string
  price: string
  symbol: string
  volume_24h: string
  market_cap: string
  formatedPrice: string
  formatedMarket: string
  numberDelta?: number
}

interface DataProps {
  coins: CoinProps[]
}

export const Home = () => {

  const [coins, setCoins] = useState<CoinProps[]>([])

  const [inputValue, setInputValue] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    function getData() {
      fetch('https://sujeitoprogramador.com/api-cripto/?key=c8a5e53728e75b63&pref=BTC&page=1&order=volume_desc&pref=BRL')
        .then(response => response.json())
        .then((data: DataProps) => {
          const coinsData = data.coins.slice(0, 15)

          const price = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          })

          const formatResult = coinsData.map((item) => {
            const formated = {
              ...item,
              formatedPrice: price.format(Number(item.price)),
              formatedMarket: price.format(Number(item.market_cap)),
              numberDelta: parseFloat(item.delta_24h.replace(',', '.'))
            }
            return formated
          })

          setCoins(formatResult);
        })
    }
    getData()
  }, [])

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (inputValue === "") return

    navigate(`/detail/${inputValue}`)
  }

  return (
    <>
      <main>
        <Container>
          <Form onSubmit={handleSearch}>
            <input
              placeholder="Digite o símbolo da moeda: BTC..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
              <BiSearch size={30} color='#fff' />
            </button>
          </Form>

          <Table>
            <thead>
              <tr>
                <th scope='col'>Moeda</th>
                <th scope='col'>Valor mercado</th>
                <th scope='col'>Preço</th>
                <th scope='col'>Volume</th>
              </tr>
            </thead>

            <tbody id='tbody'>
              {coins.map(coin => (
                <Tr key={coin.name}>
                  <td className='tdLabel' data-label='Moeda'>
                    <Link to={`/detail/${coin.symbol}`} className='link'>
                      <span>{coin.name}</span> | {coin.symbol}
                    </Link>
                  </td>
                  <td className='tdLabel' data-label='Mercado'>
                    {coin.formatedMarket}
                  </td>
                  <td className='tdLabel' data-label='Preço'>
                    {coin.formatedPrice}
                  </td>
                  <td className={coin.numberDelta && coin.numberDelta >= 0 ? 'tdProfit' : 'tdLoss'} data-label='Volume'>
                    <span>{coin.delta_24h}</span>
                  </td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </main>
    </>
  )
}
