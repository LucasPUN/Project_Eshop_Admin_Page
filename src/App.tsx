
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import {ProductCreate, ProductEdit, ProductList} from "./compoent/productList";
import InventoryIcon from '@mui/icons-material/Inventory';
import {FirebaseAuthProvider, FirebaseDataProvider} from "react-admin-firebase";

const config = {
  apiKey: "AIzaSyAfLCbgiJftYLULD8VLM8PZvmjsZ98MA_A",
  authDomain: "fsse2309-project-lucas.firebaseapp.com",
  projectId: "fsse2309-project-lucas",
  storageBucket: "fsse2309-project-lucas.appspot.com",
  messagingSenderId: "736268366666",
  appId: "1:736268366666:web:e0f0e9366fbf6e4a9487b3",
  measurementId: "G-LFJ1JL8M5Y"
};

const options = {};

const authProvider = FirebaseAuthProvider(config, options);

export const App = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
	>
      <Resource name="product"
                list={ProductList}
                edit={ProductEdit}
                create={ProductCreate}
                icon={InventoryIcon}
      />

    </Admin>
);

    