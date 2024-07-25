import {Datagrid, EditButton, List, TextField} from "react-admin";

export const UserList = () => {

  return (
    <List>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="firebaseUid"/>
        <TextField source="email"/>
        <EditButton/>
      </Datagrid>
    </List>
  );
};