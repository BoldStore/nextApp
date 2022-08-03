import { useRouter } from "next/router";
import Header from "../../../components/StoreComponents/Header/index";
import SalesOrderComponent from "../../../components/CommonComponents/SalesOrderComponent/index";

function SalesPage() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <SalesOrderComponent />
    </div>
  )
}

export default SalesPage;
