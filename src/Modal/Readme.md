Types:

```
const { Component } = require('react')

class ModalExample extends Component {
  render () {
    const { type } = this.props
    const { hidden } = this.state || {}

    return (
      <View>
        <Button onClick={ () => this.setState({ hidden: false })}>
          { `Show ${type} modal` }
        </Button>

        <Modal
          hidden={ hidden }
          onClose={ () => this.setState({ hidden: true }) }
          type={ type }
        >
          <Grid columns={1}>
            <Text>Modal content.</Text>
            <Button>Focus content by pressing tab</Button>
          </Grid>
        </Modal>
      </View>
    )
  }
};

<Grid>
  <ModalExample type='default'/>
  <ModalExample type='transparent'/>
  <ModalExample type='lightbox'/>
</Grid>
```

Sizes:

```
const { Component } = require('react')

class ModalExample extends Component {
  render () {
    const { width } = this.props
    const { hidden } = this.state || {}

    return (
      <View>
        <Button onClick={ () => this.setState({ hidden: false })}>
          { `Show ${width} modal` }
        </Button>

        <Modal
          hidden={ hidden }
          onClose={ () => this.setState({ hidden: true }) }
          width={ width }
        >
        <Modal.Header>
          <Modal.Title>{ width } modal</Modal.Title>
          <Modal.CloseButton
            onClick={ () => this.setState({ hidden: true }) }
          />
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Modal.Body>
       </Modal>
      </View>
    )
  }
};

<Grid>
  <ModalExample width='50%'/>
  <ModalExample width='480px'/>
  <ModalExample width='900px'/>
</Grid>
```

Content:

```
const onClose = () => setState({ hidden: true })
const onOpen = () => setState({ hidden: false });

<View>
  <Button onClick={ onOpen }>
    Show modal
  </Button>

  <Modal
    hidden={ state.hidden }
    onClose={ onClose }
  >
    <Modal.Header>
      <Modal.Title>Dialog Title</Modal.Title>
      <Modal.CloseButton
        onClick={ onClose }
      />
    </Modal.Header>
    <Modal.Body>
      Modal content.
    </Modal.Body>
    <Modal.Footer>
      <Button autoFocus onClick={ onClose }>
        Ok
      </Button>
    </Modal.Footer>
  </Modal>
</View>
```