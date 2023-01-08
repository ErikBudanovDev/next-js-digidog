import Link from 'next/link';

function NewsPage() {
  return <><h1>The News Page</h1>
    <ul>
      <li>
        <Link href={'/news/nextjs-is-a-great-framework'}>
        NextJS is a great tool</Link></li>
    <li>something else</li>
    </ul></>;
}
export default NewsPage;
