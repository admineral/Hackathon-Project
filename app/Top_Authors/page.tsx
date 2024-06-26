import Head from 'next/head';
import TopAuthors from '../../components/Top_Authors/TopAuthors_Component';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Top Authors</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
      </Head>
      <TopAuthors />
    </div>
  );
}
