const priceLabel = (price = 'Free') => ({
  '::after': {
    content: `'${price}'`
  }
})

export const CustomSelectStyles = {
  container: styles => ({
    ...styles,
    marginBottom: 24
  }),
  control: styles => ({
    ...styles,
    border: 'none',
    borderBottom: '1px solid #BABDCA'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  DropdownIndicator: styles => ({
    ...styles,
    color: 'blue'
  }),
  option: (styles, {data}) => ({ ...styles, ...priceLabel(data.price) }),
  placeholder: styles => ({ ...styles, ...priceLabel()}),
  singleValue: (styles, { data }) => ({ ...styles, ...priceLabel(data.price) }),
}