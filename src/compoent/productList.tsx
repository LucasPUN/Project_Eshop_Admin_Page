import {useMediaQuery, Theme} from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  SimpleList,
  EditButton,
  ReferenceField,
  Edit,
  TextInput,
  SimpleForm, ImageField, ImageInput, Create
} from "react-admin";

export const ProductList = () => {

  return (
    <List>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <ImageField source="image_url" title="name" />
        <ImageField source="image_hover_url" title="name" />
        <TextField source="price"/>
        <TextField source="has_stock"/>
        <EditButton/>
      </Datagrid>
    </List>
  );
};

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required/>
      <TextInput source="image_url"/>
      <TextInput source="image_hover_url"/>
      <TextInput source="price" required/>
      <TextInput source="stock" required/>
      <TextInput source="description" multiline rows={5}/>
    </SimpleForm>
  </Create>
);


export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled/>
      <TextInput source="name"/>
      <TextInput source="image_url"/>
      <TextInput source="image_hover_url"/>
      <TextInput source="price"/>
      <TextInput source="stock"/>
      <TextInput source="description" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

