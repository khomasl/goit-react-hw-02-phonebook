import { Component } from 'react'
import { v4 as uuid } from 'uuid'

export class ContactForm extends Component {
  nameIdtitle = uuid()
  prodIdDesc = uuid()
  prodIdSize = uuid()
  prodIdokGoogle = uuid()

  state = {
    name: '',
  }

  handleCheck = (e) => {
    // console.log('value:', e.target.value); // нам не надо
    const { name, checked } = e.target
    const { okGoogle } = this.state
    console.log('name:', name)
    console.log('checked:', checked)
    this.setState({
      okGoogle: !okGoogle,
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleChangeAllInputs = (e) => {
    const { name, type, checked, value } = e.target
    this.setState({ [name]: type === 'checkbox' ? checked : value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const { name } = this.state
    const name = e.target.value
    console.log(`e.target`, e.target.value)
    console.log(`this.state`, this.state)
    console.log(`this.props`, this.props)
    const contact = { name }
    this.setState({ contact })
    this.props.addNewContact({ name }) // !!!метод из App!!!
    this.resetForm()
    console.log(`contacts`, this.state)
  }
  resetForm = () => {
    this.setState({ ...this.state })
  }

  render() {
    const { title, desc, size, okGoogle } = this.state
    const {
      handleChangeAllInputs,
      handleSubmit,
      nameIdtitle,
      prodIdDesc,
      prodIdSize,
      prodIdokGoogle,
    } = this

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameIdtitle}>Title</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <br />
        {/* <label htmlFor={prodIdDesc}>Description</label>
        <input
          type="text"
          id={prodIdDesc}
          name="desc"
          value={desc}
          onChange={handleChangeAllInputs}
        />
        <br />
        <label htmlFor={prodIdSize}>Choose your size</label>
        <select
          name="size"
          value={size}
          onChange={handleChangeAllInputs}
          id={prodIdSize}
        >
          <option value="" disabled>
            ...
          </option>
          <option value="s">s</option>
          <option value="m">m</option>
          <option value="l">l</option>
        </select>
        <br />
        <label htmlFor={prodIdokGoogle}>Agree?</label>
        <input
          type="checkbox"
          name="okGoogle"
          id={prodIdokGoogle}
          checked={okGoogle}
          onChange={handleChangeAllInputs}
        /> */}
        <br />
        {/* <button type="submit" disabled={!okGoogle}> */}
        <button type="submit">Add contact</button>
      </form>
    )
  }
}
