
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import {ProductCreate, ProductEdit, ProductList} from "./compoent/productList";
import {FirebaseAuthProvider} from "react-admin-firebase";
import {UserList} from "./compoent/userList";
import {TransactionList} from "./compoent/transactionList";
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';

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

      <Resource name="user"
                list={UserList}
                icon={PeopleIcon}
      />

      <Resource name="transaction"
                list={TransactionList}
                icon={ReceiptIcon}
      />

    </Admin>
);

    