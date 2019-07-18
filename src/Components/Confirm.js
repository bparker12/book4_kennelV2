import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

export default class deleteConfirm extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
}
