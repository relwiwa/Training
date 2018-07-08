import Header from '../components/Header';
import withMaterialUI from '../shared/MaterialUI/withMaterialUI';
import 'isomorphic-fetch';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link';

const Index = ({ posts }) =>
<div>
  <Header />
  {posts.map(post => 
    <Card key={post.id}>
      <CardHeader title={post.title} />
      <CardText>
        <RaisedButton fullWidth={true} primary>
          <Link href={`/post?id=${post.id}`} as={`/blog/${post.id}`}>
            <a style={{
              textDecoration: 'none',
              fontSize: 18,
              color: 'white',
            }}>
              Click to view post!
            </a>
          </Link>
        </RaisedButton>
      </CardText>
    </Card>
  )}
</div>;

Index.getInitialProps = async () => {
  const response = await fetch(`${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`);
  const data = await response.json();
  return { posts: data.items }
}

export default withMaterialUI(Index);
