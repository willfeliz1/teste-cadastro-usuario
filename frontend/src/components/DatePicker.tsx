import { useField, useFormikContext } from 'formik';
import DatePicker, { registerLocale } from 'react-datepicker';
import { createGlobalStyle } from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";

import ptBR from 'date-fns/locale/pt-BR';
registerLocale('ptBR', ptBR);

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
        selected={(field.value && new Date(field.value))|| null}
        placeholderText="Sua data de nascimento"
        onChange={val => {
          setFieldValue(field.name, val);
        }}
        wrapperClassName='date_picker full-width'
        locale="ptBR"
        dateFormat='dd/MM/yyyy'
      />
      <DatePickerWrapperStyles />
    </>
  );
};

export default DatePickerField