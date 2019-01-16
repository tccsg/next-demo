import React from 'react'
import HeaderFooter from '../../layouts/HeaderFooter'
import Link from 'next/link'

export default class Helps extends React.Component {
  constructor (props) {
    super(props)
  }
  static async getInitialProps() {
    const hlist = await new Promise((resolve) => {
      const hlist = [
        {
          title: 'title1',
          id: '1'
        },{
          title: 'title2',
          id: '2'
        },{
          title: 'title3',
          id: '3'
        },{
          title: 'title4',
          id: '4'
        },{
          title: 'title5',
          id: '5'
        },
      ]
      resolve(hlist)
    })
    return {hlist}
  }
  render () {
    return (
      <HeaderFooter active="helps">
        <div id="helpspage">
          <ul>
          {
            this.props.hlist.map((help) => {
            return <li key={help.id}>
              <Link as={`/helps/${help.id}`} href={`/Help/help?id=${help.id}&title=${help.title}`}>
                <a>{help.title}</a>
              </Link>
            </li>
          })}
          </ul>
        </div>
        <style>{`
          #helpspage {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 600px;
            width: 100%
          }
        `}</style>
      </HeaderFooter>
    )
  }
}