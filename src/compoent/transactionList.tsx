import {ArrayField, Datagrid, EditButton, List, ReferenceField, TextField} from "react-admin";

export const TransactionList = () => {

  return (
    <List>
      <Datagrid>
        <TextField source="id"/>
        <ReferenceField source="buyer_uid" reference="user">
          <TextField source="email"/>
        </ReferenceField>
        <TextField source="datetime"/>
        <TextField source="status"/>
        <TextField source="total"/>
        <ArrayField source="Item">
        <ReferenceField source="tid" reference="t">
          <TextField source="name"/>
        </ReferenceField>
        </ArrayField>

        <EditButton/>
      </Datagrid>
    </List>
  );
};