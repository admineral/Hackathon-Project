import Head from 'next/head';
import EditorPicks from '../../components/Editor_Picks/EditorPicks_Component';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Editor&apos;s Picks</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
      </Head>
      <EditorPicks />
    </div>
  );
}