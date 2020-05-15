import Layout from "../components/Layout";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { HOMEPAGE_CATEGORY_LIST } from "../data/homepage";
import CategoryList from "../components/CategoryList";
import { CircularProgress } from "@material-ui/core";

const index = () => {
  const pageConfig = {
    title: "Homepage",
  }
  
  const {loading, data} = useQuery(HOMEPAGE_CATEGORY_LIST)

  return (
    <Layout pageConfig={pageConfig}>
      {(loading)?<CircularProgress />:<>
        <CategoryList categoryData={data.categoryList[0].children} />
      </>}
    </Layout>
  );
};

export default (withApollo)(index);
