import { useEffect, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import './App.scss'
import Card from './Components/Card'

const App = () => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios.get(
      'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'
    )
    setApiData(res.data)
  }

  if (apiData.length === 0) {
    return <div>Loading</div>
  } else {
    return (
      <div className="app">
        <div className="row">
          {apiData.map((data, idx) => {
            const props = {
              heading: data._embedded['wp:term'][1][0].name.toUpperCase(),
              title: data.title.rendered,
              postUrl: data.link,
              imgUrl: data.featured_media,
              author: data._embedded.author[0].name,
              authorUrl: data._embedded.author[0].link,
              date: dayjs(data.date).format('DD MMMM YYYY'),
              category: data._embedded['wp:term'][0][0].name.slice(0, -1)
            }
            return (
              <div key={idx} className="col-4 blog-p-card">
                <Card {...props} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
