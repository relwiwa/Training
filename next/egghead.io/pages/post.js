import Header from '../components/Header';
import 'isomorphic-fetch';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link';

import withMaterialUI from '../shared/MaterialUI/withMaterialUI';

const Post = ({ content, title }) => 
<div>
  <style jsx>
    {`
      .post-link {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
      }
    `}
  </style>
  <Header />
  <Card>
    <CardHeader title={title} />
    <CardText>
      <div dangerouslySetInnerHTML={{__html: content }} />
      <RaisedButton fullWidth={true} primary>
        <Link href="/" as="/blog">
          <a className="post-link">Go back to blog</a>
        </Link>
      </RaisedButton>
    </CardText>
  </Card>
</div>

Post.getInitialProps = async ({ query: { id }}) => {
  const response = await fetch(`${process.env.BLOGGER_URL}/${id}?key=${process.env.API_KEY}`);
  const data = await response.json();
  const title = data.title;
  const content = data.content;
  return { content, title }; // this makes content, title available as props
};

export default withMaterialUI(Post);
