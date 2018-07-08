import Header from '../components/Header';
import withMaterialUI from '../shared/MaterialUI/withMaterialUI';

const Index = ({ title = 'Hello from Next.js' }) =>
<div>
  <Header />
  <h2>{title}</h2>
</div>;

export default withMaterialUI(Index);
