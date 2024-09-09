
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import {ProductCreate, ProductEdit, ProductList} from "./compoent/productList";
import {FirebaseAuthProvider} from "react-admin-firebase";
import {UserList} from "./compoent/userList";
import {TransactionList} from "./compoent/transactionList";
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TransactionShow from "./compoent/tracsactionShow";
import {firebaseConfig} from "./authServer/firebaseconfig";


const options = {
      logging: true,
      persistence: 'local',
};

const authProvider = FirebaseAuthProvider(firebaseConfig, options);





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
                // recordRepresentation={(record) => `${record.name}`}
      />

      <Resource name="user"
                list={UserList}
                icon={PeopleIcon}
                // recordRepresentation={(record) => `${record.email}`}
      />

      <Resource name="transaction"
                list={ListGuesser}
                show={TransactionShow}
                icon={ReceiptIcon}
      />

    </Admin>
);

    