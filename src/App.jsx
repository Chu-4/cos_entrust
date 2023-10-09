import FilterableProductTable from '@/homePage'
import Login from '@/login'
import BottomTab from '@/BottomTab'

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

const Page = () => {
  return (<div style={{height:'100vh'}}>
    {/* <Login></Login> */}
    <FilterableProductTable products={PRODUCTS} />
    <BottomTab></BottomTab>
  </div>)
}

export default function App() {
  return <Page></Page>
}
