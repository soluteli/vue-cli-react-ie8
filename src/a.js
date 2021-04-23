import React from 'react'

export default class A extends React.Component {

  componentDidMount() {
    import('./c')
  }
  

  render() {
    return (
      <div>
        a
      </div>
    )
  }
}

/* export class B {

}

export default {
  a: 1,
  B
}
 */

