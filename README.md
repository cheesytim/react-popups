# React PopUps! :sheep:
A very simple react component that allows you to wrap your content in a modal window and control its visibility.
### Component can be:
* Controlled (manage by props)
* Uncontrolled (manage by state)

### Example Controlled:
The controlling component does not have its own button, you need to create it and manage the `isVisible` prop
```javascript
changePopupState() {
  this.setState({ isVisible: !this.state.isVisible });
}

//JSX
<Button onClick={this.changePopupState}>
<Popup isVisible={this.state.isVisible} handleClickOnBackdrop={this.changePopupState} isControlled>
  <Content />
</Popup>
```

### Example Uncontrolled:
The uncontrolled popup has its own button, you can transfer the styles and button sign to it
```javascript
<Popup btnStyles={ width: '50px', height: '20px' } btnSign="I'm a button">
  <Content />
</Popup>
```
requires [styled-components](https://github.com/styled-components/styled-components)
