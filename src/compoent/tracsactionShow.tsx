import React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField, Datagrid, ArrayField } from 'react-admin';

const TransactionShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="datetime" />
      <TextField source="status" />
      <TextField source="total" />

      <ReferenceField source="buyer_uid" reference="user">
        <TextField source="email" />
      </ReferenceField>

      <ArrayField source="Item">
        <Datagrid>
          <TextField source="product.id" reference="product" />
          <ReferenceField source="product.id" reference="product">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="quantity" />
          <TextField source="subtotal" />
        </Datagrid>
      </ArrayField>

    </SimpleShowLayout>
  </Show>
);

export default TransactionShow;