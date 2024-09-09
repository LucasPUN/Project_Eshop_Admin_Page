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
  SimpleForm, ImageField, ImageInput, Create, SelectInput, RadioButtonGroupInput
} from "react-admin";

export const ProductList = () => {

  return (
    <List>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <ImageField source="image_url" title="name"/>
        <ImageField source="image_hover_url" title="name"/>
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
      <TextInput
        source="name"
        sx={{width: '80%'}}  // Adjust the width as needed
        required
      />
      <TextInput
        source="image_url"
        sx={{width: '80%'}}  // Adjust the width as needed
      />
      <TextInput
        source="image_hover_url"
        sx={{width: '80%'}}  // Adjust the width as needed
      />
      <TextInput
        source="price"
        sx={{width: '80%'}}  // Adjust the width as needed
        required
      />
      <TextInput
        source="stock"
        sx={{width: '80%'}}  // Adjust the width as needed
        required
      />
      <TextInput
        source="description"
        multiline
        rows={5}
        sx={{width: '80%'}}  // Adjust the width as needed
      />

      <SelectInput
        source="brand"
        choices={[
          {id: 'brand1', name: 'Brand 1'},
          {id: 'brand2', name: 'Brand 2'},
          {id: 'brand3', name: 'Brand 3'},
        ]}
        sx={{width: '50%'}}  // Adjust the width as needed
      />

      <SelectInput
        source="category"
        choices={[
          {id: 'category1', name: 'Category 1'},
          {id: 'category2', name: 'Category 2'},
          {id: 'category3', name: 'Category 3'},
        ]}
        sx={{width: '50%'}}  // Adjust the width as needed
      />

      <RadioButtonGroupInput
        source="season"
        choices={[
          {id: 'SPRING', name: 'SPRING'},
          {id: 'SUMMER', name: 'SUMMER'},
          {id: 'AUTUMN', name: 'AUTUMN'},
          {id: 'WINTER', name: 'WINTER'},
        ]}
        sx={{width: '100%'}}  // Adjust the width as needed
      />
    </SimpleForm>
  </Create>
);


export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput
        source="id"
        disabled
        sx={{width: '80%'}}  // Adjust the width as needed
      />
      <TextInput
        source="name"
        sx={{width: '80%'}}  // Adjust the width as needed
      />
      <TextInput
        source="image_url"
        sx={{width: '80%'}}  // Adjust the width as needed
      />
      <TextInput
        source="image_hover_url"
        sx={{width: '80%'}}  // Adjust the width as needed
      />
      <TextInput
        source="price"
        sx={{width: '80%'}}  // Adjust the width as needed
      />
      <TextInput
        source="stock"
        sx={{width: '80%'}}  // Adjust the width as needed
      />
      <TextInput
        source="description"
        multiline
        rows={5}
        sx={{width: '80%'}}  // Adjust the width as needed
      />

      <SelectInput
        source="brand"
        choices={[
          {id: 'brand1', name: 'Brand 1'},
          {id: 'brand2', name: 'Brand 2'},
          {id: 'brand3', name: 'Brand 3'},
        ]}
        sx={{width: '50%'}}  // Adjust the width as needed
      />

      <SelectInput
        source="category"
        choices={[
          {id: 'category1', name: 'Category 1'},
          {id: 'category2', name: 'Category 2'},
          {id: 'category3', name: 'Category 3'},
        ]}
        sx={{width: '50%'}}  // Adjust the width as needed
      />

      <RadioButtonGroupInput
        source="season"
        choices={[
          {id: 'SPRING', name: 'SPRING'},
          {id: 'SUMMER', name: 'SUMMER'},
          {id: 'AUTUMN', name: 'AUTUMN'},
          {id: 'WINTER', name: 'WINTER'},
        ]}
        sx={{width: '100%'}}  // Adjust the width as needed
      />
    </SimpleForm>
  </Edit>
);

