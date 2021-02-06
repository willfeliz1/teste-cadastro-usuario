import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import { createGlobalStyle } from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";

const DatePickerWrapperStyles = createGlobalStyle`
    .date_picker.full-width {
      width: 100%;
    }
`;

export const DatePickerField = ({ ...props }: any) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <>
      <DatePicker 
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        dateFormat="dd/MM/yyyy"
        placeholderText="Sua data de nascimento"
        onChange={val => {
          setFieldValue(field.name, val);
        }}
        wrapperClassName='date_picker full-width'
      />
      <DatePickerWrapperStyles />
    </>
  );
};

export default DatePickerField