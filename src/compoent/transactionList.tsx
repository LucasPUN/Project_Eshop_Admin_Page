import {Datagrid, EditButton, ImageField, List, TextField} from "react-admin";

export const TransactionList = () => {

  return (
    <List>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="datetime"/>
        <TextField source="status"/>
        <TextField source="total"/>
        <EditButton/>
      </Datagrid>
    </List>
  );
};